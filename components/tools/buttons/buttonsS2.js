import { Button } from "antd";
import s from './buttons.module.scss'
export default function ButtonsS2({ text, iconB, iconA, className, type, loading, disabled = false }) {

    return (
        <div className={'ButtonsS2 ' + s.ButtonsS2}>
            <Button className={className} htmlType={type} loading={loading} disabled={disabled}>
                {iconB}
                {text}
                {iconA}
            </Button>
        </div>
    )
}