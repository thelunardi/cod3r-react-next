import IndirectChildren from "./IndirectChildren"

export default function IndirectFather(props) {
    function talkToMe(param) {
        console.log('Ogum falou comigo', param)
    }

    return (
        <div>
            <IndirectChildren indirectFunction={talkToMe} />
        </div>
    )
}
