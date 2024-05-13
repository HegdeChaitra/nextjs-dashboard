'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  customerId: z.string(),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});


const CustFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Please enter your name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  age: z.string().trim().optional(), // Assuming positive age

  occupation: z.string().trim().optional(), // Optional field
  education: z.string().trim().optional(), // Optional field
  location: z.string().trim().optional(), // Optional field

  // Height (assuming feet and inches are separate)
  feet: z.string().trim().optional(),
  inches: z.string().trim().optional(),

  politics: z.string().trim().optional(), // Optional field
  religion: z.string().trim().optional(), // Optional field

  maritalStatus: z.string().trim().optional(), // Optional field

  // Kids (assuming separate fields)
  haveKids: z.enum(['yes', 'no']).optional(), // Optional field
  wantKids: z.enum(['yes', 'no']).optional(), // Optional field

  drugs: z.enum(['yes', 'no']).optional(), // Optional field
});


export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
const CreateUser = CustFormSchema.omit({});


export async function createCustomer(prevState: string | undefined, formData: FormData) {

  console.log('form data');
  console.log(formData);
  const validatedFields = CreateInvoice.safeParse({
      name : formData.get('name'),
      email : formData.get('email'),
      age : formData.get('age'),
      occupation : formData.get('occupation'),
      education : formData.get('education'),
      location : formData.get('location'),
      feet : formData.get('feet'),
      inches : formData.get('inches'),
      politics : formData.get('politics'),
      religion : formData.get('religion'),
      maritalStatus : formData.get('maritalStatus'),
      haveKids : formData.get('haveKids'),
      wantKids : formData.get('wantKids'),
      drugs : formData.get('drugs'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  const { name, email, age, occupation, education, location, feet, inches, politics, religion, maritalStatus, haveKids, wantKids, drugs } = validatedFields.data;

  try{
      await sql`
        INSERT INTO Customer (name, email, age, occupation, education, location, height_feet, height_inches, politics, religion, marital_status, have_kids, want_kids, drugs)
        VALUES (${name}, ${email}, ${age}, ${occupation}, ${education}, ${location}, ${feet}, ${inches}, ${politics}, ${religion}, ${maritalstatus}, ${havekids}, ${wantkids}, ${drugs})
      `;
  } catch (error) {
      return {
        message: 'Database Error: Failed to create customer',
      };
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}


export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  // Test it out:
  try{
      await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
  } catch (error) {
      return {
      message: 'Databse Error: Failed to create invoice',
      };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;
  try {
      await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
      return {
        message: 'Database error: Error updating invoice'
      };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
