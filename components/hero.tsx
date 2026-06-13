import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Hedlamps Consulting Services
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Enterprise technology consulting. Aviation systems for Africa's
              next generation of airlines.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href="#zigzag"
                >
                  Our Services
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                
                  className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="#approach"
                >
                  Our Approach
                </a>
              </div>
            </div>
          </div>

          <Image
            src={"/images/hero-image-01.jpg"}
            alt="Hero image"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
}
