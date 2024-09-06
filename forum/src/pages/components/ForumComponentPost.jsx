import ForumComponentPostButton from "./ForumComponentPostButton"
import { Bars3Icon } from "@heroicons/react/24/outline"

function ForumComponentPost(){
    return(
        <div className="lg:my-10 my-12">
            <div className="w-[98%] overflow-hidden hover:bg-[#1a3f4b] hover:bg-opacity-5 rounded-lg lg:h-48 h-64 border-solid border-2 border-[#1a3f4b] border-opacity-30">
                <div className="flex justify-between">
                    <div className="flex m-2">
                        <div className="mr-8">Topic</div>
                        <div>Tanggal</div>
                    </div>
                    <div className="text-black"><Bars3Icon/></div>
                </div>
                <div className="mx-2">
                    <h1 className="text-xl font-semibold">Post Title</h1>
                    <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis voluptatum atque accusamus dolorem ipsum aut obcaecati asperiores quam ullam totam, quibusdam fuga ipsam sapiente?</p>
                </div>
                <div className="mx-2 flex">
                    <ForumComponentPostButton bname="Like"/>
                    <ForumComponentPostButton bname="Reply"/>
                    <ForumComponentPostButton bname="Saved"/>
                </div>
            </div>
          </div>
    )
}

export default ForumComponentPost