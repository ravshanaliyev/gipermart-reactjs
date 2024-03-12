import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { add } from "@/redux/slices/cart-slice";
import { addLike, removeLike } from "@/redux/slices/like-slice";
import { ShoppingCart } from "lucide-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Liked = () => {
    const dispatch = useDispatch()
    const likedProducts = useSelector((state: any) => state?.like)
    console.log(likedProducts);
    const handleAddToCart = (data: any) => {
        dispatch(add(data))
    }
    const handleLike = (data: any) => {
        dispatch(addLike(data))
    }
    const handleDislike = (data: any) => {
        dispatch(removeLike(data))
    }
    return (
        <div className='w-[1440px] mx-auto'>
            <div className="flex  gap-4">
                {
                    likedProducts?.data.length > 0 ? (
                        likedProducts?.data.map((item: any) => (
                            <div className="p-1 h-[350px] w-[280px]">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-3 flex-col relative">
                                        <div className="absolute top-3 right-3">
                                            {likedProducts?.data.findIndex((likeproduct: any) => likeproduct.id === item.id) !==
                                                -1 ? (
                                                <AiFillHeart
                                                    className="text-red-500 text-2xl"
                                                    onClick={() => handleDislike(item)}
                                                />
                                            ) : (
                                                <AiOutlineHeart
                                                    className="text-[#999] text-2xl"
                                                    onClick={() => handleLike(item)}
                                                />
                                            )}
                                        </div>
                                        <Link to={`/product/${item?.id}`}>
                                            <img className="w-[100px] md:w-[150px] lg:h-[200px]  lg:w-[200px]" src={item?.img} alt="" />
                                            <h3 className="text-[18px] mt-2">{item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}</h3>
                                        </Link>
                                        <div className="w-full flex justify-between items-center mt-2">
                                            <p className="text-[18px]">{item?.price} сум</p>
                                            <Button onClick={() => handleAddToCart(item)} className="bg-[#FEEE00]  hover:bg-[#fff45a] text-[#000000]"><ShoppingCart /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center w-full">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png" alt="" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Liked