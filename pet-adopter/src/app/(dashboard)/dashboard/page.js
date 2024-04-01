// 'use client'
import '../../globals.css'
import { auth } from '@/app/api/auth';
import UserData from './../../../Components/UserData/UserData';
import Admin_dashboard from '@/Components/Admin_penel/Admin_dashboard/Admin_dashboard';

const page = async () => {
    const session = await auth();
    const user = session.user;
    const isAdmin = "narayanchandrika18@gmail.com" && user.email === "narayanchandrika18@gmail.com";
    return (
        <div>
            {
                isAdmin?
                <Admin_dashboard/>
                :
                <UserData user={user}/>
            }
        </div>
    );
};

export default page;