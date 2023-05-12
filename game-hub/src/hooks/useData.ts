import { useEffect, useState } from "react";
import { Game } from "./userGames";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FetchRespsonse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient
            .get<FetchRespsonse<T>>(endPoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)

            });


        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
}

export default useData;