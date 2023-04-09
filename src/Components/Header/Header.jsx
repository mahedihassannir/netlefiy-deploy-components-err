import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul  style={{textAlign:'center' }} className=''>
                    <Link to='/'>Home</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Shop'>Shop</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;