import Data from "./Data"
import Product from "./Product"

function ProductList (){
    return <div className="grid  grid-cols-[300px] sm:mb-5 mb- sm:mt-10 mt-[58%] sm:grid-cols-[300px_300px_300px] justify-around">
         {
            Data.map((item) =>{
             return <Product product={item}/>
            })
         }
    </div>
}
export default ProductList