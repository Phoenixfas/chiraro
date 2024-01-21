import BlogsCards from "./BlogsCards";
import Features from "./Features";
import Hero from "./Hero";
import NewsletterSub from "./NewsletterSub";
import RecentClients from "./RecentClients";
import SEO from "./SEO";
import ServicesCards from "./ServicesCards";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Hero />
      <Features />
      <ServicesCards />
      <SEO />
      <RecentClients />
      <BlogsCards />
      <NewsletterSub />
    </main>
  )
}
