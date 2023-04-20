import React, {Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar' 
import Footer from '../components/Footer/Footer'
import Profile from '../components/Profile/Profile'
import MobileNav from '../components/Navbar/MobileNav'


export default function Main() {
  return (
    <div className="max-w-[1440px] flex gap-10 mx-auto px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<Loader />}>
        <div className="w-[365px] lg:block ">
          <Profile />
        </div>
        <div className="lg:max-w-[1000px]">
          <Outlet />
          <Footer />
        </div>
        <div className="lg:max-w-[60px] lg:block md:block hidden">
          <Navbar />
        </div>
        <div className="lg:hidden md:hidden block">
          <MobileNav />
        </div>
      </Suspense>
    </div>
  )
}