import { api } from "src/boot/axios";   
import { notify } from "src/boot/notify-defaults";
import { IUserRegisterData } from "./interfaces";

export const registerUserService = async (userData: IUserRegisterData): Promise<any> => {
    try{
        return await api.post('/users', userData);
    }catch (error: any){
        console.error(error);
        notify(`Ocurrió un error al registrar el usuario: ${error?.response?.data?.message || 'Error desconocido'}`, 'negative');
        throw error;
    }
};

