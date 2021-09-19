import
    Component3, { Component1, Component2 as Comp2, Component4, Component5, Component6 }
    from '../../components/module/functional'

export default function test() {
    return (
        <div>
            <Component1 />
            <Comp2 />
            <Component3 />
            <Component4 />
            <Component5 />
            <Component6 />
        </div>
    )
}
