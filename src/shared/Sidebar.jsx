import { NavLink, useMatch, useResolvedPath } from "react-router-dom";



const Sidebar = () => {
    const { pathname } = useResolvedPath('');
    const matchProfile = useMatch(`${pathname}/profile`);
    const matchOrders = useMatch(`${pathname}/orders`);
    const matchAddressBook = useMatch(`${pathname}/address-book`);
    const matchWishlist = useMatch(`${pathname}/wishlist`);

    return (
        <nav className=" mx-auto p-5 font-TenorSans text-[#78756e]">
            <ul>
                <li className="mb-2">
                    <NavLink to="profile" className={matchProfile ? 'text-[#754f23]' : ''}>My Profile</NavLink>
                </li>
                <li className="mb-2">
                    <NavLink to="orders" className={matchOrders ? 'text-[#754f23]' : ''}>My Orders</NavLink>
                </li>
                <li className="mb-2">
                    <NavLink to="address-book" className={matchAddressBook ? 'text-[#754f23]' : ''}>Address Book</NavLink>
                </li>
                <li className="mb-2">
                    <NavLink to="wishlist" className={matchWishlist ? 'text-[#754f23]' : ''}>My Wishlist</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;