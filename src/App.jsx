import './App.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import { useForm } from 'react-hook-form';


function App() {

  const {
    watch, register, formState: { errors, isValid },
  } = useForm({ mode: "all" })

  const [formStep, setFormStep] = useState(0)
  const completeFormStep = () => {
    setFormStep(cur => { if (cur < 3) { return cur + 1 } else { return cur } })
  }

  const goToPreviousStep = () => {
    setFormStep(cur => cur - 1)
  }

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [budgetThreshold, setBudgetThreshold] = useState('');


  return (
    <div className='w-screen min-h-screen bg-white flex justify-center items-center'>
      <div className='w-[37.66%] rounded-xl bg-white' style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset' }}>
        {/* Heading */}
        <h1 className='mt-[5%] text-center pt-4 text-2xl font-semibold'>Create a project</h1>
        <p className='text-gray-500 text-center'>Don't panic -- You can also customize this types in settings</p>


        <form className=" mx-auto p-8">


          {/* STEP 1 STARTS HERE */}
          {formStep == 0 && <section>
            <div className="mb-5">
              <label htmlFor="projectName" className="block mb-2 text-lg font-medium text-gray-900">Project name</label>
              <input type="text" {...register("projectName", { required: true })} id="projectName" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter project name here" required />
              {errors.projectName && <span className='text-red-500'> This field is required </span>}
            </div>

            <label htmlFor="countries" className="block mb-2 text-lg font-medium text-gray-900 ">Client</label>
            <div className='flex justify-end'>
              <div className='w-full'>
                <select id="clients" {...register("clients")} className="w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                  <option className='text-gray-400' selected>Select a client</option>
                  <option value="c1">Client 1</option>
                  <option value="c2">Client 2</option>
                  <option value="c3">Client 3</option>
                  <option value="c4">Client 4</option>
                </select>
              </div>
              <div className='my-auto px-1 text-gray-400'>
                Or
              </div>
              <div className='w-6/12'>
                <input {...register("newClient")} type="text" id="newClient" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 " placeholder=" + New Client" />
              </div>
            </div>

            {/* Date Picker*/}
            <label htmlFor="countries" className="block mb-2 text-lg font-medium text-gray- pt-4 ">Dates</label>
            <div className="flex justify-between">
              <div className="relative ">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Select date start"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 pl-12"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <span className="mx-4 text-gray-500"> - </span>
              <div className="relative">
                <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Select date end"
                  minDate={startDate}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 pl-12"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
            </div>

            {/* Text area */}
            <label htmlFor="notes" className="block mb-2 text-lg font-medium text-gray- pt-4 ">Notes</label>
            <textarea id="notes" {...register("notes")} rows="4" className="block mb-[10%] p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Optional"></textarea>
          </section>}
          {/* STEP 1 ENDS HERE */}



          {/* STEP 2 STARTS HERE */}

          {formStep == 1 && <section>
            {/*<!--  button group --> */}
            <div {...register("btnGroup")} id='btnGroup' className="flex flex-grow rounded-md shadow-sm mb-8" role="group">
              <button type="button" className="flex-grow px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded-l-lg hover:bg-gray-200 hover:text-gray-600 focus:z-10  focus:bg-blue-500 focus:text-white">
                Time & Materials
              </button>
              <button type="button" className="flex-grow px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 border-t border-b border-gray-200 hover:bg-gray-200 hover:text-gray-600 focus:z-10  focus:bg-blue-500 focus:text-white">
                Fixed Fee
              </button>
              <button type="button" className="flex-grow px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded-r-lg hover:bg-gray-200 hover:text-gray-600 focus:z-10  focus:bg-blue-500 focus:text-white">
                Non-Billable
              </button>
            </div>
            {/*<!-- End button group --> */}

            {/* Hourly */}
            <label htmlFor="countries" className="block text-lg font-medium text-gray-900 ">Hourly</label>
            <p className='text-gray-500 '>We need hourly rates to track your project's billable amount</p>
            <div className='flex justify-start my-6'>
              <div className='w-1/2 mr-2'>
                <select id="countries" {...register("hourlyRate")} id='hourlyRate' className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                  <option className='text-gray-400' selected>Project Hourly Rate</option>
                  <option value="c1"> 1</option>
                  <option value="c2"> 2</option>
                  <option value="c3"> 3</option>
                  <option value="c4"> 4</option>
                </select>
              </div>

              <div className='w-1/4'>
                <input {...register("hourlyRatePrice")} id='hourlyRatePrice' type="text" id="projectName" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 " placeholder=" ₹" />
              </div>
            </div>

            {/* Budget */}
            <label htmlFor="countries" className="block text-lg font-medium text-gray-900 ">Budget</label>
            <p className='text-gray-500 '>We need hourly rates to track your project's billable amount</p>
            <div className='flex justify-start my-6'>
              <div className='w-1/2 mr-2'>
                <select {...register("budget")} id='budget' id="countries" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                  <option className='text-gray-400' selected>Hours Per Person</option>
                  <option value="c1"> 1</option>
                  <option value="c2"> 2</option>
                  <option value="c3"> 3</option>
                  <option value="c4"> 4</option>
                </select>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="relative flex flex-wrap items-center mb-2">
              <input
                {...register("budgetReset")}
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-blue-500 checked:bg-blue-500 checked:hover:border-blue-600 checked:hover:bg-blue-600 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                id="budgetReset"
              />
              <label
                className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="budgetReset"
              >
                Budget resets every month
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-1 h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  Check mark icon to indicate whether the radio input is checked or
                  not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center mb-10">
              <input
                {...register("sentEmail")}
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-blue-500 checked:bg-blue-500 checked:hover:border-blue-600 checked:hover:bg-blue-600 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
                id="sentEmail"
              />
              <label
                className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="sentEmail"
              >
                Send email alerts if project exceeds
              </label>
              <input
                {...register("budgetPercentage")} id='budgetPercentage'
                type="text"
                className="peer w-16 mx-1 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-1"
                placeholder="Budget%"
                value={budgetThreshold}
                onChange={(e) => setBudgetThreshold(e.target.value)}
                disabled={!checked2}
              />
              <label
                className="cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c01"
              >
                % of budget
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-1 h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  Check mark icon to indicate whether the radio input is checked or
                  not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>
          </section>}
          {/* STEP 2 ENDS HERE */}




          {/* STEP 3 STARTS HERE */}

          {formStep == 2 && <section>
            <div className='flex justify-around mb-44'>
              <div>
                <div className='border-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  hover:border-blue-500 cursor-pointer'>
                  <img src="../public/list.png" alt="list" />
                </div>
                <div className='text-center m-1'>List</div>
              </div>

              <div>
                <div className='border-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  hover:border-blue-500 cursor-pointer'>
                  <img src="../public/board.png" alt="board" />
                </div>
                <div className='text-center m-1'>Board</div>
              </div>
            </div>
          </section>}

          {/* STEP 3 ENDS HERE */}


          {/* STEP 4 STARTS HERE */}

          {formStep == 3 && <section>
            <div className='flex-row justify-around mb-16'>

              <div className='mb-2 border-gray-300 text-sm rounded-lg '>
                <img className='border-2 rounded-lg focus:ring-blue-500 focus:border-blue-500  hover:border-blue-500 cursor-pointer' src="../public/manageEveryone.png" alt="Everyone" />
              </div>

              <div className='mb-2 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  hover:border-blue-500 cursor-pointer'>
                <img className='border-2 rounded-lg focus:ring-blue-500 focus:border-blue-500  hover:border-blue-500 cursor-pointer' src="../public/manageAdmin.png" alt="Admin" />
              </div>

              <div className='mb-2 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  hover:border-blue-500 cursor-pointer'>
                <img className='border-2 rounded-lg focus:ring-blue-500 focus:border-blue-500  hover:border-blue-500 cursor-pointer' src="../public/manageSpecific.png" alt="Specific" />
              </div>

            </div>
          </section>}
          {/* STEP 4 ENDS HERE */}



          {/* Buttons */}
          <div>

            <button disabled={formStep == 0} onClick={goToPreviousStep} type="button" className="text-gray-400 bg-white hover:text-gray-600 focus:outline-none  font-normal rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 disabled:cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
              Back
            </button>

            <button type="button" disabled={!isValid} onClick={completeFormStep} className="ml-[24%] text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-75 disabled:bg-gray-400 disabled:cursor-not-allowed">{formStep == 3 ? "Create Account" : "Next"}</button>
          </div>

          {/* Stepper */}
          <div className="flex justify-center items-center mt-4">
            <div className="flex items-center">
              {[...Array(formStep)].map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-200 rounded-full ml-3"></div>
              ))}
              <div className="w-4 h-2 bg-gray-500 rounded-full ml-3"></div>
              {[...Array(3 - formStep)].map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-200 rounded-full ml-3"></div>
              ))}
            </div>
          </div>

          {/* Storing all the input data to local storage */}
          {localStorage.setItem('yourDataKey', JSON.stringify(watch(), null, 2))}

        </form>
      </div>
    </div>

  )
}

export default App;
