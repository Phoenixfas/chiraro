import Link from "next/link";
import { BsGlobe2 } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile, HiOutlinePaintBrush } from "react-icons/hi2";

export default function ServicesCards() {
  return (
    <div className="relative flex flex-col w-full mb-10  items-center py-14 gap-[100px]">
        <h1 className="w-fit text-[2.5rem] sm:text-[3em] relative before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-1/2 before:h-[3px] before:rounded-full before:bg-[#01BAEF]">Our Services</h1>
        <div className="w-full sm:px-20 flex flex-wrap justify-center items-center gap-x-[70px] gap-y-[100px]">

            <div className="relative w-[320px] h-[450px] bg-[linear-gradient(to_bottom_right,#01BAEF,#192655)] flex flex-col items-center gap-8 rounded-[20px] rounded-b-[160px] shadow-[0_15px_0_#fff_,_inset_0_-15px_0_#ffffff33] overflow-hidden duration-300 hover:-translate-y-5 hover:shadow-[0_15px_0_#fff_,_inset_0_-15px_0_#ffffff33,_0_35px_10px_#ffffff33] ">
                <div className="text-[6em] relative z-10 w-[140px] h-[120px] bg-[#080C1B] flex items-start justify-center rounded-b-[100px] shadow-[0_15px_0_#00000033,inset_0_-8px_0_#fff] before:content-[''] before:w-[50px] before:h-[50px] before:absolute before:z-[-1] before:top-0 before:left-[-50px] before:bg-transparent before:rounded-tr-[50px] before:shadow-[15px_-15px_0_15px_#080C1B] after:content-[''] after:w-[50px] after:h-[50px] after:absolute after:z-[-1] after:top-0 after:right-[-50px] after:bg-transparent after:rounded-tl-[50px] after:shadow-[-15px_-15px_0_15px_#080C1B]"><BsGlobe2 /></div>
                <div className="w-full px-[30px] text-center flex flex-col items-center gap-[15px]">
                    <h2 className="text-[1.8em] font-bold leading-[2rem]">Web Development</h2>
                    <p className="leading-[1.5em]">Experience unmatched web development, tailored sites, and seamless user experiences. Your digital success begins here—crafted uniquely for your brand&apos;s online journey.</p>
                </div>
            </div>

            <div className="relative w-[320px] h-[450px] bg-[linear-gradient(to_bottom_right,#01BAEF,#192655)] flex flex-col items-center gap-8 rounded-[20px] rounded-b-[160px] shadow-[0_15px_0_#fff_,_inset_0_-15px_0_#ffffff33] overflow-hidden duration-300 hover:-translate-y-5 hover:shadow-[0_15px_0_#fff_,_inset_0_-15px_0_#ffffff33,_0_35px_10px_#ffffff33]">
                <div className="text-[6em] relative z-10 w-[140px] h-[120px] bg-[#080C1B] flex items-start justify-center rounded-b-[100px] shadow-[0_15px_0_#00000033,inset_0_-8px_0_#fff] before:content-[''] before:w-[50px] before:h-[50px] before:absolute before:z-[-1] before:top-0 before:left-[-50px] before:bg-transparent before:rounded-tr-[50px] before:shadow-[15px_-15px_0_15px_#080C1B] after:content-[''] after:w-[50px] after:h-[50px] after:absolute after:z-[-1] after:top-0 after:right-[-50px] after:bg-transparent after:rounded-tl-[50px] after:shadow-[-15px_-15px_0_15px_#080C1B]"><HiOutlineDevicePhoneMobile /></div>
                <div className="w-full px-[30px] text-center flex flex-col items-center gap-[15px]">
                    <h2 className="text-[1.8em] font-bold leading-[2rem]">Mobile Development</h2>
                    <p className="leading-[1.5em]">Transform your business with our mobile development expertise. We create innovative iOS and Android apps tailored to your needs, ensuring a standout digital presence.</p>
                </div>
            </div>

            <div className="relative w-[320px] h-[450px] bg-[linear-gradient(to_bottom_right,#01BAEF,#192655)] flex flex-col items-center gap-8 rounded-[20px] rounded-b-[160px] shadow-[0_15px_0_#fff_,_inset_0_-15px_0_#ffffff33] overflow-hidden duration-300 hover:-translate-y-5 hover:shadow-[0_15px_0_#fff_,_inset_0_-15px_0_#ffffff33,_0_35px_10px_#ffffff33]">
                <div className="text-[6em] relative z-10 w-[140px] h-[120px] bg-[#080C1B] flex items-start justify-center rounded-b-[100px] shadow-[0_15px_0_#00000033,inset_0_-8px_0_#fff] before:content-[''] before:w-[50px] before:h-[50px] before:absolute before:z-[-1] before:top-0 before:left-[-50px] before:bg-transparent before:rounded-tr-[50px] before:shadow-[15px_-15px_0_15px_#080C1B] after:content-[''] after:w-[50px] after:h-[50px] after:absolute after:z-[-1] after:top-0 after:right-[-50px] after:bg-transparent after:rounded-tl-[50px] after:shadow-[-15px_-15px_0_15px_#080C1B]"><HiOutlinePaintBrush /></div>
                <div className="w-full px-[30px] text-center flex flex-col items-center gap-[15px]">
                    <h2 className="text-[1.8em] font-bold leading-[2rem]">Graphics Design</h2>
                    <p className="leading-[1.5em]">Revamp your brand with our expert graphic design. From eye-catching logos to compelling marketing, we meticulously craft visuals that leave a lasting and memorable impact.</p>
                </div>
            </div>

        </div>
        <Link href="/services" className="text-xl w-fit px-20 py-4 border-2 border-[#01BAEF] rounded-full duration-300 hover:shadow-[0_10px_15px_#01BAEF]">More</Link>
    </div>
  )
}
