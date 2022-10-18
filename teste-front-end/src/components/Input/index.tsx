import style from './Input.module.scss';

interface InputProps {
    name: string,
    placeholder: string,
    value: string,
    id: string,
    required: boolean
}

export default function Input(props: InputProps) {
    return (
        <div className={style.inputContainer}>
            <input type='text' name={props.name} id={props.id} value={props.value} placeholder={props.placeholder} required={props.required} />
        </div>
    )
}