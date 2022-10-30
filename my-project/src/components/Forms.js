import React from 'react'
// import { Formik, Field, Form } from "formik";


function Forms() {
    return (
        <>
            <h1 className='text-center text-4xl pt-12  '>Tenant Complaint Forms</h1>

            <section className='form-container w-full max-w-[60vw]  mx-auto my-24 '>

                <form>
                    <div class="grid md:grid-cols-2 md:gap-6">

                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 shadow-transparent border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer" placeholder=" " required />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 pl-1 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">First Name</label>
                        </div>
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer" placeholder=" " required />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 pl-1 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Surname</label>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="email" name="floating_email" id="floating_email" className="email peer" placeholder=" " required />
                            <label for="floating_email" className="email-label pl-1  ">Email address</label>
                            <p id="helper-text-explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-light text-blue-800 hover:underline dark:text-blue-800">Privacy Policy</a>.</p>
                        </div>

                        <div class="grid md:grid-cols-2 md:gap-6">

                            <div class="relative z-0 mb-6 w-full group">
                                <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-800 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-800 peer" placeholder=" " required />
                                <label for="floating_last_name" className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 pl-1 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-60 peer-focus:-translate-y-6">Phone number (+123-456-7890)</label>

                            </div>
                        </div>
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="repeat_password" id="floating_repeat_password" className="cfm-password peer" placeholder=" " required />
                            <label for="floating_repeat_password" className="cfm-label">House No/ Street address.</label>
                        </div>


                    </div>
                    <div className='pb-10'>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Issue Category</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-800 dark:focus:border-blue-800">
                            <option>Electricity</option>
                            <option>Drainage System</option>
                            <option>Appliances</option>
                            <option>Weeds / Insects</option>
                        </select>
                    </div>



                    <div class="relative z-0 mb-6 w-full group">
                        <textarea type="text" rows='10' cols='10' name="floating_textarea" id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-800 focus:border-blue-800 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-800 dark:focus:border-blue-800" placeholder="Leave a comment..." required >
                        </textarea>
                        {/* <label for="floating_password" className="pwd-label"></label> */}
                    </div>

                    <div className='pb-10'>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600" for="user_avatar">Upload file</label>
                        <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-sm   cursor-pointer dark:text-gray-600 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Make sure you send the right video or image</div>
                    </div>

                    <button type="submit" className="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg w-full sm:w-auto px-[3rem] py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Send Query</button>
                </form>

            </section>
        </>
    )
}

export default Forms