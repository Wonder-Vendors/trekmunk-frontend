import  useUser from "@/hooks/useUser";


export default async function getData (){
    const {handleGetUser} = useUser()
    await handleGetUser("65f18767f75ad17bd56eff37")
}