import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Navbar = () => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };
    return (
        <div class="navbar bg-base-100">
        <div class="flex-1">
          <Link to='/candidate' class="btn btn-ghost normal-case text-xl hover:bg-transparent">DESKALA</Link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 gap-3">
            <Link to='/candidate'><li className=' text-xl'><>Candidate</></li></Link>
            { 
              user? <li className=' text-xl cursor-pointer' onClick={logout}>Logout</li>: <><Link to='/'><li className=' text-xl'><>login</></li></Link>
              <Link to='/signup'><li className=' text-xl'><>Register</></li></Link></>
            }
          </ul>
        </div>
      </div>
    );
};

export default Navbar;