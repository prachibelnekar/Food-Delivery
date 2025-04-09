import React, { useContext, useState, useEffect, useRef } from 'react';
import { assets } from '../assets/frontend_assets/assets.js';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Storecontext } from '../content/StoreContext.jsx';
import '../index.css';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getTotalCartAmount, token, setToken } = useContext(Storecontext);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    // Logout Function
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* navbar */}
            <div className="navbar py-5 px-0 flex justify-between items-center flex-wrap">

                {/* Logo */}
                <NavLink to='/'>
                    <img src={assets.logo} alt='logo' className='logo w-[150px] sm:w-[120px]' />
                </NavLink>

                {/* Hamburger Icon for Small Screens */}
                <div
                    className='md:hidden cursor-pointer text-2xl'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </div>

                {/* Navbar Menu */}
                <ul className={`list-none gap-5 text-[#49557e] text-[18px] cursor-pointer 
                                md:flex 
                                ${isMenuOpen ? 'flex flex-col absolute top-[70px] left-0 w-full bg-white py-5 px-8 shadow-lg' : 'hidden'}`}>
                    <NavLink to='/' onClick={() => setMenu("home")}
                        className={`${menu === "home" ? 'pb-[2px] border-b-2 border-solid border-[#49557e]' : ""}`}>
                        Home
                    </NavLink>
                    <NavLink to='/exploremenu' onClick={() => setMenu("menu")}
                        className={`${menu === "menu" ? 'pb-[2px] border-b-2 border-solid border-[#49557e]' : ""}`}>
                        Menu
                    </NavLink>
                    <NavLink to='/appdownload' onClick={() => setMenu("mobile_app")}
                        className={`${menu === "mobile_app" ? 'pb-[2px] border-b-2 border-solid border-[#49557e]' : ""}`}>
                        Mobile App
                    </NavLink>
                    <NavLink to='/footer' onClick={() => setMenu("contact_us")}
                        className={`${menu === "contact_us" ? 'pb-[2px] border-b-2 border-solid border-[#49557e]' : ""}`}>
                        Contact Us
                    </NavLink>
                </ul>

                {/* Navbar Right Section */}
                <div className="navbar-right flex items-center gap-[40px] sm:gap-[20px]">
                    <img src={assets.search_icon} alt='search-icon' className='search' />

                    <div className='relative'>
                        <NavLink to='/cart'>
                            <img src={assets.basket_icon} alt='basket_icon' className='basket_icon' />
                        </NavLink>
                        <div className={`${getTotalCartAmount() === 0 ? "" : 'absolute min-w-[10px] min-h-[10px] bg-orange-500 rounded-[5px] top-[-8px] right-[-8px]'}`} ></div>
                    </div>

                    {!token ? (
                        <button onClick={() => setShowLogin(true)} className='bg-transparent text-[16px] text-[#49557e] border border-solid border-orange-500 duration-300 ease-in py-[10px] px-[30px] rounded-full cursor-pointer hover:bg-[#fff4f2] sm:px-[20px] sm:pl-[21px] sm:text-[14px] sm:pr-0'>
                            Sign In
                        </button>
                    ) : (
                        <div 
                            className="relative" 
                            ref={dropdownRef}
                        >
                            {/* Profile Icon */}
                            <img 
                                src={assets.profile_icon} 
                                alt="Profile" 
                                className="cursor-pointer w-10"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onMouseEnter={() => setIsDropdownOpen(true)}
                            />

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <ul 
                                    className="absolute right-0 mt-2 w-[140px] flex flex-col gap-3 bg-[#fff2ef] py-3 px-6 rounded border border-orange-500 shadow-md z-50 transition-opacity duration-200"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(true)} // Prevents closing when moving the mouse inside
                                >
                                    <li 
                                        className="flex items-center gap-[10px] cursor-pointer hover:text-orange-500" 
                                        onClick={() => navigate('/myorders')}
                                    >
                                        <img src={assets.bag_icon} alt="Orders" className="w-5" />
                                        <p>Orders</p>
                                    </li>
                                    <hr />
                                    <li 
                                        onClick={logout} 
                                        className="flex items-center gap-[10px] cursor-pointer hover:text-orange-500"
                                    >
                                        <img src={assets.logout_icon} alt="Logout" className="w-5" />
                                        <p>Logout</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
