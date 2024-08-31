
const dummy="Ini adalah deskripsi dari section ini, silahkan diklik.";
import { Link } from 'react-router-dom';

function Card (props) {

    return (
        <div style={{backgroundImage:`url(${props.bg})`}} className="rounded-[5px] active:bg-gradient-to-br active:from-[#8fd7b7] active:via-[#92dcc9] active:to-[#8fd7b7] bg-gradient-to-br from-[#8fd7cc] via-[#99dde7] to-[#8fd7cc] mt-4 w-[95%] shadow-md mx-auto overflow-hidden flex-col justify-around bg-cover bg-no-repeat bg-center active:-translate-y-2 transition-transform">
            <Link to="/">
            <h1 className='text-[#2a2a2a] text-[36px] my-[48px] ml-[32px] font-semibold overflow-hidden'>{props.cardTitle}</h1>
            <p className="text-[#2a2a2a] text-base w-[92%] mt-[80px] font-semibold my-[5px] mx-[10px] ">{props.cardDesc}</p>
            </Link>

            
        </div>
    )
}

export default Card