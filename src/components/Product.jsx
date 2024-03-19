import { useDispatch } from "react-redux"
import { addToCart } from "../redux/reducer/cart"
function Product ({product}){

    const dispatch = useDispatch ()

    const handleAddToCart = () =>{
        dispatch(addToCart(product))
    }
    return <div className="sm:mt-16 mt-20 w-[310px] sm:mb-10 mb-16
     border-2 border-gray-500 p-3 rounded">
        <img src={product.image}/>
        <div className="flex justify-between   mt-3 text-2xl">
            <h1 className="font-semibold">{product.name}</h1>
           <h1 className="font-bold">${product.price}</h1>
 </div>
    <button onClick={handleAddToCart} className="bg-[#5F8670] px-24 py-3 mt-6 rounded-lg font-bold text-[#53f414]">Add to cart</button>
    </div>
}
export default Product