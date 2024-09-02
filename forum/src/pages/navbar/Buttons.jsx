function Buttons(props){
    return(
        <button className='hover:bg-black hover:bg-opacity-10 w-[100%] text-left flex py-1 my-1 rounded-lg'>
            {props.bicons} <p className="ml-2">{props.title}</p>
        </button>
    )
}

export default Buttons