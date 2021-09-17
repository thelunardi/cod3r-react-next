import styles from './chessboardCod3r.module.css'
import LineBoard from '../../components/chessboard/LineBoard/LineBoard'

export default function ChessboardCod3r() {
    return (
        <div className={styles.chessboard}>
            <LineBoard/>
            <LineBoard black/>
            <LineBoard/>
            <LineBoard black/>
            <LineBoard/>
            <LineBoard black/>
            <LineBoard/>
            <LineBoard black/>
        </div>
    )
}
