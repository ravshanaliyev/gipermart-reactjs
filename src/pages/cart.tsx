import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { removeFromCart } from "@/redux/slices/cart-slice"
import { Heart, Trash2 } from "lucide-react"
import Navbar from "@/components/shared/navbar"
import NavTop from "@/components/shared/nav-top"
import { toggleAmmount } from "@/redux/slices/cart-slice"
export default function Cart() {
    const { cart, totalItems, count } = useSelector((state: any) => state.cart)
    const total = cart.reduce((total: any, item: any) => total + item.price, 0)

    const dispatch = useDispatch()

    const handleRemoveToCart = (data: any) => {
        dispatch(removeFromCart(data))
    }

    const toggleCard = (type: any, id: any) => {
        dispatch(toggleAmmount({ id, type }))
    }
    return (
        <div className="w-[1440px] mx-auto ">
            <NavTop />
            <Navbar />
            <h1 className="text-2xl mt-8 mb-4">Your Cart</h1>
            <p className="text-[18px]">{totalItems} Items in cart</p>
            <div className="flex gap-2 w-full">
                <div className="w-[1000px] mb-4">
                    {
                        totalItems > 0
                            ? (
                                <div className="flex flex-col gap-4">
                                    {cart.map((item: any, i: any) => (
                                        <div className="flex gap-2 border rounded-lg px-6 py-4" key={i}>
                                            <img src={item?.img} alt="" />
                                            <div className="w-full">
                                                <div className="flex items-center  justify-between">
                                                    <h3 className="text-[24px] ">{item?.title}</h3>
                                                    <p className="text-[24px]">{item?.price} сум</p>
                                                </div>
                                                <div className="flex  gap-2 mt-4 justify-between items-center ">
                                                    <div>
                                                        <Button variant={"outline"} onClick={() => handleRemoveToCart(item.id)} className=" text-white  "><Heart className="text-gray-500" /></Button>
                                                        <Button variant={"outline"} onClick={() => handleRemoveToCart(item.id)} className=""><Trash2 /></Button>
                                                    </div>
                                                    <div>
                                                        <Button onClick={() => toggleCard("addToCart", item.id)}>+</Button>
                                                        {count}
                                                        <Button onClick={() => toggleCard("removeFromCart", item.id)}>-</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                            : (
                                <p>Your Cart is empty</p>
                            )
                    }
                </div>
                <div className="w-1/3 p-4 bg-gray-100 h-[200px]">
                    <span className="text-[24px] mb-2 block">В корзине</span>
                    <span className="text-[18px] mb-2">Товаров: {totalItems}</span>
                    <p className="text-red-500">Введите промокод</p>
                    <p className="text-[24px] my-2">{total} сум</p>
                    <Button className="w-full bg-[#FEEE00]  hover:bg-[#fff45a] text-[#000000]">Оформить заказ</Button>
                </div>
            </div>
        </div>
    )
}