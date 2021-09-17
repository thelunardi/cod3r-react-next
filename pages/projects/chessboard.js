import styles from './chessboard.module.css'

export default function Chessboard() {
    return (
        <div className={styles.content}>
            <div className={styles.chessboard}>
                {createBoardCells(1, 8)}
                {createBoardCells(0, 7)}
                {createBoardCells(1, 8)}
                {createBoardCells(0, 7)}
                {createBoardCells(1, 8)}
                {createBoardCells(0, 7)}
                {createBoardCells(1, 8)}
                {createBoardCells(0, 7)}
            </div>
        </div>
    )
}

function createBoardCells(initial, final) {
    const cells = []
    for (let i = initial; i <= final; i++) {
        cells.push(<div key={i} className={i % 2 === 0 ? styles.blackCell : styles.whiteCell} />)
    }

    return cells
}
