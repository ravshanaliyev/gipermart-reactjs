import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"

const useSearch = (title = "") => {
    return useQuery({
        queryKey: ["searchItems", title],
        queryFn: async () => request.get("/all", { params: { title_like: title } }).then((res: any) => res.data),
    })
}

export default useSearch