import Image from "next/image";
import Link from "next/link";

// components
import SkillCard from "@/components/SkillCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// actions
import { getSkills, getTestimonials } from "@/sanity/action";
import { Skill } from "@/types";

export default async function Home() {
  const skills = await getSkills();
  const testimonials = await getTestimonials();

  return (
    <>
      <Navbar />
      <main>
        {/* hero section */}
        <section className="container mx-auto mt-8 flex items-center flex-col">
          <div className="text-center pt-8 max-w-[900px] mx-auto">
            <h1 className="text-5xl font-bold xl:text-6xl">
              Connecting Vision with
              <span className="text-primary"> Expertise</span>
            </h1>
            <p className="mt-4">
              Your bridge to exceptional developmental solutions
            </p>
            {/* <button className="mt-8 bg-white text-primary border border-primary text-md uppercase px-5 py-3 rounded-full max-w-[200px] w-full font-bold transition-all hover:bg-primary hover:text-white">
            Get Started
          </button> */}
            <div className="flex items-center justify-center py-8 my-4">
              <Image src="/avatar.svg" alt="avatar" width={150} height={150} />
            </div>
          </div>
          <div>
            <Image
              width={600}
              height={600}
              src="/hero-banner.png"
              alt="hero banner"
            />
          </div>
        </section>
        {/* about section */}
        <section className="mt-0 bg-primary text-white min-h-[300px] flex items-center justify-center">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-2xl font-bold lg:text-3xl">
              Hi, I am <span>Nandeesh Pandey. Nice to meet you!</span>
            </h2>
            <p className="mt-6 text-sm text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              voluptatum. Deserunt, quo non architecto reprehenderit earum ut
              fugit at labore maiores, omnis ducimus facere, nihil doloremque
              recusandae quisquam quis fugiat!
            </p>
          </div>
        </section>

        {/* skills section */}
        <section className="relative">
          <div className="absolute h-20 bg-primary w-full z-0"></div>

          <ul className="flex justify-center items-center flex-wrap z-10 relative bg-white rounded-md max-w-[400px] mx-auto md:max-w-[900px] shadow-md gap-10 p-5">
            {skills?.length > 0 &&
              skills.map((skill: Skill) => (
                <SkillCard key={skill._id} skill={skill} />
              ))}
          </ul>
        </section>

        {/* testimonials section */}
        <section className="mt-20 container mx-auto">
          <div className="my-4 text-center">
            <h2 className="text-2xl font-bold lg:text-3xl">Testimonials</h2>
            <p className="mt-2 text-md">
              People I&apos;ve worked with have said some nice things...
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </section>

        {/* cta section */}
        <section className="mt-20 relative py-10 p-4">
          <div className="absolute bottom-0 h-[100px] bg-primary w-full z-10 left-0"></div>
          <div className="relative bg-[#141C3A] z-20 max-w-[900px] w-full mx-auto text-white p-4 py-10 rounded-xl flex items-center justify-around gap-6 flex-col lg:flex-row">
            <h2 className="font-bold text-2xl">Start a project</h2>
            <p className="max-w-[300px] text-sm">
              Interested in working together? We should queue up a time to chat.
              I&apos;ll buy the coffee.
            </p>
            <Link
              href="/contact"
              className="p-2 border-2 rounded-full border-accent text-accent max-w-[150px] w-full text-center transition-all hover:bg-accent hover:text-white"
            >
              Let&apos;s do this
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}