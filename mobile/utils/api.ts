import axios, { AxiosInstance } from 'axios';
import { useAuth } from '@clerk/clerk-expo';

const API_BASE_URL = "https://x-clone-mobile-app.vercel.app/api";

interface ProfileData {
    [key: string]: any;
}

export const createApiClient = (getToken: () => Promise<string | null>): AxiosInstance => {
    const api = axios.create({ baseURL: API_BASE_URL });
    api.interceptors.request.use(async (config) => {
        const token = await getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        config.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';

        return config;
    })
    return api;
}

export const useApiClient = (): AxiosInstance => {
    const { getToken } = useAuth();
    return createApiClient(getToken);
}

export const userApi = {
    syncUser: (api: AxiosInstance) => api.post("/user/sync"),
    getCurrentUser: (api: AxiosInstance) => api.get("/user/me"),
    updateProfile: (api: AxiosInstance, data: ProfileData) => api.put("/user/profile", data),

}