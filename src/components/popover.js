

export default function Popover({children}){

    let elem = React.Children.map(children, (child,index)=>{
        return children
    })

    return(
        <React.Fragment>
            {elem}
            </React.Fragment>
    )
}