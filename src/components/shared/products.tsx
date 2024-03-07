import { useGetProducts } from "@/service/query/useGetProducts"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/slices/cart-slice"
import { Link } from "react-router-dom"
const Products = () => {
    const dispatch = useDispatch()
    const { data } = useGetProducts("all")
    const handleAddToCart = (data: any) => {
        dispatch(addToCart(data))
    }
    return (
        <div className="w-[1440px] mx-auto my-6">
            <h1 className="text-2xl my-4 px-4">Смартфоны и планшеты</h1>
            <Carousel className="w-[390px] md:w-[768px] lg:w-full ">
                <CarouselContent>
                    {data?.map((item: any, index: number) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                            <div className="p-1 h-[350px] ">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-3 flex-col">
                                        <Link to={`/product/${item?.id}`}>
                                            <img className="w-[100px] md:w-[150px] lg:h-[200px] lg:w-[200px]" src={item?.img} alt="" />
                                            <h3 className="text-[18px] mt-2">{item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}</h3>
                                        </Link>
                                        <div className="w-full flex justify-between items-center mt-2">
                                            <p className="text-[18px]">{item?.price} сум</p>
                                            <Button onClick={() => handleAddToCart(item)} className="bg-[#FEEE00]  hover:bg-[#fff45a] text-[#000000]"><ShoppingCart /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="w-10 h-10 left-[0px] lg:left-[-20px]" />
                <CarouselNext className="w-10 h-10 right-[0px] lg:right-[-20px]" />
            </Carousel>
        </div>
    )
}

export default Products