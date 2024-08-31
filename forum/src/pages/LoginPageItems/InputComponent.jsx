function InputComponent(props){
    return(
        <input className='transition-transform hover:-translate-y-[2px] bg-[#ede8f5] hover:bg-[#92dcc9] placeholder-slate-600 mt-[5px] w-[100%] mt-[5px] w-[100%] rounded-r-full' type={props.itype} placeholder={props.pholder}></input>
    )
}

export default InputComponent