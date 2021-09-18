import Children from "./Children"

export default function Father(props) {
    return (
        <div>
            <h1>Família {props.family}</h1>
            <Children name="João" family={props.family} />
            <Children name="José" family={props.family} />
            
            {/*padrão é colocar no início*/}
            <Children {...props} name="Maria" />
        </div>
    )
}
