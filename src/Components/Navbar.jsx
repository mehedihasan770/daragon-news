import { Link, NavLink } from 'react-router';
import user2 from '../assets/user.png'
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user , signOut1} = use(AuthContext)
    const handleLogOut = () => {
        signOut1()
        .then(() => {
            alert('Sign out sucsesfull')
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='flex gap-5 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex gap-5 items-center'>
                <img src={`${user ? user.photoURL : {user2}}`} alt="" width={"50px"} />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>Log out</button> : <Link to={'/auth/login'} className='btn btn-primary px-10'>Log in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;