import React from 'react';
import "./Navbar.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="nav">
                    <div className="nav-left">
                        <h2>ATAMBAEV</h2>
                    </div>
                    <div className="nav-right">
                        <div className="nav-item"><a href="https://www.facebook.com/bektur.ab" target="_blank"><FacebookOutlinedIcon/></a></div>
                        <div className="nav-item"><a href="https://www.linkedin.com/in/bektur-atambaev-957b3121b" target="_blank"><LinkedInIcon/></a></div>
                        <div className="nav-item"><TelegramIcon/></div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;