import Image from "next/image";

export default function Features() {
  return (
    <div className='w-full px-10 py-10 xl:mb-20 flex xl:flex-row flex-col justify-center gap-5'>
        <div className="w-full xl:w-fit xl:max-w-[700px] h-fit p-8 border border-[#192655] rounded-2xl bg-[rgba(255,255,255,.05)] flex flex-col-reverse sm:flex-row items-center gap-5 mb-5 text-center sm:text-start">
            <div>
                <h2 className="text-3xl text-[#01BAEF] font-bold mb-3">Secure</h2>
                <p className="font-thin">Building a foundation of trust, our commitment to security goes beyond mere protection—it&apos;s about constructing robust digital fortresses that safeguard your data and assets, ensuring a resilient defense against the evolving landscape of cyber threats.</p>
            </div>
            <Image className="max-w-[250px] h-[150px] object-contain" src="/images/features/secure.svg" alt="secure" width={250} height={150} />
        </div>
        <div className="w-full xl:w-fit xl:max-w-[700px] h-fit p-8 border border-[#192655] rounded-2xl bg-[rgba(255,255,255,.05)] flex flex-col-reverse sm:flex-row items-center gap-5 mb-5 text-center sm:text-start xl:translate-y-[50%]">
            <div>
                <h2 className="text-3xl text-[#01BAEF] font-bold mb-3">Innovative</h2>
                <p className="font-thin">Dedicated to the relentless pursuit of innovation, we specialize in transforming your visionary ideas into tangible, cutting-edge digital realities that redefine the future of technology and business.</p>
            </div>
            <Image className="max-w-[250px] h-[150px] object-contain" src="/images/features/innovate.svg" alt="secure" width={250} height={150} />
        </div>
    </div>
  )
}
