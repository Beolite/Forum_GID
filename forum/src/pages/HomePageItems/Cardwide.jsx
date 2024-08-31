
import { Link } from 'react-router-dom';

function Cardwide (props) {
    return(
        <div style={{backgroundImage:`url(${props.bg})`}} className="
        bg-[#396674] overflow-hidden flex-col hover:bg-[#547c92] w-96 h-[100%] mx-10 shadow-md shadow-[#1d2a2c] bg-center bg-cover bg-no-repeat rounded-xl 
        hover:transform hover:scale-105 transition-transform duration-300 ">
            <Link to={props.linkto}>
            <h1 className='text-[#374f52] text-[36px] my-[48px] ml-[32px] font-semibold '>{props.title}</h1>
            <p className='mt-[80px] text-[#374f52] font-semibold w-[92%] mx-auto'>{props.desc}</p>
            </Link>
        </div>
    )
}
export default Cardwide