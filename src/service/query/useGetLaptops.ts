import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"


export const useGetLaptops = () => {
    return useQuery({
        queryKey: ["laptops"],
        queryFn: async () => request.get("/laptops").then((res: any) => res.data),
    })
}
