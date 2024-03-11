import useGetBanner from "@/service/query/useGetBanner"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const Banner = () => {
    const { data, isLoading } = useGetBanner()

    return (
        <div>
            {
                isLoading ? (
                    <div>
                        <div role="status" className="flex items-center justify-center h-[316px] max-w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
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
                )
            }
        </div>
    )
}

export default Banner