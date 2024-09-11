import Buttons from "./Buttons2"
function PostMobileComponent(){
    return(
        <div className="lg-hidden bg-[#e3f5ed] w-[100vw] h-[100vh]">
            <div className="bg-slate-500 bg-opacity-40 w-[100%] h-36">

            </div>
            <div className="bg-slate-500 bg-opacity-60 w-[100%] h-16">

            </div>
            <div className="mx-auto w-[95%]">
                <div className="">
                    <div className="flex justify-between">
                        <div className=" ml-2 mt-4 mb-1 text-xl font-semibold">Title</div>
                        <div className=" ml-2 mt-4 mb-1 text-xl font-semibold">0/300</div>
                    </div>
                    <input type="text" className="w-[100%] h-12 rounded-xl text-xl pl-1 mb-4 bg-black bg-opacity-10 border-black border-opacity-15 border-2">
                        
                    </input>
                </div>
                
                <div className="">
                    <div className="flex justify-between">
                        <div className="ml-2 mt-4 mb-1 text-xl font-semibold">Content</div>
                        <div className=" ml-2 mt-4 mb-1 text-xl font-semibold">0/300</div>
                    </div>
                    
                    <div contentEditable="true"  className="w-[100%] overflow-scroll min-h-36 max-h-96 rounded-xl mb-4 bg-black bg-opacity-10 border-black border-opacity-15 border-2"/>
                </div>
            </div>
            <div className="flex justify-end text-stone-100 mr-1">
                <button className="mx-2 text-xl font-semibold bg-[#1a3f4b] rounded-lg p-2">Simpan Draf</button>
                <button className="mx-2 text-xl font-semibold bg-[#1a3f4b] rounded-lg p-2">Post</button>
            </div>


        </div>
    )
}
export default PostMobileComponent