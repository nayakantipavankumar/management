import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Home() {
  return (
    <div className="px-15 divide-y divide-white/10">

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base/7 font-semibold text-white">Personal Information</h2>
          <p className="mt-1 text-sm/6 text-gray-400">Use a permanent address where you can receive mail.</p>
        </div>

        <form className="bg-gray-800/50 outline -outline-offset-1 outline-white/10 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">
                  Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    id="mno"
                    name="mno"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="Date-of-Birth" className="block text-sm/6 font-medium text-white">
                  Date of Birth
                </label>
                <div className="mt-2">
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                  Gender
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label htmlFor="caste-with-subcaste" className="block text-sm/6 font-medium text-white">
                  Caste
                </label>
                <div className="mt-2">
                  <input
                    id="caste"
                    name="caste"
                    type="text"
                    autoComplete="caste"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label htmlFor="caste-with-subcaste" className="block text-sm/6 font-medium text-white">
                  Sub Caste
                </label>
                <div className="mt-2">
                  <input
                    id="subcaste"
                    name="subcaste"
                    type="text"
                    autoComplete="subcaste"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 sm:col-start-1">
                <label htmlFor="aadhaar" className="block text-sm/6 font-medium text-white">
                 Aadhaar Card Number
                </label>
                <div className="mt-2">
                  <input
                    id="aadhaar"
                    name="aadhaar"
                    type="text"
                    autoComplete="aadhaar"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label htmlFor="photo" className="block text-sm/6 font-medium text-white">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon aria-hidden="true" className="size-12 text-gray-500" />
                  <button
                    type="button"
                    className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm/6 font-medium text-white">
                  Address
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              
            </div>
          </div>

          {/* <div className="flex items-center justify-end gap-x-6 border-t border-white/10 px-4 py-4 sm:px-8">
            <button type="button" className="text-sm/6 font-semibold text-white">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div> */}
        </form>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base/7 font-semibold text-white">Work Information</h2>
          <p className="mt-1 text-sm/6 text-gray-400">Please Provide Work related information.</p>
        </div>

        <form className="bg-gray-800/50 outline -outline-offset-1 outline-white/10 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="cfmsid" className="block text-sm/6 font-medium text-white">
                  CFMS ID
                </label>
                <div className="mt-2">
                  <input
                    id="cfmsid"
                    name="cfmsid"
                    type="text"
                    autoComplete="cfmsid"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                  HRMS ID
                </label>
                <div className="mt-2">
                  <input
                    id="hrmsid"
                    name="hrmsid"
                    type="text"
                    autoComplete="hrmsid"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                  Name of the College
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option>GJC Adoni</option>
                    <option>GJC Aluru</option>
                    <option>GJC Aspari</option>
                    <option>GJC Chippagiri</option>
                    <option>GJC Devanakonda</option>
                    <option>GJC Gonegandla</option>
                    <option>GJC Gudur</option>
                    <option>GJC Holagunda</option>
                    <option>GJC Kodumur</option>
                    <option>GJC Kosigi</option>
                    <option>GJC Kowthalam</option>
                    <option>GJC Girls Kurnool</option>
                    <option>GJC Town Kurnool</option>
                    <option>GJC B.Camp Kurnool</option>
                    <option>GVJC Kurnool</option>
                    <option>GJC Minorities Kurnool</option>
                    <option>GJC Mantralayam</option>
                    <option>GJC Naguldinne</option>
                    <option>GJC Orvakal</option>
                    <option>GJC Pathikonda</option>
                    <option>GJC Veldurthy</option>
                    <option>GJC Girls Yemmiganur</option>
                    <option>GJC Yemmiganur</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                  Designation
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option>Principal</option>
                    <option>Junior Lecturer</option>
                    <option>Senior Assistant</option>
                    <option>Junior Assistant</option>
                    <option>Junior Assistant cum Typist</option>
                    <option>Typist</option>
                    <option>Record Assistant</option>
                    <option>Office Subordinate</option>
                    <option>Lab Attender</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="presentcadreappointmentdate" className="block text-sm/6 font-medium text-white">
                  Date of Appointment in Present Cadre
                </label>
                <div className="mt-2">
                  <input
                    id="presentcadreappointmentdate"
                    name="presentcadreappointmentdate"
                    type="date"
                    autoComplete="presentcadreappointmentdate"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="presentcadreregularisationdate" className="block text-sm/6 font-medium text-white">
                  Date of Regularisation in Present Cadre
                </label>
                <div className="mt-2">
                  <input
                    id="presentcadreregularisationdate"
                    name="presentcadreregularisationdate"
                    type="date"
                    autoComplete="presentcadreregularisationdate"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="presentcadredeclarationdate" className="block text-sm/6 font-medium text-white">
                  Date of Declaration of Probation in Present Cadre
                </label>
                <div className="mt-2">
                  <input
                    id="presentcadredeclarationdate"
                    name="presentcadredeclarationdate"
                    type="date"
                    autoComplete="presentcadredeclarationdate"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="presentclgdoj" className="block text-sm/6 font-medium text-white">
                  Date of Joining in Present College
                </label>
                <div className="mt-2">
                  <input
                    id="presentclgdoj"
                    name="presentclgdoj"
                    type="date"
                    autoComplete="presentclgdoj"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              
            </div>
          </div>
        </form>
      </div>

      <div className="pb-30 flex items-center justify-center gap-x-6 border-t border-white/10 px-4 py-4 sm:px-8">
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Submit Employee Details
            </button>
       </div>

    </div>
  )
}
