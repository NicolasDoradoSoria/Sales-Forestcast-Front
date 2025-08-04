import type { UploadResultDTO } from '../dto/upload/uploadResult';
import axiosClient from './client/axios';

export const UploadService = {
  uploadFile: async (file: File): Promise<UploadResultDTO> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axiosClient.post('/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },
};
