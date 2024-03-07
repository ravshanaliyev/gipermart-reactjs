import { useGetProducts } from "@/service/query/useGetProducts"

const ThreesomeProducts = () => {
    const { data } = useGetProducts("all")
    return (
        <div className="flex m-6">
            <div className="w-1/3">
                <h3 className="text-[24px] my-5">Смартфоны и планшеты</h3>
                {data?.slice(0, 3).map((item: any) => (
                    <div key={item?.id} className="flex my-4 w-[400px] gap-2">
                        <img className="w-[140px] h-[140px]" src={item?.img} alt="" />
                        <div className="flex flex-col justify-between py-2">
                            <p className="text-[18px]">{item?.title}</p>
                            <p className="text-[18px]">{item?.price} сум</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-1/3">
                <h3 className="text-[24px] my-5">Ноутбуки, планшеты и компьютеры</h3>
                {data?.slice(13, 16).map((item: any) => (
                    <div key={item?.id} className="flex my-4 w-[400px] gap-2">
                        <img className="w-[140px] h-[140px]" src={item?.img} alt="" />
                        <div className="flex flex-col justify-between py-2">
                            <p className="text-[18px]">{item?.title}</p>
                            <p className="text-[18px]">{item?.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-1/3">
                <h3 className="text-[24px] my-5">Смартфоны и планшеты</h3>
                {data?.slice(25, 28).map((item: any) => (
                    <div key={item?.id} className="flex my-4 w-[400px] gap-2">
                        <img className="w-[140px] h-[140px]" src={item?.img} alt="" />
                        <div className="flex flex-col justify-between py-2">
                            <p className="text-[18px]">{item?.title}</p>
                            <p className="text-[18px]">{item?.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ThreesomeProducts