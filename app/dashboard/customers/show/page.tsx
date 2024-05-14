import Customer from '@/app/ui/customers/show-customer';
import { fetchCustomer } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomer();

  return (
    <main>
      <Customer customer={customers}/>
    </main>
  );
}
