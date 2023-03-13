import { Outlet, Navigate } from "react-router-dom"
import {useUserContext} from "../context/UserContex"

const LayoutPrivate = () => { 

    const {user} = useUserContext()

    return (
        <>
           {
            user ? <Outlet/> : <Navigate to='/'/>
           } 
        </>
    )
}
export default LayoutPrivate

   /*
    const navigate = useNavigate()
   useEffect(()=>{
        if(!user){
            navigate('/')
        }
    },[user])

    */