
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectsClosingSection from "@/components/ProjectsClosingSection";


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F0E9E3]">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 z-50 w-full">
        <Navbar />
      </div>

      {/* PROJECTS HERO */}
      
{/* PROJECTS HERO */}
<section className="relative h-[100svh] w-full overflow-hidden bg-[#F0E9E3]">
  <div className="relative h-full w-full overflow-hidden">
    <Image
      src="/images/projects-hero.png"
      alt="Luxury rooftop terrace overlooking the city at sunset"
      fill
      priority
      sizes="100vw"
      className="
        object-cover
        object-center
        max-md:scale-[1.45]
        max-md:object-left
      "
    />
  </div>
</section>


      {/* PROJECTS CONTENT */}

      
{/* BROWSE BY CATEGORY */}
<section className="bg-[#F0E9E3] px-5 py-12 md:px-10 md:py-16 lg:px-14">

  <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_2.5fr] lg:items-center lg:gap-10">

    {/* LEFT: HEADING AND DESCRIPTION */}
    <div className="flex flex-col items-start">
      <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-[0.18em] text-neutral-600">
        Explore our work
      </p>

      <h2 className="font-[family-name:var(--font-manrope)] text-4xl font-normal leading-[1.05] tracking-tight text-black md:text-5xl">
        Browse by
        <br />
        Category
      </h2>

      <p className="mt-5 max-w-sm font-[family-name:var(--font-dm-sans)] text-sm leading-6 text-neutral-700 md:text-base">
        Discover thoughtfully designed spaces, crafted with timeless materials
        and attention to every detail.
      </p>

      
    </div>

    {/* RIGHT: CATEGORY CARDS */}
    <div
      id="project-categories"
      className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
    >

      {/* LIVING ROOM */}
      <a href="#living-room" className="group">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#DED6CE]">
          <Image
            src="/images/category-living.jpg"
            alt="Contemporary living room interior"
            fill
            sizes="(max-width: 768px) 45vw, 22vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-3 font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-wide text-white md:left-4 md:text-sm">
            Living Room
          </p>
        </div>
      </a>

      {/* DINING ROOM */}
      <a href="#dining-room" className="group">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#DED6CE]">
          <Image
            src="/images/category-dining.jpg"
            alt="Warm modern dining room interior"
            fill
            sizes="(max-width: 768px) 45vw, 22vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-3 font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-wide text-white md:left-4 md:text-sm">
            Dining Room
          </p>
        </div>
      </a>

      {/* BEDROOM */}
      <a href="#bedroom" className="group">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#DED6CE]">
          <Image
            src="/images/category-bedroom.jpg"
            alt="Minimalist bedroom with warm natural materials"
            fill
            sizes="(max-width: 768px) 45vw, 22vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-3 font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-wide text-white md:left-4 md:text-sm">
            Bedroom
          </p>
        </div>
      </a>

      {/* OUTDOOR */}
      <a href="#outdoor" className="group">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#DED6CE]">
          <Image
            src="/images/category-outdoor.jpg"
            alt="Outdoor lounge with contemporary furniture"
            fill
            sizes="(max-width: 768px) 45vw, 22vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-3 font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-wide text-white md:left-4 md:text-sm">
            Outdoor
          </p>
        </div>
      </a>

    </div>
  </div>
</section>


{/* FEATURED COLLECTION */}
<section className="bg-[#F0E9E3] px-0 py-10 md:py-14">

  <div className="grid grid-cols-1 gap-8 bg-[#111111] px-6 py-8 md:mx-10 md:grid-cols-[0.85fr_2fr] md:items-center md:gap-10 md:px-10 md:py-8 lg:mx-14 lg:grid-cols-[0.8fr_2fr] lg:gap-14 lg:px-12">

    {/* LEFT: COLLECTION TEXT */}
    <div className="flex flex-col items-start text-white">

      <p className="mb-4 font-[family-name:var(--font-dm-sans)] text-[10px] uppercase tracking-[0.2em] text-white/60 md:text-xs">
        Our Collection
      </p>

      
<h2
  className="
    font-[family-name:var(--font-manrope)]
    text-[52px]
    sm:text-[64px]
    md:text-[72px]
    lg:text-[82px]
    font-normal
    leading-[0.95]
    tracking-[-0.06em]
    text-white
  "
>
  Modern living,
  <br />
  redefined.
</h2>


      <p className="mt-5 max-w-xs font-[family-name:var(--font-dm-sans)] text-sm leading-6 text-white/75">
        Each piece in our collection is a perfect balance of form,
        function, and fine craftsmanship.
      </p>

      

    </div>

    {/* RIGHT: FEATURED INTERIOR IMAGE */}
    <div className="relative h-[220px] w-full overflow-hidden md:h-[240px] lg:h-[280px] lg:w-[90%] lg:ml-auto">
      <Image
        src="/images/img1.jpg"
        alt="Modern interior featuring a sculptural lamp and warm wooden furniture"
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
        className="object-cover object-center"
      />
    </div>
  </div>
</section>


{/* OUR SERVICES SECTION */}
<section className="bg-[#F0E9E3] px-6 md:px-12 lg:px-20 py-20 md:py-28">

  {/* SECTION HEADING */}
  <div className="mb-20 md:mb-28">
    <h2
      className="
        font-[family-name:var(--font-manrope)]
        text-[52px]
        md:text-[72px]
        lg:text-[88px]
        leading-[0.95]
        tracking-[-0.06em]
        text-black
      "
    >
      Our
      <br />
      Services
    </h2>
  </div>

  {/* SERVICES GRID */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

    {/* RESIDENTIAL */}
    <div>
      <h3 className="
        font-[family-name:var(--font-manrope)]
        text-xl md:text-2xl
        font-medium
        text-black
        mb-8
      ">
        Residential
      </h3>

      <p className="
        font-[family-name:var(--font-dm-sans)]
        text-base md:text-lg
        leading-relaxed
        text-[#68615D]
        max-w-sm
      ">
        Spaces designed around how you live, bringing together comfort,
        character and thoughtful details.
      </p>
    </div>

    {/* OFFICE DESIGN */}
    <div>
      <h3 className="
        font-[family-name:var(--font-manrope)]
        text-xl md:text-2xl
        font-medium
        text-black
        mb-8
      ">
        Office Design
      </h3>

      <p className="
        font-[family-name:var(--font-dm-sans)]
        text-base md:text-lg
        leading-relaxed
        text-[#68615D]
        max-w-sm
      ">
        Workspaces that balance productivity, identity and functionality
        while creating a better everyday experience.
      </p>
    </div>

    {/* PUBLIC SPACE DESIGN */}
    <div>
      <h3 className="
        font-[family-name:var(--font-manrope)]
        text-xl md:text-2xl
        font-medium
        text-black
        mb-8
      ">
        Public Space Design
      </h3>

      <p className="
        font-[family-name:var(--font-dm-sans)]
        text-base md:text-lg
        leading-relaxed
        text-[#68615D]
        max-w-sm
      ">
        Thoughtful environments designed to connect people, create
        experiences and leave a lasting impression.
      </p>
    </div>

  </div>
</section>



{/* FINAL INSPIRATION & TESTIMONIAL SECTION */}
<ProjectsClosingSection />

{/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="bg-[#F0E9E3] px-6 md:px-12 lg:px-20 pt-20 pb-10">

        <div className="border-t border-black/30 pt-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* BRAND */}
            <div>
              <h2
                className="
                  font-[family-name:var(--font-manrope)]
                  text-4xl
                  md:text-6xl
                  font-bold
                  tracking-[-0.05em]
                  text-black
                "
              >
                Arco Living
              </h2>
            </div>


            {/* LINKS */}
            <div
              className="
                grid
                grid-cols-2
                gap-10
                font-[family-name:var(--font-dm-sans)]
                text-sm
                text-black
              "
            >

              <div className="space-y-3">
                <p>Projects</p>
                <p>Design Ideas</p>
                <p>Magazine</p>
                <p>About Us</p>
              </div>

              <div className="space-y-3">
                <p>Instagram</p>
                <p>Pinterest</p>
                <p>Email</p>
                <p>Contact</p>
              </div>

            </div>

          </div>


          {/* BOTTOM */}
          <div
            className="
              mt-16
              pt-6
              border-t
              border-black/20
              flex
              flex-col
              md:flex-row
              md:justify-between
              gap-4
              font-[family-name:var(--font-dm-sans)]
              text-xs
              text-black
            "
          >

            <p>© 2026 Arco Living</p>

            <div className="flex gap-6">
              <p>Privacy</p>
              <p>Terms</p>
            </div>

          </div>

        </div>

      </footer>

      
    </main>
  );
}

