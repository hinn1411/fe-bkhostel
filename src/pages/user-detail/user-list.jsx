import { FaCamera } from "react-icons/fa";
import 'flowbite';
import LeftSideBar from "./components/left-side-bar";
import Header from "./components/header";
const UserList = () => {
    return (
        <div className="grid grid-cols-10 gap-3">
            <LeftSideBar />
            <div className="h-screen col-start-3 col-span-8 pl-3 text-lg bg-[#b6d6f2]">
                <Header />
                <div className="my-8 ml-14 mt-8 hover:cursor-pointer text-2xl font-semibold text-black">
                    UserList/Duc Phan
                </div>
                <div className="grid grid-cols-3 mx-14 bg-white text-[#797C7B] p-6 rounded-2xl">
                    <div className="flex flex-col">
                        <div className="ml-10">
                            <div className="mx-auto rounded-full bg-[#A6D4AE] xl:w-64 xl:h-64 lg:w-52 lg:h-52 md:w-36 md:h-36 sm:w-24 sm:h-24 absolute z-0 ">
                            </div>
                            <div className="relative xl:ml-48 xl:mt-52 lg:ml-36 lg:mt-44 md:ml-24 md:mt-28 sm:ml-14 sm:mt-20 z-10 p-1.5 w-fit border bg-[#D9D9D9] rounded-full">
                                <FaCamera style={{ color: '#f5a201' }} />
                            </div>
                        </div>
                        <div className="relative mx-auto">
                            <button type="submit" class="mt-14 w-full text-white bg-[#00537A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order History</button>
                            <button type="submit" class="mt-2 w-full text-white bg-[#00537A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
                        </div>
                    </div>
                    <form className="col-start-2 col-span-3">
                        <div class="grid gap-6 mb-10 lg:grid-cols-2">
                            <div>
                                <input type="text" id="first_name" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name *" required />
                            </div>
                            <div>
                                <input type="text" id="last_name" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name *" required />
                            </div>
                            <div>
                                <input type="email" id="company" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address *" required />
                            </div>
                            <div>
                                <input type="tel" id="phone" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number *" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-80 border border-[#B6D6F2] bg-gray-50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select Roles<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            <div id="dropdown" class="hidden bg-gray-200 rounded-lg shadow w-64 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">Admin</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">User</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <input type="text" id="visitors" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City/District/Town" required />
                            </div>
                            <div>
                                <input type="text" id="visitors" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ward / village" required />
                            </div>
                            <div>
                                <input type="text" id="visitors" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street" required />
                            </div>
                            <div className="col-span-2">
                                <input type="password" id="confirm_password" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street" required />
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-[#25BEB9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default UserList;
