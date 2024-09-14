import { ChevronDownIcon } from "@heroicons/react/24/outline"
import ThreadReply from "./ThreadReply"

function ThreadReplies(){
    return(
        <div className="w-[100%] min-h-32">
            <div className="flex">
                <div className="mr-10 flex">
                    Urutkan Balasan
                    <div className="hover:bg-black hover:bg-opacity-25 rounded-full px-1 ml-1 flex">Teratas <ChevronDownIcon className="w-5 mt-1"/></div>
                    
                </div>
                <div className="">
                    Cari Balasan
                </div>
            </div>
            <div className="pb-8">
                <ThreadReply/><ThreadReply/><ThreadReply/>
            </div>
        </div>
    )
}export default ThreadReplies