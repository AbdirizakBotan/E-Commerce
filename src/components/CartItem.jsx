import { useDispatch } from "react-redux"
import {removeItemFromCart,calculateTotalPrice} from "../redux/reducer/cart"
function CartItem ({items}){
    const dispatch = useDispatch ()

    const handleRemove = () =>{
        dispatch(removeItemFromCart(items))
        dispatch(calculateTotalPrice())
    }
    return <div className="sm:pt-5 pt-0 mb-10">
        <div className="border-2 sm:mx-[250px] mx-[100px] sm:w-[890px] w-[200px]  p-3 sm:mt-0  mt-10 rounded sm:flex-row flex flex-col sm:gap-32  border-gray-200">
         <img className="w-[220px] p-2" src={items.image} />
         <h1 className="mt-12 text-3xl">{items.name}</h1>
         <p className="mt-12 text-3xl ">${items.price}</p>
        <div>
            <button onClick={handleRemove} className="bg-red-400 mt-14 text-2xl rounded px-2">remove</button>
            </div>
        </div>
    </div>
}

export default CartItem