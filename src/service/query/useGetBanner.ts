import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"


const useGetBanner = () => {
    return useQuery({
        queryKey: ["banner"],
        queryFn: async () => request.get("/banner").then((res: any) => res.data),
    })
}

export default useGetBanner