'use client';

import { CustomerField } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions';
import { FaUser, FaGlobe, FaDog, FaCat, FaEnvelope, FaSmoking, FaPhone, FaBuilding, FaGraduationCap, FaMoneyBillWave, FaCity, FaMapMarkerAlt, FaBirthdayCake, FaChild, FaHeart, FaCross, FaPills, FaVenusMars } from 'react-icons/fa';
import { BiSolidDrink } from "react-icons/bi";
import { MdPets } from "react-icons/md";


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

    {/* Age and Gender */}
    <div className="mb-6 flex items-center">
      <div className="w-1/2 pr-2">
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

      <div className="w-1/2 pl-2">
        <label htmlFor="gender" className="block text-sm font-medium mb-2 text-gray-600">
          <FaVenusMars className="inline-block mr-2 text-gray-400" />Gender
        </label>
        <select
          id="gender"
          name="gender"
          className="rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          defaultValue=""
        >
          <option value="" disabled>Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>

      {/* Dating Interest */}
      <div className="mb-6">
        <label htmlFor="dating-interest" className="block text-sm font-medium mb-2 text-gray-600">
          <FaHeart className="inline-block mr-2 text-red-400" />Dating Interest in
        </label>
        <select
          id="dating-interest"
          name="dating_interest"
          className="rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          defaultValue=""
        >
          <option value="" disabled>Select Dating Interest</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="other">Other</option>
        </select>
      </div>

    {/* Ethnicity */}
    <div className="mb-6">
      <label htmlFor="ethnicity" className="block text-sm font-medium mb-2 text-gray-600">
        <FaGlobe className="inline-block mr-2 text-gray-400" />Ethnicity
      </label>
      <select
        id="ethnicity"
        name="ethnicity"
        className="rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
        defaultValue=""
      >
        <option value="" disabled>Select Ethnicity</option>
        <option value="asian">Asian</option>
        <option value="black">Black</option>
        <option value="hispanic">Hispanic</option>
        <option value="white">White</option>
        <option value="other">Other</option>
      </select>
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
          <option value="married">Widowed</option>
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

      {/* Habit */}
      <div className="flex flex-col">
        <label htmlFor="habit" className="block text-sm font-medium mb-2 text-gray-600">
            Habit
        </label>

        <div className="grid grid-cols-3 gap-4">
          {/* Drugs */}
          <div className="flex flex-col mb-6">
            <div className="flex items-center">
              <input
                id="drugs"
                name="drugs"
                type="checkbox"
                value="yes"
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-600"><FaPills className="inline-block mr-2 text-blue-500" />Use Drugs</span>
            </div>
          </div>

          {/* Alcohol */}
          <div className="flex flex-col mb-6">
            <div className="flex items-center">
              <input
                id="alcohol"
                name="alcohol"
                type="checkbox"
                value="yes"
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-600"><BiSolidDrink className="inline-block mr-2 text-blue-500" />Alcohol</span>
            </div>
          </div>

          {/* Smoking */}
          <div className="flex flex-col mb-6">
            <div className="flex items-center">
              <input
                id="smoking"
                name="smoking"
                type="checkbox"
                value="yes"
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-600"><FaSmoking className="inline-block mr-2 text-blue-500" />Smoking</span>
            </div>
          </div>
        </div>
      </div>


      {/* Habit */}
      <div className="flex flex-col">
        <label htmlFor="pets" className="block text-sm font-medium mb-2 text-gray-600">
            <MdPets className="inline-block mr-2 text-gray-400" />Pets
        </label>

        <div className="grid grid-cols-3 gap-4">
          {/* Dog */}
          <div className="flex flex-col mb-6">
            <div className="flex items-center">
              <input
                id="dog"
                name="dog"
                type="checkbox"
                value="yes"
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-600"><FaDog className="inline-block mr-2 text-blue-500" />Dog</span>
            </div>
          </div>

          {/* Cat */}
          <div className="flex flex-col mb-6">
            <div className="flex items-center">
              <input
                id="cat"
                name="cat"
                type="checkbox"
                value="yes"
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-600"><FaCat className="inline-block mr-2 text-blue-500" />Cat</span>
            </div>
          </div>

        </div>
      </div>

      {/* About Me */}
      <div className="mb-6">
        <label htmlFor="about-me" className="block text-sm font-medium mb-2 text-gray-600">
          About Me
        </label>
        <textarea
          id="about-me"
          name="about_me"
          className="rounded-md border border-gray-300 py-2 px-4 text-sm w-full outline-none placeholder-gray-500"
          placeholder="Tell us about yourself..."
          rows={4}
        ></textarea>
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
