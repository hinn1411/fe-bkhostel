import 'flowbite';
import LeftSideBar from './components/leftSideBar';
import Header from "./components/header";
import { useState } from 'react';
import axios from 'axios';

const url = `https://bkhostel.hcmut.tech/admin/change-password`;
const tokenUrl = `https://bkhostel.hcmut.tech/auth/sign-in`;

const ChangePassWord = () => {
    const [userInfo, setUserInfo] = useState({
        id: '656ed077456cd9380f56795c',
        newPassword: '',
        confirmPassword: '',
    })
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
    const handleSubmit = async (e) => {   
        e.preventDefault();
        try {
            const res = await axiosInstance.post(url, userInfo)
                        .then(res=>console.log(res.data.message));
        } catch (error) {
            console.log(error.response);
        }
    };
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setUserInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <div className="grid grid-cols-10 gap-3">
            <LeftSideBar />
            <div className="h-screen col-start-3 col-span-8 pl-3 text-lg bg-[#b6d6f2]">
                <Header />
                <div className="my-8 ml-14 mt-8 hover:cursor-pointer text-2xl font-semibold text-black">
                    UsersList/{bodyValue.username}/Change Password
                </div>
                <div className="mx-14 bg-white text-[#797C7B] p-6 h-2/3 rounded-2xl">
                    <form className="w-1/2 mx-auto mt-16 mb-16">
                        <div class="grid gap-6 mb-10 md:grid-cols-1">
                            <div>
                                <input value={userInfo.id} type="text" id="Id" class="bg-gray-50 border border-[#B6D6F2] text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Id" disabled />
                            </div>
                            <div>
                                <input onChange={handleChange} name='newPassword' type="password" id="new_pass" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
                            </div>
                            <div>
                                <input onChange={handleChange} name='confirmPassword' type="password" id="confirm-pass" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required />
                            </div>
                        </div>
                        <button onClick={handleSubmit} class="w-full text-white bg-[#25BEB9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ChangePassWord;
