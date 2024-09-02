function Buttons2(props){
    return(
        <button className='hover:bg-black hover:bg-opacity-10 w-[100%] text-left flex py-1 my-1 rounded-lg'>
            <p className="text-xl ml-2">{props.title}</p>{props.bicons}
        </button>
    )
}

export default Buttons2