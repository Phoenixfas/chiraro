import Hero from "./Hero";
import SEO from "./SEO";
import ServicesCards from "./ServicesCards";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Hero />
      <ServicesCards />
      <SEO />
    </main>
  )
}
