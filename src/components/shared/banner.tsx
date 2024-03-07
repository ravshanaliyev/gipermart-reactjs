import useGetBanner from "@/service/query/useGetBanner"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const Banner = () => {
    const { data } = useGetBanner()

    return (
        <div>
            <Carousel className="w-full ">
                <CarouselContent>
                    {
                        data?.map((item: any) => (
                            <CarouselItem key={item?.id}>
                                <img className="h-[120px] md:h-auto" src={item?.img} alt="" />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="w-10 h-10 left-6" />
                <CarouselNext className="w-10 h-10 right-8" />
            </Carousel>
        </div>
    )
}

export default Banner