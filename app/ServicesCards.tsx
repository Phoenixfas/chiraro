import Link from "next/link";
import services from "../data/services";

export default function ServicesCards() {
  return (
    <div className="relative flex flex-col w-full mb-20  items-center py-14 gap-[50px]">
        <h1 className="w-fit mb-10 text-[2.5rem] sm:text-[3em] relative before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-1/2 before:h-[3px] before:rounded-full before:bg-[#01BAEF]">Our Services</h1>
        <div className="w-full sm:px-20 flex flex-wrap justify-center items-center gap-x-[70px] gap-y-[100px]">

            {services && services.slice(0, 3).map((service, index) => (
                <div key={index} className="relative w-[320px] h-[450px] bg-[linear-gradient(to_bottom_right,#01BAEF,#192655)] flex flex-col items-center gap-8 rounded-[20px] rounded-b-[160px] shadow-[0_15px_0_#fff_,_inset_0_-15px_0_#ffffff33] overflow-hidden duration-300 hover:-translate-y-5 hover:shadow-[0_15px_0_#fff_,_inset_0_-15px_0_#ffffff33,_0_35px_10px_#ffffff33] ">
                    <div className="text-[6em] relative z-10 w-[140px] h-[120px] bg-[#080C1B] flex items-start justify-center rounded-b-[100px] shadow-[0_15px_0_#00000033,inset_0_-8px_0_#fff] before:content-[''] before:w-[50px] before:h-[50px] before:absolute before:z-[-1] before:top-0 before:left-[-50px] before:bg-transparent before:rounded-tr-[50px] before:shadow-[15px_-15px_0_15px_#080C1B] after:content-[''] after:w-[50px] after:h-[50px] after:absolute after:z-[-1] after:top-0 after:right-[-50px] after:bg-transparent after:rounded-tl-[50px] after:shadow-[-15px_-15px_0_15px_#080C1B]" >
                        {service.icon}
                    </div>
                    <div className="w-full px-[30px] text-center flex flex-col items-center gap-[15px]">
                        <h2 className="text-[1.8em] font-bold leading-[2rem]">{service.name}</h2>
                        <p className="leading-[1.5em]">{service.description}</p>
                    </div>
                </div>
            ))}

        </div>
        <Link href="/services" className="text-xl w-fit px-20 py-4 border-2 border-[#01BAEF] rounded-full duration-300 hover:shadow-[0_10px_15px_#01BAEF]">More</Link>
    </div>
  )
}
