
function Button(props) {
    return (
        <div>
            <button className=" my-4 outline-none border-1 p-2 text-current  rounded-lg  border-current  focus:outline-none">{props.text}</button>      
        </div>
    )
}

export default Button
