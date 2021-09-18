import MegasenaNumber from './MegasenaNumber'

export default function MegasenaListNumber(props) {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    }

    return (
        <div style={styles}>
            {
                props.list ?
                    props.list.map(number => <MegasenaNumber key={number} number={number} />) :
                    null

            }
        </div>
    )
}
