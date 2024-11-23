import Navbar from "../components/Navbar";
import FooterSection from "../Home/FooterSection";



const PlansPage = () => {
  return (
    <div className="w-full font-poppins">
      {/* About Section */}
      <section className="h-screen bg-[url('/our-plan-main.png')] bg-cover bg-center relative">
        {/* Navbar */}
        <Navbar />
        <div className="flex flex-col  relative top-1/3 max-w-[1650px] mx-auto  ">
          <h1
            className="text-lg sm:text-xl md:text-6xl lg:text-7xl  text-black mb-4 z-20 relative "
            style={{ fontFamily: "MADE Gentle, sans-serif" }}
          >
            Our Plans{" "}
          </h1>
          <p className="text-xl font-semibold">
            For any inquiries, we’re here to assist you with the best support.
          </p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
          <a href="#about" className="scroll-down">
            Scroll Down{" "}
            <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
          </a>
        </div>
      </section>

      {/* Our Plans Section */}


      {/* Footer Section */}
      <FooterSection/>

    </div>
  );
};

export default PlansPage;
