'use client';

import { CustomerField } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaGraduationCap, FaMoneyBillWave, FaCity, FaMapMarkerAlt, FaBirthdayCake, FaChild, FaHeart, FaCross, FaPills, FaVenusMars } from 'react-icons/fa';

export default function Form() {
  return (
    <form action={createCustomer} className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-700">Create Customer Profile</h1>

      {/* Customer Name */}
      <div className="mb-6">
        <label htmlFor="customer-name" className="block text-sm font-medium mb-2 text-gray-600">
          <FaUser className="inline-block mr-2 text-gray-400" />Customer Name
        </label>
        <div className="flex space-x-4">
          <input
            id="first-name"
            name="first_name"
            type="text"
            placeholder="First Name"
            className="peer rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          />
          <input
            id="last-name"
            name="last_name"
            type="text"
            placeholder="Last Name"
            className="peer rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-6">
        <label htmlFor="contact-information" className="block text-sm font-medium mb-2 text-gray-600">
          <FaEnvelope className="inline-block mr-2 text-gray-400" />Contact Information
        </label>
        <div className="flex space-x-4">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="peer rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          />
          <input
            id="phone-number"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="peer rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Age */}
      <div className="mb-6">
        <label htmlFor="age" className="block text-sm font-medium mb-2 text-gray-600">
          <FaBirthdayCake className="inline-block mr-2 text-gray-400" />Age
        </label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder="Age"
          defaultValue="25"
          className="peer rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
        />
      </div>

      {/* Education and Occupation */}
      <div className="mb-6">
        <label htmlFor="education-occupation" className="block text-sm font-medium mb-2 text-gray-600">
          <FaGraduationCap className="inline-block mr-2 text-gray-400" />Education and Occupation
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            id="education-level"
            name="education_level"
            type="text"
            placeholder="Education Level"
            className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
          />
          <input
            id="school"
            name="school"
            type="text"
            placeholder="School"
            className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            id="company-name"
            name="company_name"
            type="text"
            placeholder="Company Name"
            className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
          />
          <input
            id="position"
            name="position"
            type="text"
            placeholder="Position"
            className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Income Level */}
      <div className="mb-6">
        <label htmlFor="income-level" className="block text-sm font-medium mb-2 text-gray-600">
          <FaMoneyBillWave className="inline-block mr-2 text-gray-400" />Income Level
        </label>
        <div className="space-y-2">
          <div>
            <input
              id="income-1"
              name="income_level"
              type="radio"
              value="Below $25,000"
              className="mr-2"
            />
            <label htmlFor="income-1" className="text-sm font-medium text-gray-600">Below $25,000</label>
          </div>
          <div>
            <input
              id="income-2"
              name="income_level"
              type="radio"
              value="$25,000 - $50,000"
              className="mr-2"
            />
            <label htmlFor="income-2" className="text-sm font-medium text-gray-600">$25,000 - $50,000</label>
          </div>
          <div>
            <input
              id="income-3"
              name="income_level"
              type="radio"
              value="$50,000 - $100,000"
              className="mr-2"
            />
            <label htmlFor="income-3" className="text-sm font-medium text-gray-600">$50,000 - $100,000</label>
          </div>
          <div>
            <input
              id="income-4"
              name="income_level"
              type="radio"
              value="$100,000 - $200,000"
              className="mr-2"
            />
            <label htmlFor="income-4" className="text-sm font-medium text-gray-600">$100,000 - $200,000</label>
          </div>
          <div>
            <input
              id="income-5"
              name="income_level"
              type="radio"
              value="Above $200,000"
              className="mr-2"
            />
            <label htmlFor="income-5" className="text-sm font-medium text-gray-600">Above $200,000</label>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label htmlFor="location" className="block text-sm font-medium mb-2 text-gray-600">
          <FaMapMarkerAlt className="inline-block mr-2 text-gray-400" />Location
        </label>
        <div className="flex space-x-4">
          <input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            className="peer rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          />
          <input
            id="state"
            name="state"
            type="text"
            placeholder="State"
            className="peer rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Height */}
      <div className="mb-6">
        <label htmlFor="height" className="block text-sm font-medium mb-2 text-gray-600">
          <FaVenusMars className="inline-block mr-2 text-gray-400" />Height
        </label>
        <div className="flex">
          <select
            id="feet"
            name="feet"
            className="rounded-l-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue="5"
          >
            <option value="" disabled>Feet</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <select
            id="inches"
            name="inches"
            className="rounded-r-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue="5"
          >
            <option value="" disabled>Inches</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>

      {/* Beliefs */}
      <div className="mb-6">
        <label htmlFor="politics" className="block text-sm font-medium mb-2 text-gray-600">
          <FaHeart className="inline-block mr-2 text-gray-400" />Beliefs
        </label>
        <div className="grid grid-cols-2 gap-4">
          <select
            id="politics"
            name="politics"
            className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue=""
          >
            <option value="" disabled>Political affiliation</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="moderate">Moderate</option>
          </select>
          <select
            id="religion"
            name="religion"
            className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue=""
          >
            <option value="" disabled>Religion</option>
            <option value="agnostic">Agnostic</option>
            <option value="spiritual">Spiritual</option>
          </select>
        </div>
      </div>

      {/* Marital Status */}
      <div className="mb-6">
        <label htmlFor="marital" className="block text-sm font-medium mb-2 text-gray-600">
          <FaVenusMars className="inline-block mr-2 text-gray-400" />Marital Status
        </label>
        <select
          id="marital"
          name="maritalStatus"
          className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
          defaultValue=""
        >
          <option value="" disabled>Marital status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
      </div>

      {/* Kids */}
      <div className="mb-6">
        <label htmlFor="kids" className="block text-sm font-medium mb-2 text-gray-600">
          <FaChild className="inline-block mr-2 text-gray-400" />Kids
        </label>
        <div className="grid grid-cols-2 gap-4">
          <select
            id="kids"
            name="haveKids"
            className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue=""
          >
            <option value="" disabled>Has Kids</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select
            id="wantkids"
            name="wantKids"
            className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue=""
          >
            <option value="" disabled>Want Kids</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* Drugs */}
      <div className="mb-6">
        <label htmlFor="drugs" className="block text-sm font-medium mb-2 text-gray-600">
          <FaPills className="inline-block mr-2 text-gray-400" />Drugs
        </label>
        <select
          id="drugs"
          name="drugs"
          className="rounded-md border border-gray-300 py-2 px-4 text-sm outline-none placeholder-gray-500"
          defaultValue=""
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Save Profile
        </Button>
      </div>
    </form>
  );
}
