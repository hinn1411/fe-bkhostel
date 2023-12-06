import { useState } from 'react';
import Header from "./components/header";
import LeftSideBar from "./components/leftSideBar";
import axios from 'axios';

const url = `https://bkhostel.hcmut.tech/admin/add-user`;
const tokenUrl = `https://bkhostel.hcmut.tech/auth/sign-in`;

const AddUser = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: '',
        full_name: '',
        phone: ''
    });
    const addNewUser = () => {        
        const axiosInstance = axios.create({
            baseURL: tokenUrl,
        });
        const bodyValue = {
            "username": "HoaiTrang_Nguyen53",
            "password": "123456"
        };
        let token; // initial state
        axiosInstance.interceptors.request.use(async config => {
            if (!token) {
                const { data } = await axios.post(tokenUrl, bodyValue);
                token = data.token;
            }
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        });
        const addUser = async () => {
            try {
                const res = await axiosInstance.post(url, userInfo);
            } catch (error) {
                console.log(error.response);
            }
        };
        addUser();
    }
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setUserInfo(prev => ({
            ...prev,
            [name]: value
        }));
    }
    return (
        <div className="grid grid-cols-10 gap-3">
            <LeftSideBar />
            <div className="h-screen col-start-3 col-span-8 pl-3 text-lg bg-[#b6d6f2]">
                <Header />
                <div className="my-8 ml-14 mt-8 hover:cursor-pointer text-3xl font-semibold text-black">
                    Add New User
                </div>
                <div className="mx-14 bg-white text-[#797C7B] p-6 rounded-2xl">
                    <form>
                        <div class="grid gap-6 mb-10 md:grid-cols-2">
                            <div>
                                <input onChange={handleChange} value={userInfo.username} name='username' type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName *" required />
                            </div>
                            <div>
                                <input onChange={handleChange} value={userInfo.full_name} name='full_name' type="text" id="fullname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name *" required />
                            </div>
                            <div>
                                <input onChange={handleChange} value={userInfo.email} name = 'email' type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email *" required />
                            </div>
                            <div>
                                <input onChange={handleChange} value={userInfo.phone} name = 'phone' type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number *"  required />
                            </div>
                            <div>
                                <input onChange={handleChange} value={userInfo.password} name = 'password' type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password *" required />
                            </div>
                        </div>
                        <button type="button" onClick={addNewUser} class="w-full text-white bg-[#25BEB9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUser;
