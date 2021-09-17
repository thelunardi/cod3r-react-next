import styles from './boardCell.module.css'

export default function BoardCell(props) {
    return (
        <div
            style={{
                backgroundColor: props.black ? '#000' : '#fff'
            }}
            className={styles.boardCell}
        />
    )
}
