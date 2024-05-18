'use client';

import { fetchCustomer } from '@/app/lib/data';
import { Profile } from '@/app/lib/definitions';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaGraduationCap, FaMoneyBillWave, FaHeart, FaHandHoldingHeart, FaCross } from 'react-icons/fa';

export default function Customer({ customer }: { customer: Profile }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600">Customer Profile</h1>
      {/* About Me */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-blue-800">About Me</h2>
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <p>{customer.about_me}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Personal Information</h2>
          <p className="flex items-center mb-2"><FaUser className="mr-2 text-blue-600" /><strong>First Name:</strong> {customer.first_name}</p>
          <p className="flex items-center mb-2"><FaUser className="mr-2 text-blue-600" /><strong>Last Name:</strong> {customer.last_name}</p>
          <p className="flex items-center mb-2"><FaEnvelope className="mr-2 text-blue-600" /><strong>Email:</strong> {customer.email}</p>
          <p className="flex items-center mb-2"><FaPhone className="mr-2 text-blue-600" /><strong>Phone:</strong> {customer.phone}</p>
          <p className="flex items-center mb-2"><strong>Age:</strong> {customer.age}</p>
          <p className="flex items-center mb-2"><strong>City:</strong> {customer.city}</p>
          <p className="flex items-center mb-2"><strong>State:</strong> {customer.state}</p>
          <p className="flex items-center mb-2"><strong>Height:</strong> {customer.height_feet} feet {customer.height_inches} inches</p>
          <p className="flex items-center mb-2"><strong>Gender:</strong> {customer.gender}</p>
          <p className="flex items-center mb-2"><strong>Dating Interest:</strong> {customer.dating_interest}</p>
          <p className="flex items-center mb-2"><strong>Ethnicity:</strong> {customer.ethnicity}</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Occupation and Education</h2>
          <p className="flex items-center mb-2"><FaBuilding className="mr-2 text-green-600" /><strong>Occupation:</strong> {customer.company_name}, {customer.position}</p>
          <p className="flex items-center mb-2"><FaGraduationCap className="mr-2 text-green-600" /><strong>Education:</strong> {customer.education_level}, {customer.school}</p>
          <p className="flex items-center mb-2"><FaMoneyBillWave className="mr-2 text-green-600" /><strong>Income Level:</strong> {customer.income_level}</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Beliefs</h2>
          <p className="flex items-center mb-2"><FaHeart className="mr-2 text-purple-600" /><strong>Political Affiliation:</strong> {customer.politics}</p>
          <p className="flex items-center mb-2"><FaCross className="mr-2 text-purple-600" /><strong>Religion:</strong> {customer.religion}</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Family</h2>
          <p className="flex items-center mb-2"><FaHandHoldingHeart className="mr-2 text-yellow-600" /><strong>Marital Status:</strong> {customer.marital_status}</p>
          <p className="flex items-center mb-2"><strong>Have Kids:</strong> {customer.have_kids ? 'Yes' : 'No'}</p>
          <p className="flex items-center mb-2"><strong>Want Kids:</strong> {customer.want_kids ? 'Yes' : 'No'}</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-red-800">Other</h2>
          <p className="flex items-center mb-2"><strong>Drugs:</strong> {customer.drugs}</p>
          <p className="flex items-center mb-2"><strong>Alcohol:</strong> {customer.alcohol}</p>
          <p className="flex items-center mb-2"><strong>Smoking:</strong> {customer.smoking}</p>

        </div>
      </div>
    </div>
  );
}
