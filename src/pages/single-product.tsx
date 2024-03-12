import { Button } from "@/components/ui/button"
import { add } from "@/redux/slices/cart-slice"
import { useGetProducts } from "@/service/query/useGetProducts"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

const SingleProduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { data } = useGetProducts("all")
    const handleAddToCart = (data: any) => {
        dispatch(add(data))
    }
    return (
        <div className="w-[1440px] mx-auto my-4">
            {
                data?.filter((item: any) => item.id == id).map((item: any) => (
                    <div className="flex" key={item?.id}>
                        <div className="">
                            <img className="w-[435px] object-cover" src={item?.img} alt="" />
                        </div>
                        <div className="w-2/5">
                            <h1 className="text-[32px] mb-3">{item?.title}</h1>
                            <div className="flex items-center gap-2">
                                <p className="text-[18px]">Объем памяти:</p>
                                <p className="text-[24px]">{item?.memory}</p>
                            </div>
                            <h2 className="text-[24px]">Характеристики</h2>
                            <div className="flex gap-2 mb-3">
                                <p className="text-[18px] text-gray-500">Цвет:</p>
                                <p className="text-[18px]">{item?.color}</p>
                            </div>
                            <div className="flex gap-2 mb-3">
                                <p className="text-[18px] text-gray-500">экран:</p>
                                <p className="text-[18px]">{item?.screen}</p>
                            </div>
                            <div className="flex gap-2 mb-3">
                                <p className="text-[18px] text-gray-500">оперативная память:</p>
                                <p className="text-[18px]">{item?.ram}</p>
                            </div>
                            <div className="flex gap-2 mb-3">
                                <p className="text-[18px] text-gray-500">память:</p>
                                <p className="text-[18px]">{item?.memory}</p>
                            </div>
                            <div className="flex gap-2 mb-3">
                                <p className="text-[18px] text-gray-500">4 камеры:</p>
                                <p className="text-[18px]">{item?.camera}</p>
                            </div>
                            <div className="flex gap-2 mb-3">
                                <p className="text-[18px] text-gray-500">беспроводные интерфейсы:</p>
                                <p className="text-[18px]">{item?.interface}</p>
                            </div>
                        </div>
                        <div className="w-1/5 rounded-lg p-4 shadow-lg h-[200px] border">
                            <div className="flex items-center justify-between">
                                <del className="old-value text-gray-500 text-[20px]">74 990.00 Сум</del>
                                <div className="stock bg-red-500 text-[20px] text-white px-2">-9%</div>
                            </div>
                            <h2 className="text-[36px] my-2">{item?.price} сум</h2>
                            <Button onClick={() => handleAddToCart(item)} className="bg-[#feee00] text-black hover:bg-[#fff45a] w-full text-[16px]">В корзину</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SingleProduct