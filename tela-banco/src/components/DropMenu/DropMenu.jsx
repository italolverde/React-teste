import Select from 'react-select'
import styles from "./DropMenu.module.css"

export default function DropMenu({ onClick }) {
    return (
        <div className="icon-button" onClick={onClick} role="button" tabIndex={0}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
