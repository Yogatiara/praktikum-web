import NavBar from "../components/navBar";
import SliderAvailableFacilities from "../components/sliderAvailableFacilities";
import Chevron from "react-chevron";



const landingPages = () => {
    return (
        <>  
            <div className="bg-[#F0F0F0] h-full">
                <NavBar />

                <div className="h-60 md:h-[500px] lg:h-[700px] xl:h-[900px] bg-cover lg:bg-center xl:bg-center" style={{ backgroundImage: 'url("./assets/DashBoard.jpg")' }}>
                    <div className="pl-[80px] pt-[258px] ">
                        <div className="text-[#021d2e] text-7xl font-bold">
                            <h2 >Selamat Datang Di <span className="text-[#003559]">FasilGO</span></h2>
                        </div>
                        <div className="text-[#0e2e50] font-semibold pt-4 font-roboto text-2xl">
                            <p>"Melayani masyarakat yang ingin menyewa fasilitas pemerintah"</p>
                            

                        </div>

                        <div className="pt-[44px] ">

                            <button type="button" class="text-white font-semibold  hover:bg-[#4383c4] bg-blue-800  focus:outline-none   rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Sewa sekarang!
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="mt-56">
                    <div>
                        <h3 className="font-inter text-4xl text-center tracking-tighter font-extrabold ">Fasilitas Yang Tersedia</h3>
                       
                    </div>

                    <div className="pt-20 ">
                        <SliderAvailableFacilities />
                       
                    </div>
                    
                </div>
            </div>
            {/* banner */}


          
            {/* <img className="xl:h-[900px] xl:object-cover  w-full" src="./assets/DashBoard.jpg" alt="" /> */}
        </>
    )

}


export default landingPages;