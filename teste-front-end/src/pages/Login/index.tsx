import styles from './Login.module.scss';
import logo from 'assets/logo.png';
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import LoginAPI from '../../api/LoginAPI';
import { useNavigate } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function Login() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [erroEmail, setErroEmail] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState('');
    const navigate = useNavigate();

    const enviarFormulario = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailValido = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        setErroEmail(!emailValido);
        setEmailHelperText(!emailValido ? 'Email inválido' : '');
        if (!emailValido) {
            return;
        }

        LoginAPI.logarUsuario(nomeUsuario, email)
        .then((resposta) => {
            localStorage.setItem('usuario', resposta.data);
            navigate('/buscarVideos');
        })
        .catch((error) => {
            console.log(error);
            alert('Ocorreu um erro ao logar');
        });
    }

    return (
        <div className={stylesTema.container}>
            <Box className={styles.logo}>
                <img src={logo} alt='Logo'/>
            </Box>
            <Box className={styles.formulario} component='form' onSubmit={enviarFormulario}>
                <TextField 
                    value={nomeUsuario} 
                    onChange={e => setNomeUsuario(e.target.value)} 
                    label='Nome do usuário' 
                    variant='outlined'
                    className={styles.inputContainer}
                    sx={{marginBottom: '2rem'}}
                />
                <TextField 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    label='E-mail' 
                    variant='outlined'
                    error={erroEmail}
                    helperText={emailHelperText}
                    className={styles.inputContainer}
                    sx={{marginBottom: '2rem'}}
                />
                <Button className={styles.botao} type='submit' variant='outlined'>Entrar</Button>
            </Box>
        </div>
    );
}