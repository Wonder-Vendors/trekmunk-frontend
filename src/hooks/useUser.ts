"use client"
import { useAppDispatch } from "@/redux/hooks"
import { getUser_success,getUser_failure,getUser_request } from "@/redux/reducers/userRequestReducer"
import axios from "axios"
import { useAxios } from "./useAxios"
import { setUser } from "@/redux/reducers/userSlice"
import { useToast } from "@/components/ui/use-toast"

const useUser = () =>{
    const dispatch = useAppDispatch()
    const { toast } = useToast()
    const handleGetUser = async (id:string) =>{
        dispatch(getUser_request());
        try {
            const {getCall} = useAxios(`user/${id}`)
            const res = await getCall()
            const response = {...res}
            if(response.statusCode==200){
                dispatch(setUser({...response.data}))
                return dispatch(getUser_success())
            }
        } catch (error:any) {
            if(axios.isAxiosError(error)){
                return dispatch(getUser_failure(error.response?.data.message))
            }
            toast({
                title: error.message,
                description: "An error occured",
              })
        }
    }
    return {handleGetUser}
}
export default useUser;