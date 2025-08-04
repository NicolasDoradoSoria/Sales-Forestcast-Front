import type { LoginResponse } from "../dto/auth/loginResponse";
import type { LoginDto } from "../dto/user/login";
import axiosClient from "./client/axios";

export const AuthService = {
    login: async (Credential: LoginDto): Promise<LoginResponse> => {
        const response = await axiosClient.post('auth/login', Credential)
        return response.data
    },
    logout: async (): Promise<void> => {
        await axiosClient.post('auth/logout')
    }
}