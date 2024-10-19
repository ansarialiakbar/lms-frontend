import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png"
import apj from "../Assets/Images/apj.png"
import billGates from "../Assets/Images/billGates.png"
import einstein from "../Assets/Images/einstein.png"
import nelsonMandela from "../Assets/Images/nelsonMandela.png"
import steveJobs from "../Assets/Images/steveJobs.png"


function AboutUs(){
    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                    <h1 className="text-5xl text-yellow-500 font-semibold">
                      Affordable and qualtiy education
                    </h1>
                    <p className="text-xl text-gray-200">
                      Get quality education at an affordable price! Our courses are 
                      designed to provide top-notch learning without breaking the bank, 
                      taught by experienced, passionate teachers who are dedicated to your
                      success.
                    </p>

                    </section>
                    <div className="w-1/2">
                    <img
                     id="test1"
                     style={{
                        filter:"drop-shadow(0px 10px 10px rgb(0, 0, 0));"
                     }}
                     alt="about main image"
                     className="drop-shadow-2xl"
                     src={aboutMainImage}
                     />

                    </div>

                </div>

            <div className="carousel w-1/2 my-16 m-auto">
             <div id="slide1" className="carousel-item relative w-full">
             <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
             <img
             src={nelsonMandela}
             className="w-40 rounded-full border-2 border-gray-400" />
             <p className="text-xl text-gray-200">
              {"Education is the most powerfull tool you can use to change the world."}
             </p>
             <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
             <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
             <a href="#slide5" className="btn btn-circle">❮</a>
             <a href="#slide2" className="btn btn-circle">❯</a>
             </div>
             </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
             <img
             src={apj}
             className="w-40 rounded-full border-2 border-gray-400" />
              <p className="text-xl text-gray-200">
              {"The best brains of the nation may be found on the last benches of the classroom."}
             </p>
             <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
             <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
             <a href="#slide1" className="btn btn-circle">❮</a>
             <a href="#slide3" className="btn btn-circle">❯</a>
             </div>
             </div>
            </div>
           <div id="slide3" className="carousel-item relative w-full">
           <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
             <img
             src={einstein}
             className="w-40 rounded-full border-2 border-gray-400" />
              <p className="text-xl text-gray-200">
              {"Try not to become a man of success, but rather try to become a man of value."}
             </p>
             <h3 className="text-2xl font-semibold">Einstein</h3>
             <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
             <a href="#slide2" className="btn btn-circle">❮</a>
             <a href="#slide4" className="btn btn-circle">❯</a>
             </div>
             </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
             <img
             src={steveJobs}
             className="w-40 rounded-full border-2 border-gray-400" />
              <p className="text-xl text-gray-200">
              {"The only way to do great work is to love what you do."}
             </p>
             <h3 className="text-2xl font-semibold">SteveJobs</h3>
             <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
             <a href="#slide3" className="btn btn-circle">❮</a>
             <a href="#slide5" className="btn btn-circle">❯</a>
             </div>
             </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
             <img
             src={billGates}
             className="w-40 rounded-full border-2 border-gray-400" />
              <p className="text-xl text-gray-200">
              {"Your most unhappy customers are your greatest source of learning."}
             </p>
             <h3 className="text-2xl font-semibold">Bill Gates</h3>
             <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
             <a href="#slide4" className="btn btn-circle">❮</a>
             <a href="#slide1" className="btn btn-circle">❯</a>
             </div>
             </div>
            </div>
            </div>
            
           </div>
        </HomeLayout>
    )

}
export default AboutUs;