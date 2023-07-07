import react from 'react';
import Navbar from './navbar';
import { Outlet } from "react-router-dom";

const Layout =() => {
    return(
        <main className='App'>
             <Navbar />
            <Outlet/>
        </main>
    )
}
export default Layout