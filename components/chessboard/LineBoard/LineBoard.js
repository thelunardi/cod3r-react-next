import BoardCell from '../BoardCell/BoardCell'
import styles from './lineBoard.module.css'

export default function LineBoard(props) {
    return (
        <div className={styles.line}>
            <BoardCell black={props.black}/>
            <BoardCell black={!props.black}/>
            <BoardCell black={props.black}/>
            <BoardCell black={!props.black}/>
            <BoardCell black={props.black}/>
            <BoardCell black={!props.black}/>
            <BoardCell black={props.black}/>
            <BoardCell black={!props.black}/>
        </div>
    )
}
