import BlogsCards from "./BlogsCards";
import Features from "./Features";
import Hero from "./Hero";
import SEO from "./SEO";
import ServicesCards from "./ServicesCards";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Hero />
      <Features />
      <ServicesCards />
      <SEO />
      <BlogsCards />
    </main>
  )
}
