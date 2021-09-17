import styles from './integration2.module.css'

export default function cssIntegration() {
    return (
        <div id={styles.integration2}>
            <div className={styles.redClass}>
                Texto 1
            </div>
            <div className={styles.blueClass}>
                Texto 2
            </div>
        </div>
    )
}
