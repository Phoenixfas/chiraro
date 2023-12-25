import Hero from "./Hero";
import ServicesCards from "./ServicesCards";


export default function Home() {
  return (
    <main className="w-full min-h-[150vh] flex flex-col items-center">
      <Hero />
      <ServicesCards />
    </main>
  )
}
