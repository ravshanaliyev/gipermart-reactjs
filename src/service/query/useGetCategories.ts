import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"


export const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => request.get("/category").then((res: any) => res.data),
    })
}
