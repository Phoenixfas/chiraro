import Image from "next/image"
import blogs from "../data/blogs"
import Link from "next/link"

export default function BlogsCards() {
  return (
    <div className='w-full flex flex-col items-center my-[100px] px-5'>
        <h2 className='text-lg text-center font-medium text-[#01BAEF]'>Our Blog</h2>
        <h1 className='text-[3.2rem] text-center font-bold mb-9'>Recently On Our Blog</h1>

        <div className="w-full max-w-[1200px] flex flex-wrap justify-center gap-7">
            {blogs && blogs.slice(0, 3).map((blog: any, index) => (
                <div key={index} className="w-[380px] flex flex-col gap-5">
                    <div className="group w-full h-72 relative rounded-[20px] overflow-hidden">
                        <Image className="group-hover:scale-[1.2] duration-500" src={blog.image} alt={blog.title} layout='fill' objectFit='cover' />
                        <div className="bg-[#01BAEF] absolute left-0 bottom-0 rounded-r-[20px] overflow-hidden">
                            <p className="text-lg text-center font-bold px-4 py-2 bg-[#192655]">{blog.date.split(" ")[0]}</p>
                            <p className="text-lg text-center font-bold px-4 py-2">{blog.date.split(" ")[1] + " " + blog.date.split(" ")[2]}</p>
                        </div>
                        <div className="origin-center w-full h-0 group-hover:h-10 duration-1000 bg-[#080C1B] absolute top-0 left-0 rotate-[315deg] translate-y-[50px] translate-x-[calc(-50%_+_50px)]"></div>
                    </div>
                    <h2 className="text-3xl font-bold">{blog.title}</h2>
                    <p className="text-lg text-[#ccc] font-medium">{blog.snippet.slice(0, 70)}</p>
                    <Link href={"/"} className="text-sm text-[#01BAEF] underline">Read More</Link>
                </div>
            ))}
        </div>
    </div>
  )
}
