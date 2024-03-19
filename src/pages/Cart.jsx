import { useEffect } from "react"
import CartItem from "../components/CartItem"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useSelector , useDispatch } from "react-redux"
import {calculateTotalPrice} from "../redux/reducer/cart"
function Cart (){
    const cartItems = useSelector((state) => state.cart.cartItems)

    const price = useSelector ((state)=> state.cart.totalPrice)

    const dispatch =  useDispatch()

    useEffect(() => {
         dispatch(calculateTotalPrice())
    },[])
    return <div>
        <Header/>
        
        <h1 className="text-center text-4xl font-bold pt-24 mb-10">Your Shopping Cart</h1>
       {
          cartItems.length > 0 && cartItems.map ( (items) =>{
            return <CartItem items={items}/>
        })
       }
       {
      cartItems.length > 0 ? <div> <p className="sm:ml-[250px] ml-[100px] text-2xl mt-4">Total Price</p>
       <hr className="h-[1.5px]  bg-black text-black  mx-[250px]"/>
        <h1 className="text-3xl font-bold sm:ml-[250px] mb-10 ml-[100px]">${price}</h1>
         </div>
         :
         <p className="sm:ml-[250px] ml-20 text-3xl">Your Cart is Empty</p>
       }
       <Footer/>
       </div>
       
    } 
    export default Cart