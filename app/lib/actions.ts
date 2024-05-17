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
  first_name: z.string().trim().default(""),
  last_name: z.string(),
  email: z.string().default(""),
  phone: z.string(),
  age: z.coerce.number(),

  company_name: z.string().trim().default(""), // Optional field
  position: z.string(),

  education_level: z.string().trim().default(""), // Optional field
  school: z.string(),
  income_level: z.string(),
//   location: z.string().trim().default(""), // Optional field
  city: z.string(),
  state: z.string(),

  // Height (assuming feet and inches are separate)
  feet: z.coerce.number(),
  inches: z.coerce.number(),

  politics: z.string().trim().default(""), // Optional field
  religion: z.string().trim().default(""), // Optional field

  maritalStatus: z.string().trim().default(""), // Optional field

  // Kids (assuming separate fields)
  haveKids: z.string().default(""), // Optional field
  wantKids: z.string().default(""), // Optional field

  drugs: z.string().default(""), // Optional field
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
const CreateCustomer = CustFormSchema.omit({});


export async function createCustomer(formData: FormData) {

  console.log('form data');
  console.log(formData);
  const validatedFields = CreateCustomer.safeParse({
      first_name : formData.get('first_name'),
      last_name: formData.get('last_name'),
      email : formData.get('email'),
      phone: formData.get('phone'),
      age : formData.get('age'),
      company_name : formData.get('company_name'),
      position: formData.get('position'),
      education_level : formData.get('education_level'),
      school: formData.get('school'),
      income_level: formData.get('income_level'),
//       location : formData.get('location'),
      city: formData.get('city'),
      state: formData.get('state'),
      feet : formData.get('feet'),
      inches : formData.get('inches'),
      politics : formData.get('politics'),
      religion : formData.get('religion'),
      maritalStatus : formData.get('maritalStatus'),
      haveKids : formData.get('haveKids'),
      wantKids : formData.get('wantKids'),
      drugs : formData.get('drugs'),
  });

  console.log('form dataw');
  console.log(validatedFields.data)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  const { first_name, last_name, email, phone, age, company_name, position, education_level, school, income_level, city, state, feet, inches, politics, religion, maritalStatus, haveKids, wantKids, drugs } = validatedFields.data;
  console.log('form data');
  console.log(validatedFields.data)

  try{
      await sql`
        INSERT INTO person (first_name, last_name, email, phone, age, company_name, position, education_level, school, income_level, city, state, height_feet, height_inches, politics, religion, marital_status, have_kids, want_kids, drugs)
        VALUES (${first_name}, ${last_name}, ${email}, ${phone}, ${age}, ${company_name}, ${position}, ${education_level}, ${school}, ${income_level}, ${city}, ${state}, ${feet}, ${inches}, ${politics}, ${religion}, ${maritalStatus}, ${haveKids}, ${wantKids}, ${drugs})
      `;
  } catch (error) {
      return {
        message: 'Database Error: Failed to create customer',
      };
  }

  revalidatePath('/dashboard/customers/show');
  redirect('/dashboard/customers/show');
//   revalidatePath('/dashboard');
//   redirect('/dashboard');
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
