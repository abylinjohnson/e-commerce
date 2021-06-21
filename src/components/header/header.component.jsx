import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
const Header = ({currentUser}) =>(
    <div class='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        {
            currentUser ?
            <Link className='option' onClick={()=>auth.signOut()}>SIGN OUT</Link>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
    </div>
    </div>
);

export default Header;