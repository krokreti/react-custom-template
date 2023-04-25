import { useCallback, useState } from "react";

interface requestType {
    url: string,
    method?: "GET" | "POST" | "PATCH" | "DELETE",
    headers?: object | {},
    body?: object | {}
}

var baseUrl = 'http://localhost:3000/';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const sendRequest = useCallback(async (requestConfig: requestType, applyData: any) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${baseUrl}${requestConfig.url}`, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
        } catch (err: any) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
}

export default useHttp;