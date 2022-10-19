import { Grid } from "@mui/material";
import LoginAPI from "api/LoginAPI";
import { useEffect } from "react";

function Header() {  
    useEffect(() => {
        LoginAPI.consultarUsuario()
        .then((resposta) => {
            console.log(resposta);
        });
    }, []);
    
    return (
        <Grid container>
            <Grid item xs={8}>
                <p>nomeUsuario</p>
                <p>email</p>
            </Grid>
        </Grid>
    );
}

export default Header