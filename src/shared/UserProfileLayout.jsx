import { useSelector } from "react-redux";
import Breadcrumbs from "./Breadcrumbs";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";




const UserProfileLayout = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <>
            <div className='mx-10 flex justify-between font-Poppins'>
                <Breadcrumbs />
                <p>Welcome {user.firstName}!</p>
            </div>
            <div className=" my-5 mx-10 flex justify-between h-full">
                <Sidebar />
                <div className="w-3/4 p-5 ml-auto">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default UserProfileLayout;