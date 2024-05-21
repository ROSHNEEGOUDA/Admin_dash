import React from "react";
import { useMediaQuery } from "react-responsive";

const Content = () =>{
    const isMobile = useMediaQuery({ maxWidth: 500 });

    const handleSubmit = ()=>{
        // code for submit
    }
    return (
        <div className="mx-auto mt-8">
            <h1 className="mt-6 ml-6 text-xl font-[600] text-gray-400">Approve/Blog/Detail page</h1>

            <div className={`mt-4 ${isMobile ? "h-64 grid grid-cols-1" : "h-48 grid grid-cols-2"}`}>
                <div className="col-span-1 flex items-center">
                    <div className="h-20 w-20  ml-16 relative">
                        <div className="absolute inset-0 rounded-full bg-yellow-300"></div>
                        <h1 className="ml-24 text-3xl font-[600]">Name</h1>
                        <p className="ml-24 mt-1 text-sm">Volunteer</p>
                        <p className="ml-24 mt-5 text-sm w-32">Chennai, Tamil Nadu</p>
                    </div>
                </div>
                {/* Reject/Approve */}
                <div className="col-span-1 flex items-center justify-end mr-4" >
                    <div className="h-10 w-20 relative">
                        <div className="absolute inset-0 rounded-md bg-green-500"></div>
                        <button className="absolute inset-0 flex items-center justify-center text-black font-semibold">Approve</button>
                    </div>
                    <div className="h-20 w-20 relative ml-2">
                        <div className="absolute inset-0 rounded-md"></div>
                        <button className="absolute inset-0 flex items-center justify-center text-black font-semibold">Reject</button>
                    </div>
                </div>
            </div>

            <div className="mx-8 w-2/3">
                <h1 className={` ml-4 text-2xl font-medium mb-6 ${isMobile ? "mt-16" : "mt-32"}`}>Topic of Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum consequatur, assumenda in quasi est voluptatem quam fuga consectetur. Dolor laboriosam praesentium iure, laudantium adipisci error sint eaque repellendus minus veniam in est neque consectetur eos. Similique adipisci rerum quae eos minima 
                    sequi asperiores cupiditate earum vitae dolore atque veniam totam illo, autem, reprehenderit rem corporis possimus dolorem odio quibusdam a dolores. Repudiandae cupiditate molestias veritatis fugiat. Dolores, sint amet veritatis tempora animi distinctio earum eius vitae accusantium facilis expedita 
                    quos esse quae voluptates nam doloremque rerum voluptatum nobis rem illo maxime mollitia exercitationem ipsam? Libero exercitationem deleniti quas commodi!
                </p>
                <div className=" w-2/3 h-64 mt-6 mb-6 bg-slate-200">
                    {/* Image */}
                </div>

                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum consequatur, assumenda in quasi est voluptatem quam fuga consectetur. Dolor laboriosam praesentium iure, laudantium adipisci error sint eaque repellendus minus veniam in est neque consectetur eos. Similique adipisci rerum quae eos minima 
                    sequi asperiores cupiditate earum vitae dolore atque veniam totam illo, autem, reprehenderit rem corporis possimus dolorem odio quibusdam a dolores. Repudiandae cupiditate molestias veritatis fugiat. Dolores, sint amet veritatis tempora animi distinctio earum eius vitae accusantium facilis expedita 
                    quos esse quae voluptates nam doloremque rerum voluptatum nobis rem illo maxime mollitia exercitationem ipsam? Libero exercitationem deleniti quas commodi!
                </p>

                <div className="mt-10 h-32 rounded-md mb-10">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="feedback" className="block text-gray-700 text-xl">Feedback or Comment:</label>
                            <textarea id="feedback" name="feedback" rows="4" placeholder="Comment / Feedback" className="border-gray-400 rounded-md p-3 w-full h-32 align-top border"></textarea>
                        </div>
                        {/* Add other form fields as needed */}
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-10">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>



            </div>
            
        </div>
    )
}

export default Content;