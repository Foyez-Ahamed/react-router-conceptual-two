import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-16 py-5 my-5">
            <nav className="flex justify-between">
                {/* logo */} 
                <div>
                    <h1 className="text-2xl font-bold">Phones world</h1>
                </div>
                
                {/* nav */}
                <div>
                <ul className="flex gap-6">
                    <NavLink to='/' className={({isActive, isPending}) => isActive? 'text-purple-700' : isPending? 'pending' : ""}><li>Home</li></NavLink>

                    <NavLink to='/favorite' className={({isActive, isPending}) => isActive? 'text-purple-700' : isPending? 'pending' : ""}><li>Favorites</li></NavLink>

                    <NavLink to='login' className={({isActive, isPending}) => isActive? 'text-purple-700' : isPending? 'pending' : ""}><li>Login</li></NavLink>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;