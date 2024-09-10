import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Testimonials from "@/components/Testimonials";
import Navigation from "@/components/ui/Navigation";

export default function Home() {
  return (
    <div>
      {/*       <Head>
        <title>Little Lemon Restaurant - Chicago</title>
        <meta name="description" content="Welcome to Little Lemon, a family-owned Mediterranean restaurant in Chicago. Enjoy our traditional recipes with a modern twist."/>
        <meta property="og:title" content="Little Lemon Restaurant - Traditional Mediterranean Cuisine in Chicago"/>
        <meta property="og:description" content="Discover Little Lemon's unique blend of traditional Mediterranean flavors and modern culinary techniques. Book your table today!"/>
        <meta property="og:image" content="https://littlelemon.com/home-page-og-image.jpg"/>
      </Head> */}
      <Navigation />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>

    // <main
    //   className="relative bg-white dark:bg-black flex justify-center
    // items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip"
    // >
    //   <div className="max-w-7xl w-full">
    //     <Navigation />
    //     <Hero />
    //     <Highlights />
    //     <Testimonials />
    //     <About />
    //     <Footer />
    //   </div>
    // </main>
  );
}
