import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"

export const useGetCategoryProducts = (category: any) => {
    return useQuery({
        queryKey: ["categories", category],
        queryFn: async () => request.get(`/${category}`).then((res: any) => res.data),
    })
}
