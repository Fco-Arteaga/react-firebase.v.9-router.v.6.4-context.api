import { useUserContext } from "../context/UserContex"

const Dashboard = () => {

    const {user} = useUserContext()

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Bienvnido: {user.name}</h2>
        </>
    )
 }
 export default Dashboard