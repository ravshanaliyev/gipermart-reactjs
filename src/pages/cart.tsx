import { useDispatch, useSelector } from "react-redux"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { removeFromCart } from "@/redux/slices/cart-slice"
import { Trash2 } from "lucide-react"
import Navbar from "@/components/shared/navbar"
import NavTop from "@/components/shared/nav-top"

export default function Cart() {
    const { total, totalItems, cart } = useSelector((state: any) => state.cart)
    console.log(total);

    const dispatch = useDispatch()
    const handleRemoveToCart = (data: any) => {
        dispatch(removeFromCart(data))
    }
    return (
        <div className="w-[1440px] mx-auto ">
            <NavTop />
            <Navbar />
            <h1 className="text-2xl mt-8 mb-4">Your Cart</h1>
            <p className="text-[18px]">{totalItems} Items in cart</p>
            {
                totalItems > 0
                    ? (
                        <div className="flex w-full flex-wrap items-start justify-between gap-8">
                            {cart.map((item: any, i: any) => (
                                <Card key={i}>
                                    <CardContent className="flex aspect-square items-center justify-center p-3 flex-col w-[250px]">
                                        <img src={item?.img} alt="" />
                                        <h3 className="text-[16px] mt-2">{item?.title}</h3>
                                        <div className="w-full flex justify-between items-center mt-2">
                                            <p className="text-[18px]">{item?.price}</p>
                                            <Button onClick={() => handleRemoveToCart(item.id)} className="bg-red-500 text-white  hover:bg-red-600 "><Trash2 /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )
                    : (
                        <p>Your Cart is empty</p>
                    )
            }
        </div>
    )
}