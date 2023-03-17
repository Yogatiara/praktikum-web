

const navBar = () => {
    return (
        <>
            <nav className="bg-[#B9D6F2] border-gray-200 bg-opacity-80 fixed w-full px-2 sm:px-4 py-2.5  dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="" className="flex items-center">
                        <img src="./assets/LogoFasilgo.png" className="h-6 mr-3 sm:h-9" alt="" />
                        <span className="self-center text-4xl text-[#003559] font-roboto font-bold whitespace-nowrap dark:text-white">FasilGO</span>
                    </a>

                    <div className="flex md:order-2">
                        <div className="relative  hidden lg:block">
                            <div className="flex">
                                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>
                                
                                
                                <div className="pl-6 pt-[8px] font-roboto ">
                                    <p className="">Yoga Tiara W.</p>
                                </div>
                            </div>

                        </div>

                        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>


                    </div>

                    {/* <div className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <ul className="min-[770px]:flex flex-col bg-[#B9D6F2] p-4 mt-4 border hidden border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className="block font-roboto text-lg py-2 pl-3 pr-4 text-gray-700  rounded hover:text-white hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sewa Fasilitas</a>
                            </li>
                            <li>
                                <a href="#" className="block font-roboto text-lg py-2 pl-3 pr-4 text-gray-700  rounded hover:text-white hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Panduan Sewa</a>
                            </li>
                            <li>
                                <a href="#" className="block font-roboto text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang FasilGo</a>
                            </li>
                        </ul>
                    </div> */}

                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div class="relative mt-3 md:hidden">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>

                        </div>
                        <ul class="flex flex-col p-4 mt-4 border  md:invisible lg:visible  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block font-roboto text-lg py-2 pl-3 pr-4 text-gray-700  rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sewa Fasilitas</a>
                            </li>
                            <li>
                                <a href="#" className="block font-roboto text-lg py-2 pl-3 pr-4 text-gray-700  rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Panduan Sewa</a>
                            </li>
                            <li>
                                <a href="#" className="block font-roboto text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang FasilGo</a>
                            </li>
                        </ul>
                    </div>



                </div>
            </nav>

        </>
    )
}

export default navBar;


