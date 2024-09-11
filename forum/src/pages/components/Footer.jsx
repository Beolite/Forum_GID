import { useState } from 'react';
import { Link } from "react-router-dom";
import{
  HomeIcon,
  UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
  BellIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const gradient="bg-gradient-to-t from-[#214f5d] to-[#20415f]";

function Footer() {

  const [open,setOpen] = useState(false);
  return (
    <>
        <div className="w-[100vw] flex lg:hidden h-12 fixed bottom-0 flex lg-hidden bg-gradient-to-b bg-[#e3f5ed] border-t-2 border-opacity-10 border-black ">
            <div className="flex text-[#374f52] w-[90%] mx-auto justify-between">
              <button><HomeIcon className='size-10 mx-3 my-auto'/></button>
              <button><UserGroupIcon className='size-10 mx-3 my-auto'/></button>
              <button><ChatBubbleLeftEllipsisIcon className='size-10 mx-3 my-auto'/></button>
              <button><BellIcon className='size-10 mx-3 my-auto'/></button>
              <button><QuestionMarkCircleIcon className='size-10 mx-3 my-auto'/></button>
            </div>
        </div>
    </>
  )
}

export default Footer 