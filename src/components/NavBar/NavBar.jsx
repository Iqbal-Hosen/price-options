import { useEffect, useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold } from 'react-icons/Ai';
import { BiCommentX } from 'react-icons/bi';



const Navber = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' },
    ];



    return (
        <nav className="text-black p-6 bg-yellow-500">
            <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <BiCommentX></BiCommentX>
                        : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>

                }
            </div>
            <ul className={`md:flex absolute duration-1000 md:static
            ${open ? 'top-16' : '-top-60'}
            px-6  bg-yellow-500`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navber;