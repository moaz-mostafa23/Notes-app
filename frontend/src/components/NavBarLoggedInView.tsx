import { Button, Navbar } from "react-bootstrap";
import { user } from "../models/user";
import * as NotesApi from "../network/notes_api"
import styleUtils from "../styles/utils.module.css"

interface NavBarLoggedInViewProps {
    user: user,
    onLogoutSuccessful: () => void,
}

const NavBarLoggedInView = ({user, onLogoutSuccessful}:NavBarLoggedInViewProps)=> {
    async function logout() {
        try {
        await NotesApi.logout();
        onLogoutSuccessful();

        } catch (error) {
            console.error(error)
            alert(error)
            
        }
    }
    
    
    return(
        <>
        <Navbar.Text className={`me-2 ${styleUtils.f1}`}>
            Welcome, {user.username}
        </Navbar.Text>
        <Button onClick={logout}>Log Out</Button>
        </>

    )
}

export default NavBarLoggedInView

