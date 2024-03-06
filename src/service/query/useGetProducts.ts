import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"

export const useGetProducts = (name: string) => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            return request.get(`/${name}`).then((res: any) => res.data)
        }
    })
}
