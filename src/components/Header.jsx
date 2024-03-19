import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
function Header(){
    const cartValue = useSelector((state) => state.cart.cartItems)
    const [isOpen , setIsOpen] = useState (false)
       const handleIsOpen = () =>{
        setIsOpen (true)
       }
     const handleClose = () =>{
        setIsOpen (false)
     }
    return <div className="bg-[#5F8670] fixed w-full p-5 flex justify-between">
        <h1 style={{fontSize: isOpen === true ? "16px" : ""}} className="sm:text-4xl text-2xl font-bold text-[#53f414]">E-Commerce</h1>
        <i style={{display: isOpen === true ? "none" : ""}} onClick={handleIsOpen} class="fa-solid text-5xl sm:hidden flex text-[#53f414] absolute right-1 fa-bars"></i>
        <i style={{display: isOpen === true ? "block" : "none"}} onClick={handleClose} class="fa-solid hidden text-5xl sm:hidden  text-[#53f414] absolute  right-1 fa-xmark"></i>
        <ul style={{display: isOpen === true ? "block" : ""}} className="sm:flex sm:gap-20 space-y-8  sm:space-y-0   sm:text-4xl text-2xl hidden sm:mt-0 mt-20  text-[#53f414]">
            <Link to="/">Home</Link>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <ol>
        <Link to="/cart"><i class="fa-solid text-4xl sm:mr-10 mr-10 sm:mt-0 mt-1 text-[#53f414] fa-cart-shopping">  <span className="text-xl  absolute sm:right-2 right-28 top-2">( {cartValue.length} )</span></i></Link>
        </ol>
    </div>
}
export default Header