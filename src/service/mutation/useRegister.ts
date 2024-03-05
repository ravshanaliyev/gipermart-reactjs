
import { request } from "@/config/request";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
    return useMutation({
        mutationFn: async (data: any) => {
            return request.post("/users", data).then((res) => res.data);
        }
    });
};