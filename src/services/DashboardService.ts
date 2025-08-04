import type { SalesDataDTO } from "../dto/dashboard/salesData";
import axiosClient from "./client/axios";

export const DashboardService = {

    getSalesDataByFileId : async (fileId: string): Promise<SalesDataDTO[]> => {
        const response = await axiosClient.get<SalesDataDTO[]>(`files/${fileId}`);
        return response.data;
    }
}