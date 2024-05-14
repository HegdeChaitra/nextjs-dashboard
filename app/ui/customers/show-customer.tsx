'use client';

import { fetchCustomer } from '@/app/lib/data';
import { Profile } from '@/app/lib/definitions';


export default function Customer({
  customer
}: {
  customer: Profile;
}) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Age:</strong> {customer.age}</p>
          <p><strong>Location:</strong> {customer.location}</p>
          <p><strong>Height:</strong> {customer.height_feet} feet {customer.height_inches} inches</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Occupation and Education</h2>
          <p><strong>Occupation:</strong> {customer.occupation}</p>
          <p><strong>Education:</strong> {customer.education}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Beliefs</h2>
          <p><strong>Political Affiliation:</strong> {customer.politics}</p>
          <p><strong>Religion:</strong> {customer.religion}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Family</h2>
          <p><strong>Marital Status:</strong> {customer.marital_status}</p>
          <p><strong>Have Kids:</strong> {customer.have_kids}</p>
          <p><strong>Want Kids:</strong> {customer.want_kids}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Other</h2>
          <p><strong>Drugs:</strong> {customer.drugs}</p>
        </div>

      </div>
    </div>
  );
}
