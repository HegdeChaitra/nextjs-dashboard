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


export async function createCustomer(prevState: State, formData: FormData) {

  console.log('form data');
  console.log(formData);
  const name = formData.get('name');
  const email = formData.get('email');
//   const age = parseInt(formData.get('age'));
  const age = formData.get('age') !== null ? parseInt(formData.get('age')) : null;

  const occupation = formData.get('occupation');
  const education = formData.get('education');
  const location = formData.get('location');
  const feet = parseInt(formData.get('feet'));
  const inches = parseInt(formData.get('inches'));
//   const feetValue = formData.get('feet');
//   const feet = feetValue != null ? parseInt(feetValue) : null;
//
//   const inchesValue = formData.get('inches');
//   const inches = inchesValue != null ? parseInt(inchesValue) : null;

  const politics = formData.get('politics');
  const religion = formData.get('religion');
  const maritalStatus = formData.get('maritalStatus');
  const haveKids = formData.get('haveKids');
  const wantKids = formData.get('wantKids');
  const drugs = formData.get('drugs');

  try{
      await sql`
        INSERT INTO Customer (name, email, age, occupation, education, location, height_feet, height_inches, politics, religion, marital_status, have_kids, want_kids, drugs)
        VALUES (${name}, ${email}, ${age}, ${occupation}, ${education}, ${location}, ${feet}, ${inches}, ${politics}, ${religion}, ${maritalStatus}, ${haveKids}, ${wantKids}, ${drugs})
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
