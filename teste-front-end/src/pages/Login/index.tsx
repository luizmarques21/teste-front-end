import styles from './Login.module.scss';
import logo from 'assets/logo.png';
import Input from '../../components/Input';
import Botao from '../../components/Botao';

export default function Login() {
    return (
        <>
            <div className={styles.logo}>
                <img src={logo} alt='Logo'/>
            </div>
            <div className={styles.formulario}>
                <Input name='nome' id='nome' required={true} placeholder='Nome do usuário' value='' />
                <Input name='email' id='email' required={true} placeholder='E-mail' value='' />
            </div>
            <Botao type='button'>
                ENTRAR
            </Botao>
        </>
    );
}