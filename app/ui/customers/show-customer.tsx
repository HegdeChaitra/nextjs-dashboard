'use client';

import { fetchCustomer } from '@/app/lib/data';
import { Profile } from '@/app/lib/definitions';

export default function Customer({ customer }: { customer: Profile }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Customer Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <p><strong>First Name:</strong> {customer.first_name}</p>
          <p><strong>Last Name:</strong> {customer.last_name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Age:</strong> {customer.age}</p>
          <p><strong>City:</strong> {customer.city}</p>
          <p><strong>State:</strong> {customer.state}</p>
          <p><strong>Height:</strong> {customer.height_feet} feet {customer.height_inches} inches</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Occupation and Education</h2>
          <p><strong>Occupation:</strong> {customer.company_name}, {customer.position}</p>
          <p><strong>Education:</strong> {customer.education_level}, {customer.school}</p>
          <p><strong>Income Level:</strong> {customer.income_level}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Beliefs</h2>
          <p><strong>Political Affiliation:</strong> {customer.politics}</p>
          <p><strong>Religion:</strong> {customer.religion}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Family</h2>
          <p><strong>Marital Status:</strong> {customer.marital_status}</p>
          <p><strong>Have Kids:</strong> {customer.have_kids ? 'Yes' : 'No'}</p>
          <p><strong>Want Kids:</strong> {customer.want_kids ? 'Yes' : 'No'}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Other</h2>
          <p><strong>Drugs:</strong> {customer.drugs}</p>
        </div>
      </div>
    </div>
  );
}
