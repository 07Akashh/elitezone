import { useSelector } from "react-redux";
import Breadcrumbs from "./Breadcrumbs";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const UserProfileLayout = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <>
            <div className="mx-4 md:mx-10 flex flex-col md:flex-row sm:justify-between sm:items-center font-Poppins">
                <Breadcrumbs />
                <p className="mt-2 md:mt-0 text-center sm:text-justify">Welcome {user.firstName}!</p>
            </div>
            <div className="my-5 mx-4 md:mx-10 flex flex-col md:flex-row justify-between h-full">
                <Sidebar className="md:w-1/4 lg:w-1/5" />
                <div className="w-full md:w-3/4 lg:w-4/5 p-5">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default UserProfileLayout;
