import {useState} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import Password from './Password';
import EditProfile from './EditProfile';
const authToken = localStorage.getItem('token')
// const config = {'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmQ3YTQyODJiYmE2MzJjZDVjZjBlMCIsInRva2VuVmVyc2lvbiI6MCwiaWF0IjoxNzAxNjczNTcyfQ.ddG0VTMD-ZE0dJxGQL5SbHtAQyqO2MlZ_U121M5B8gY"};
console.log(authToken)

const Profile = () => {
    const [isChangePassword, setIsChangePassword] = useState(false)
    const [config, setConfig] = useState({'Authorization': authToken});

    return (
        <div className='justify-center items-center flex flex-col'>
            <Header></Header>
            <div className="grid grid-cols-8 gap-3 max-w-[1536px] mx-auto" id="main-components">
                <Sidebar item={2}></Sidebar>
                {isChangePassword
                ?
                    <Password action={() => setIsChangePassword(!isChangePassword)} config={config} changeConfig={(newConfig) => setConfig(newConfig)}></Password>
                :
                    <EditProfile action={() => setIsChangePassword(!isChangePassword)} config={config} ></EditProfile>
                }
            </div>
            <Footer></Footer>
        </div>
  );
};
export default Profile;
