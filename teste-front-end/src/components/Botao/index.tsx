import { ReactNode } from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => {},
    children?: ReactNode
}

export default function Botao({type, onClick, children}: BotaoProps) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}