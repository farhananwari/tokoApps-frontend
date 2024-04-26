import React from 'react';
import { SideBar } from './bar/side';
import { TopBar } from './bar/top';
import { FooterSection } from './bar/foot';


const MainLayout = ({ children }) => {

    return (
        <div className='wrapper'>
            <SideBar />
            <div className='main'>
                <TopBar />
                <div className='content'>
                    <div className='container-fluid p-0'>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainLayout;