//example of named export with props -functional component

export const Welcome=(props)=>{
    return (
        <div>
            <h1>My Name is {props.name}</h1>
                {props.children}
        </div>
    )
}