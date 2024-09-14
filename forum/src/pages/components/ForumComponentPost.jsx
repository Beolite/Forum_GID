import ForumComponentPostButton from "./ForumComponentPostButton"
import { useEffect, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import axios from "axios"
function ForumComponentPost(props){
    const [post,setPost] = useState([])

    useEffect(() => {
        getPost();
      }, []);

    const getPost = async () => {
        const response = await axios.get(`http://localhost:5000/post/${id}`);
        setPost(response.data);
      };
      
    return(
        <Link key={props.fkey} to={props.fto}>
            <div className="lg:my-10 my-2 ">
                <div className="w-[98%] overflow-hidden hover:bg-[#1a3f4b] hover:bg-opacity-5 rounded-lg lg:h-48 h-64 border-solid border-2 border-[#1a3f4b] border-opacity-30 overflow-hidden">
                    <div className="h-[82%]">
                        <div className="flex justify-between">
                            <div className="flex m-2">
                                <div className="mr-8">Topic</div>
                                <div>Tanggal</div>
                            </div>
                            <div className="text-black"><Bars3Icon/></div>
                        </div>
                        <div className="mx-2 overflow-hidden">
                            <h1 className="text-xl font-semibold">{props.ftitle}</h1>
                            <p className="mt-3 max-h-[72px] overflow-hidden ">{props.fcontent}</p>
                        </div>
                    </div>
                    <div className="mx-2 my-1 flex ">
                        <ForumComponentPostButton bname="Like"/>
                        <ForumComponentPostButton bname="Reply"/>
                        <ForumComponentPostButton bname="Saved"/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ForumComponentPost