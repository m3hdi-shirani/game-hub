import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Trailer } from "./Trailer";


const useTrailers = (gameId: number) => {
    const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

   return useQuery({
    queryKey: ["trailers", gameId],
    queryFn:  apiClient.getAll
});
}

export default useTrailers;
