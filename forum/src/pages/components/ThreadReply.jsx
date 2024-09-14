import { ArrowUpIcon,ArrowDownIcon, ChatBubbleLeftIcon,ShareIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"

function ThreadReply(){
    return(
        <div className="w-[97%] lg:w-[80%] mt-8 min-h-16">
            <div className="flex">
                <div className="w-8 h-8 bg-black rounded-full"/>
                <div className="font-semibold mt-1 mx-2">Username</div>
                
            </div>
            <div className="mt-1 min-w-[80%]">
                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quibusdam maxime. Quibusdam, doloremque! Eos vitae eveniet distinctio dolore, commodi optio.</div>
            </div>
            <div className="mt-1 flex justify-between">
                <div className="flex">
                <ArrowUpIcon className="w-6 mx-1 hover:bg-black hover:bg-opacity-10 rounded-full"/>
                <ArrowDownIcon className="w-6 mx-1 hover:bg-black hover:bg-opacity-10 rounded-full"/>
                <div className="flex mx-3 hover:bg-black hover:bg-opacity-10 p-2 rounded-full"><ChatBubbleLeftIcon className="w-6 mx-1"/> Balasan</div>
                <div className="flex mx-3 hover:bg-black hover:bg-opacity-10 p-2 rounded-full"><ShareIcon className="w-6 mx-1"/> Bagi</div>
                </div>
                <EllipsisHorizontalIcon className="w-6 mx-1 hover:bg-black hover:bg-opacity-10 rounded-full"/>
            </div>
        </div>
    )
}export default ThreadReply