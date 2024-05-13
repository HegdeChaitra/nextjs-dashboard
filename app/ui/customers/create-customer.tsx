'use client';

import { CustomerField } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions';
import { useFormState } from 'react-dom';


export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createCustomer, initialState);

  return (
    <form action={dispatch} className="max-w-[400px] mx-auto">
      {/* Customer Name */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Customer Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter Name"
          className="peer rounded-md border border-gray-200 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          className="peer rounded-md border border-gray-200 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
        />
      </div>

      {/* Age */}
      <div className="mb-6">
        <label htmlFor="age" className="block text-sm font-medium mb-2">
          Age
        </label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder="Age"
          defaultValue="25"
          className="peer rounded-md border border-gray-200 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
        />
      </div>

      {/* Education Occupation */}
      <div className="mb-6">
        <label htmlFor="occupation" className="block text-sm font-medium mb-2">
          Education and Occupation
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            id="occupation"
            name="occupation"
            type="text"
            placeholder="Enter Occupation"
            className="rounded-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
          />
          <input
            id="education"
            name="education"
            type="text"
            placeholder="Enter Education"
            className="rounded-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label htmlFor="location" className="block text-sm font-medium mb-2">
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Enter Location"
          className="peer rounded-md border border-gray-200 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
        />
      </div>

      {/* Height */}
        <div className="mb-6">
          <label htmlFor="height" className="block text-sm font-medium mb-2">
            Height
          </label>
          <div className="flex">
            {/* Feet */}
            <select
              id="feet"
              name="feet"
              className="rounded-l-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
              defaultValue="5"
            >
              <option value="" disabled>Feet</option>
              {/* Add options for feet */}
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              {/* Add more options as needed */}
            </select>
            {/* Inches */}
            <select
              id="inches"
              name="inches"
              className="rounded-r-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
              defaultValue="5"
            >
              <option value="" disabled>Inches</option>
              {/* Add options for inches */}
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

      {/* Beliefs */}
      <div className="mb-6">
        <label htmlFor="politics" className="block text-sm font-medium mb-2">
          Beliefs
        </label>
        <div className="grid grid-cols-2 gap-4">
          <select
            id="politics"
            name="politics"
            className="rounded-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue=""
          >
            <option value="" disabled>Select Political affiliation</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="moderate">Moderate</option>
          </select>
          <select
            id="religion"
            name="religion"
            className="rounded-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue=""
          >
            <option value="" disabled>Select Religion</option>
            <option value="agnostic">Agnostic</option>
            <option value="spiritual">Spiritual</option>
          </select>
        </div>
      </div>

      {/* Marital status */}
      <div className="mb-6">
        <label htmlFor="marital" className="block text-sm font-medium mb-2">
          Marital Status
        </label>
        <select
          id="marital"
          name="maritalStatus"
          className="rounded-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
          defaultValue=""
        >
          <option value="" disabled>Select Marital status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
      </div>

      {/* Kids */}
      <div className="mb-6">
        <label htmlFor="kids" className="block text-sm font-medium mb-2">
          Kids
        </label>
        <div className="grid grid-cols-2 gap-4">
          <select
            id="kids"
            name="haveKids"
            className="rounded-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
            defaultValue=""
          >
            <option value="" disabled>Has Kids</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select
            id="wantkids"
            name="wantKids"
            className="rounded-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
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
        <label htmlFor="drugs" className="block text-sm font-medium mb-2">
          Drugs
        </label>
        <select
          id="drugs"
          name="drugs"
          className="rounded-md border border-gray-200 py-2 px-4 text-sm outline-none placeholder-gray-500"
          defaultValue=""
        >
          {/* Options */}
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Submit Button */}
      <Button type="submit">Save Profile</Button>
    </form>
  );
}
