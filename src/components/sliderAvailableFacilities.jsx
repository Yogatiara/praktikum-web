import Chevron from "react-chevron";

const sliderContents = [
    "./assets/dome.jpg",
    "./assets/krb.png",
    "./assets/pantai-manggar.png"

]


const sliderAvailableFacilities = () => {
    return (
            
        <>  
            <div className="flex   mx-auto  w-[1460px]">
                <div className="text-3xl  my-auto ">
                    <button className="px-9 py-0  shadow-xl rounded-full bg-white text-gray-800 hover:bg-white" >
                        <Chevron direction={'left'} />
                    </button>
                </div>

                <div className="bg-white  shadow-2xl rounded-3xl mx-auto w-[1200px] h-[600px]">
                    <div className="flex p-12 mt-12">
                        <div >
                        
                            <div className="font-archivo text-6xl">
                                <h2 className="font-extrabold">Pantai</h2>
                                <h2 className="font-extralight">Manggar.</h2>
                            </div>
                            <div className="pt-10 w-[500px]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias! Quam, asperiores debitis eveniet quas nam aliquid expedita necessitatibus quo sed ea impedit, eum iusto deserunt quisquam velit temporibus tenetur.</p>
                            </div>

                            <div className="pt-20">
                                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#0353A4] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sewa tempat</button>
                            </div>
                        </div>
                        <div className=" h-[400px] shadow-2xl mt-6 w-[4000px] ml-[50px] ">
                            <img className="h-[400px] shadow-2xl " src="./assets/pantai-manggar.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="bg-white  shadow-2xl rounded-3xl mx-auto w-[1200px] h-[600px]">
                    <div className="flex p-12 mt-12">
                        <div >

                            <div className="font-archivo text-6xl">
                                <h2 className="font-extrabold">Pantai</h2>
                                <h2 className="font-extralight">Manggar.</h2>
                            </div>
                            <div className="pt-10 w-[500px]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias! Quam, asperiores debitis eveniet quas nam aliquid expedita necessitatibus quo sed ea impedit, eum iusto deserunt quisquam velit temporibus tenetur.</p>
                            </div>

                            <div className="pt-20">
                                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#0353A4] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sewa tempat</button>
                            </div>
                        </div>
                        <div className=" h-[400px] shadow-2xl mt-6 w-[4000px] ml-[50px] ">
                            <img className="h-[400px] shadow-2xl " src="./assets/pantai-manggar.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="text-3xl my-auto ">
                    <button className= "px-9 py-0 shadow-xl rounded-full bg-white text-gray-800 hover:bg-white">
                        <Chevron direction={'right'} />
                    </button>
                </div>
            </div>

      
            
        </>
    )
}


export default sliderAvailableFacilities;