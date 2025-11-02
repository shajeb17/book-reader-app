import React from 'react';
import Navbar from '../component/navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { FadeLoader } from 'react-spinners';

const MainLayout = () => {
    let navigetion=useNavigation()
    
    return (
        <div>
             <Navbar></Navbar>

             {navigetion.state==='loading'?(
                <div className='m-auto flex justify-center mt-2.5'>
                    <FadeLoader/>
                </div>
             )
            :<Outlet></Outlet> 
            }
        </div>
    );
};

export default MainLayout;