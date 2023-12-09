import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from '../../components/sidebar/Sidebar';

const baseURL = import.meta.env.VITE_BACKEND_API + '/posts/user';
const authToken = localStorage.getItem('token')
const config = {'Authorization': authToken};

const PostHistory = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        console.log("get Posts")
        try {
            await axios.get(`${baseURL}`, {headers: config}).then(res => setPosts(res.data));
        } catch (error) {
            const customError = new Error();
            customError.message = error.response.data.message;
            console.log(customError.message);
            throw customError;
        }

    };

    useEffect(() => {
        getPosts();

    },[])

    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-8 gap-3  max-w-[1536px] mx-auto">
                <Sidebar item={1}></Sidebar>
                <div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6 ml-5 mb-10">
                    <div className="px-3 py-4 mt-6 border-b border-gray rounded-md h-fit text-5xl">
                        Lịch sử tin đăng
                    </div>
                    <table className="mt-4 text-center mr-10 table-auto border-collapse border border-slate-300">
                        <thead className="grid grid-cols-16 font-bold rounded-[4px]">
                            <th className=" border border-slate-300 col-span-2 p-1">Tiêu đề</th>
                            <th className=" border border-slate-300 col-span-3 p-1">Ảnh đại diện</th>
                            <th className=" border border-slate-300 col-span-2 p-1">Diện tích</th>
                            <th className=" border border-slate-300 col-span-2 p-1">Giá</th>
                            <th className=" border border-slate-300 col-span-3 p-1">Địa chỉ</th>
                            <th className=" border border-slate-300 col-span-2 p-1">Ngày bắt đầu</th>
                            <th className=" border border-slate-300 col-span-2 p-1">Trạng thái</th>
                        </thead>
                        <tbody>
                        {
                            posts.totalPosts ? posts.result.map((post, idx) => {
                                return (
                                    <tr className="grid grid-cols-16 font-bold rounded-[4px]" key={idx}>
                                        <td className=" border border-slate-300 col-span-2 p-1">{post.title}</td>
                                        <td className=" border border-slate-300 col-span-3 p-1"><img src={post.assets[0]} alt="anh dai dien" className="w-24 m-auto"/></td>
                                        <td className=" border border-slate-300 col-span-2 p-1">{post.area}</td>
                                        <td className=" border border-slate-300 col-span-2 p-1">{post.price}</td>
                                        <td className=" border border-slate-300 col-span-3 p-1">{post.full_address.district + ", " + post.full_address.city}</td>
                                        <td className=" border border-slate-300 col-span-2 p-1">{post.createDateAgo}</td>
                                        <td className=" border border-slate-300 col-span-2 p-1">{post.status}</td>
                                    </tr>
                                )
                            })
                            : <div className="py-2">Bạn chưa có tin đăng nào. Bấm <a className="text-[#0000ff]" href="../post-new">vào đây</a> để bắt đầu đăng tin</div>
                        }
                        </tbody>


                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
}
export default PostHistory;