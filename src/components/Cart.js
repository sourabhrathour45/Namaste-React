import { BentoTwoTone } from '@mui/icons-material'
import DishData from './DishData'
import {useSelector, useDispatch} from 'react-redux'
import {clearCart} from '../ultils/cartSlice'

const Cart = ()=>{
    const cartItems = useSelector((state)=>state.cart.items)
    const dispatch = useDispatch();
    return(
        <>
        <div className="flex justify-center  ">
        <div className='w-[50%]'>
            <h1 className="text-center font-bold text-2xl text-orange-900 my-12">Your Cart</h1>
            <button onClick={()=>dispatch(clearCart())} className="m-4 p-2 bg-orange-800 text-white rounded-lg" > Clear Cart </button>
            <DishData data ={cartItems}/>
        </div>
        </div>
        </>
    )
}

export default Cart;