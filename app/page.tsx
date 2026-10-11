import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedTaglines from "@/components/ui/animated-taglines";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F0E9E3]">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative w-full h-[100svh] bg-[#F0E9E3]">
        <div
          className="
            relative
            w-full
            h-[98svh]
            overflow-hidden
            rounded-b-[28px]
          "
        >
          <Image
            src="/images/hero.png"
            alt="Arco Living"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-[22%_center]
              md:object-center
            "
          />
        </div>
      </section>


      {/* ========================================================= */}
      {/* FEATURED SECTION */}
      {/* ========================================================= */}

      <section className="bg-[#F0E9E3] px-8 md:px-14 lg:px-20 py-28">

        {/* --------------------------------------------------------- */}
        {/* HEADING + CONTACT */}
        {/* --------------------------------------------------------- */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT HEADING */}
          <div className="lg:col-span-7">
            <h2
              className="
                font-[family-name:var(--font-manrope)]
                text-[72px]
                md:text-[96px]
                leading-[0.92]
                tracking-[-0.06em]
                text-black
              "
            >
              We design
              <br />
              the feeling
              <br />
              of you.
            </h2>
          </div>


          {/* RIGHT CONTENT */}
          <div className="lg:col-span-5 lg:pt-8">

            <h3
              className="
                font-[family-name:var(--font-dm-sans)]
                text-[34px]
                leading-[1.1]
                tracking-[-0.03em]
                text-black
              "
            >
              Let’s bring
              <br />
              your vision
              <br />
              to real life.
            </h3>


            {/* FORM LINES */}
            <div className="mt-24 space-y-8">

              {/* NAME */}
              <div>
                <p
                  className="
                    font-[family-name:var(--font-dm-sans)]
                    text-xs
                    uppercase
                    tracking-wide
                    text-[#6B625B]
                    mb-2
                  "
                >
                  Your Name
                </p>

                <div className="h-[2px] w-full bg-[#8B6A4D]" />
              </div>


              {/* EMAIL */}
              <div>
                <p
                  className="
                    font-[family-name:var(--font-dm-sans)]
                    text-xs
                    uppercase
                    tracking-wide
                    text-[#6B625B]
                    mb-2
                  "
                >
                  Email ID
                </p>

                <div className="h-[2px] w-full bg-[#8B6A4D]" />
              </div>

            </div>
          </div>
        </div>


        {/* ========================================================= */}
        {/* FEATURED IMAGES */}
        {/* ========================================================= */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            md:grid-cols-12
            gap-10
            md:gap-8
            items-start
          "
        >

          {/* IMAGE 1 */}
          <div className="md:col-span-4">

            <div
              className="
                relative
                w-full
                aspect-[4/5]
                overflow-hidden
                rounded-sm
              "
            >
              <Image
                src="/images/img4.png"
                alt="Arco Living interior project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* IMAGE DETAILS */}
            <div className="mt-5">

              <p
                className="
                  font-[family-name:var(--font-dm-sans)]
                  text-xs
                  tracking-[0.12em]
                  text-[#6B625B]
                "
              >
                01 / 03
              </p>

              <p
                className="
                  mt-2
                  font-[family-name:var(--font-dm-sans)]
                  text-sm
                  text-black
                "
              >
                Designed to Stay
              </p>

            </div>
          </div>


          {/* IMAGE 2 */}
          <div className="md:col-span-4 md:pt-10">

            <div
              className="
                relative
                w-full
                aspect-[4/5]
                overflow-hidden
                rounded-sm
              "
            >
              <Image
                src="/images/img5.jpg"
                alt="Arco Living interior project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* IMAGE DETAILS */}
            <div className="mt-5">

              <p
                className="
                  font-[family-name:var(--font-dm-sans)]
                  text-xs
                  tracking-[0.12em]
                  text-[#6B625B]
                "
              >
                02 / 03
              </p>

              <p
                className="
                  mt-2
                  font-[family-name:var(--font-dm-sans)]
                  text-sm
                  text-black
                "
              >
                Warm Minimalism
              </p>

            </div>
          </div>


          {/* IMAGE 3 */}
          <div className="md:col-span-4 md:pt-20">

            <div
              className="
                relative
                w-full
                aspect-[4/5]
                overflow-hidden
                rounded-sm
              "
            >
              <Image
                src="/images/img6.jpg"
                alt="Arco Living interior project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* IMAGE DETAILS */}
            <div className="mt-5">

              <p
                className="
                  font-[family-name:var(--font-dm-sans)]
                  text-xs
                  tracking-[0.12em]
                  text-[#6B625B]
                "
              >
                03 / 03
              </p>

              <p
                className="
                  mt-2
                  font-[family-name:var(--font-dm-sans)]
                  text-sm
                  text-black
                "
              >
                Designed to Stay
              </p>

            </div>
          </div>

        </div>


        {/* ========================================================= */}
        {/* DISCOVER BUTTON */}
        {/* ========================================================= */}

        <div className="mt-16">

          <button
            className="
              group
              inline-flex
              items-center
              gap-6
              font-[family-name:var(--font-dm-sans)]
              text-2xl
              text-black
            "
          >

            <span className="relative text-2xl">
              Discover

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[1px]
                  w-0
                  bg-black
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </span>


            <span
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-black/40
                text-xl
                transition-all
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

          </button>

        </div>

      </section>

{/* --------------------------------------------------------- */}
{/* DARK IMAGE SHOWCASE SECTION */}
{/* --------------------------------------------------------- */}

<section className="mt-16 bg-[#161616] px-8 md:px-14 lg:px-20 py-16 md:py-20">

  {/* ------------------------------------------------------- */}
  {/* SHOWCASE HEADER */}
  {/* ------------------------------------------------------- */}

  <div className="mb-16 md:mb-20">

    {/* Heading + Discover */}
    <div
      className="
        flex
        flex-col
        md:flex-row
        md:items-start
        md:justify-between
        gap-8
      "
    >

      {/* LEFT SIDE */}
      <div className="max-w-3xl min-w-0">

        {/* Heading */}
        <h2
          className="
            font-[family-name:var(--font-manrope)]
            text-[clamp(32px,8.5vw,52px)]
            sm:text-[52px]
            md:text-[72px]
            lg:text-[82px]
            leading-[0.95]
            tracking-[-0.06em]
            text-white
            max-w-full
            break-words
          "
        >
          Less.More.Yours
        </h2>

        {/* Paragraph */}
        <p
          className="
            mt-8
            max-w-[520px]
            font-[family-name:var(--font-dm-sans)]
            text-sm
            md:text-base
            leading-[1.6]
            text-white/60
          "
        >
          Spaces designed around the way you live, with every detail
          thoughtfully considered. Less noise, more character, entirely yours.
        </p>

      </div>

      {/* DISCOVER - RIGHT SIDE */}
      <div className="md:pt-4 shrink-0">
        <Link
          href="/design-ideas"
          className="
            group
            inline-flex
            items-center
            gap-3
            font-[family-name:var(--font-dm-sans)]
            text-sm
            md:text-base
            text-white
          "
        >
          <span className="relative">
            Discover

            <span
              className="
                absolute
                -bottom-1
                left-0
                h-[1px]
                w-0
                bg-white
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </span>

          <span
            className="
              text-lg
              md:text-xl
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          >
            ↗
          </span>
        </Link>
      </div>

    </div>

  </div>


  {/* ------------------------------------------------------- */}
  {/* THREE IMAGES */}
  {/* ------------------------------------------------------- */}

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-12
      gap-8
      md:gap-10
      items-start
    "
  >

    {/* IMAGE 1 */}
    <div className="md:col-span-4">

      <div className="w-full aspect-[4/5] overflow-hidden">

        <Image
          src="/images/img1.jpg"
          alt="Interior design project"
          width={800}
          height={1000}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
        />

      </div>

    </div>


    {/* IMAGE 2 */}
    <div className="md:col-span-4">

      <div className="w-full aspect-[4/5] overflow-hidden">

        <Image
          src="/images/img2.jpg"
          alt="Interior design project"
          width={800}
          height={1000}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
        />

      </div>

    </div>


    {/* IMAGE 3 */}
    <div className="md:col-span-4">

      <div className="w-full aspect-[4/5] overflow-hidden">

        <Image
          src="/images/img3.jpg"
          alt="Interior design project"
          width={800}
          height={1000}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
        />

      </div>

    </div>

  </div>

</section>

{/* --------------------------------------------------------- */}
{/* OUR SERVICES SECTION */}
{/* --------------------------------------------------------- */}

<section className="bg-[#F0E9E3] px-8 md:px-14 lg:px-20 py-28 md:py-36">

  {/* SECTION HEADING */}
  <div className="mb-20 md:mb-28">

    <p
      className="
        font-[family-name:var(--font-manrope)]
        text-[20px]
        md:text-[24px]
        leading-none
        tracking-[-0.03em]
        text-black
      "
    >
      Our
    </p>

    <h2
      className="
        font-[family-name:var(--font-manrope)]
        text-[52px]
        md:text-[72px]
        lg:text-[88px]
        leading-[0.9]
        tracking-[-0.06em]
        text-black
      "
    >
      Services
    </h2>

  </div>


  {/* ------------------------------------------------------- */}
  {/* SERVICES GRID */}
  {/* ------------------------------------------------------- */}

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-16
      md:gap-10
      lg:gap-20
    "
  >

    {/* ----------------------------------------------------- */}
    {/* RESIDENTIAL */}
    {/* ----------------------------------------------------- */}

    <div>

      <h3
        className="
          font-[family-name:var(--font-dm-sans)]
          text-base
          md:text-lg
          leading-tight
          text-black
        "
      >
        Residential
      </h3>

      <p
        className="
          mt-14
          max-w-[280px]
          font-[family-name:var(--font-dm-sans)]
          text-sm
          md:text-base
          leading-[1.6]
          text-[#6B625B]
        "
      >
        Spaces designed around how you live,
        bringing together comfort, character
        and thoughtful details.
      </p>

    </div>


    {/* ----------------------------------------------------- */}
    {/* OFFICE DESIGN */}
    {/* ----------------------------------------------------- */}

    <div>

      <h3
        className="
          font-[family-name:var(--font-dm-sans)]
          text-base
          md:text-lg
          leading-tight
          text-black
        "
      >
        Office
        <br />
        Design
      </h3>

      <p
        className="
          mt-14
          max-w-[280px]
          font-[family-name:var(--font-dm-sans)]
          text-sm
          md:text-base
          leading-[1.6]
          text-[#6B625B]
        "
      >
        Workspaces that balance productivity,
        identity and functionality while
        creating a better everyday experience.
      </p>

    </div>


    {/* ----------------------------------------------------- */}
    {/* PUBLIC SPACE DESIGN */}
    {/* ----------------------------------------------------- */}

    <div>

      <h3
        className="
          font-[family-name:var(--font-dm-sans)]
          text-base
          md:text-lg
          leading-tight
          text-black
        "
      >
        Public
        <br />
        Space Design
      </h3>

      <p
        className="
          mt-14
          max-w-[280px]
          font-[family-name:var(--font-dm-sans)]
          text-sm
          md:text-base
          leading-[1.6]
          text-[#6B625B]
        "
      >
        Thoughtful environments designed to
        connect people, create experiences
        and leave a lasting impression.
      </p>

    </div>

  </div>

</section>

{/* --------------------------------------------------------- */}
{/* ABOUT US SECTION */}
{/* --------------------------------------------------------- */}

<section className="bg-[#F0E9E3] px-8 md:px-14 lg:px-20 py-28 md:py-36">

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-12
      gap-12
      md:gap-16
      lg:gap-24
      items-center
    "
  >

    {/* ----------------------------------------------------- */}
    {/* LEFT - IMAGE */}
    {/* ----------------------------------------------------- */}

    <div className="md:col-span-6">

      <div className="relative w-full aspect-square overflow-hidden">

        <Image
          src="/images/img6.jpg"
          alt="Arco Living interior"
          fill
          className="
            object-cover
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
          sizes="(max-width: 768px) 100vw, 50vw"
        />

      </div>

    </div>


    {/* ----------------------------------------------------- */}
    {/* RIGHT - CONTENT */}
    {/* ----------------------------------------------------- */}

    <div className="md:col-span-6 lg:pl-8">

      {/* Heading */}
      <h2
        className="
          font-[family-name:var(--font-manrope)]
          text-[42px]
          md:text-[52px]
          lg:text-[64px]
          leading-[0.95]
          tracking-[-0.05em]
          text-black
        "
      >
        About Us
      </h2>


      {/* Content */}
      <p
        className="
          mt-12
          max-w-[500px]
          font-[family-name:var(--font-dm-sans)]
          text-sm
          md:text-base
          leading-[1.7]
          text-[#4F4944]
        "
      >
        We create spaces that feel personal, intentional and timeless.
        Every project is shaped around the people who experience it,
        bringing together thoughtful design, functionality and character.
      </p>


      {/* Learn More */}
      <div className="mt-12">

        <button
          className="
            group
            inline-flex
            items-center
            gap-5
            font-[family-name:var(--font-dm-sans)]
            text-base
            md:text-lg
            text-black
          "
        >

          {/* Text */}
          <span className="relative">

            Learn More

            <span
              className="
                absolute
                -bottom-1
                left-0
                h-[1px]
                w-0
                bg-black
                transition-all
                duration-300
                group-hover:w-full
              "
            />

          </span>


          {/* Arrow Circle */}
          <span
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-black/40
              text-lg
              transition-all
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </button>

      </div>

    </div>

  </div>

</section>

{/* --------------------------------------------------------- */}
{/* MATERIAL & ENGINEERING BANNER */}
{/* --------------------------------------------------------- */}

<section className="bg-[#161616] px-0 md:px-8 lg:px-14 py-0">

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-12
      min-h-[500px]
      md:min-h-[600px]
    "
  >

    {/* ----------------------------------------------------- */}
    {/* LEFT - IMAGE */}
    {/* ----------------------------------------------------- */}

    <div className="md:col-span-6 lg:col-span-7">

      <div className="relative w-full h-[420px] md:h-full min-h-[500px] overflow-hidden">

        <Image
          src="/images/img7.jpg"
          alt="Arco Living interior design"
          fill
          className="
            object-cover
          "
          sizes="(max-width: 768px) 100vw, 58vw"
        />

      </div>

    </div>


    {/* ----------------------------------------------------- */}
    {/* RIGHT - CONTENT */}
    {/* ----------------------------------------------------- */}

    <div
      className="
        md:col-span-6
        lg:col-span-5
        flex
        flex-col
        justify-center
        px-8
        py-16
        md:px-12
        lg:px-16
      "
    >

      {/* Heading */}
      <h2
        className="
          font-[family-name:var(--font-manrope)]
          text-[42px]
          sm:text-[48px]
          md:text-[52px]
          lg:text-[60px]
          leading-[1.05]
          tracking-[-0.05em]
          text-white
        "
      >
        Material
        <br />
        First.
        <br />
        Engineering
        <br />
        Underneath.
      </h2>


      {/* Description */}
      <p
        className="
          mt-12
          max-w-[400px]
          font-[family-name:var(--font-dm-sans)]
          text-sm
          md:text-base
          leading-[1.7]
          text-white/65
        "
      >
        Every space begins with the right materials and thoughtful
        engineering. We combine lasting craftsmanship with practical
        design to create spaces that are built to endure.
      </p>

    </div>

  </div>

</section>

<AnimatedTaglines />

{/* --------------------------------------------------------- */}
{/* NEWSLETTER SECTION */}
{/* --------------------------------------------------------- */}

<section className="bg-[#F0E9E3] px-6 md:px-10 lg:px-14 py-20 md:py-28">

  <div
    className="
      w-full
      border
      border-black/50
      bg-transparent
      px-8
      py-12
      md:px-12
      md:py-16
      lg:px-16
      lg:py-20
    "
  >

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

      {/* LEFT CONTENT */}
      <div>
        <h2
          className="
            font-[family-name:var(--font-manrope)]
            text-black
            text-[48px]
            md:text-[64px]
            lg:text-[72px]
            leading-[0.95]
            tracking-[-0.055em]
          "
        >
          First to hear
          <br />
          What’s Next
        </h2>
      </div>


      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-end">

        <p
          className="
            font-[family-name:var(--font-dm-sans)]
            text-black
            text-base
            md:text-lg
            leading-relaxed
            max-w-md
            mb-10
          "
        >
          Get the latest design ideas, projects and inspiration
          from Arco Living, straight to your inbox.
        </p>


        {/* EMAIL INPUT */}
        <form className="w-full max-w-xl">

          <div className="flex items-center border-b border-black/50 pb-3">

            <input
              type="email"
              placeholder="Your email"
              className="
                w-full
                bg-transparent
                outline-none
                border-none
                font-[family-name:var(--font-dm-sans)]
                text-black
                placeholder:text-black/60
                text-base
                md:text-lg
              "
            />

            <button
              type="submit"
              className="
                ml-4
                font-[family-name:var(--font-dm-sans)]
                text-black
                text-sm
                md:text-base
                transition-transform
                duration-300
                hover:translate-x-1
              "
            >
              ↗
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>

</section>


{/* --------------------------------------------------------- */}
{/* FOOTER */}
{/* --------------------------------------------------------- */}

<footer className="bg-[#F0E9E3] px-6 md:px-10 lg:px-14 pt-20 md:pt-28">

  {/* Main Footer */}
  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-12
      lg:gap-8
      pb-20
    "
  >

    {/* BRAND */}
    <div className="lg:col-span-2">

      <h2
        className="
          font-[family-name:var(--font-manrope)]
          text-black
          text-[52px]
          md:text-[72px]
          lg:text-[88px]
          font-bold
          leading-none
          tracking-[-0.06em]
        "
      >
        Arco Living
      </h2>

    </div>


    {/* EXPLORE */}
    <div>

      <p
        className="
          font-[family-name:var(--font-dm-sans)]
          text-xs
          uppercase
          tracking-[0.12em]
          text-black/50
          mb-6
        "
      >
        Explore
      </p>

      <div
        className="
          flex
          flex-col
          gap-3
          font-[family-name:var(--font-dm-sans)]
          text-sm
          text-black
        "
      >
        <a href="#" className="hover:opacity-50 transition-opacity">
          Home
        </a>

        <a href="#" className="hover:opacity-50 transition-opacity">
          Design Ideas
        </a>

        <a href="#" className="hover:opacity-50 transition-opacity">
          Projects
        </a>

        <a href="#" className="hover:opacity-50 transition-opacity">
          Magazine
        </a>

        <a href="#" className="hover:opacity-50 transition-opacity">
          About Us
        </a>
      </div>

    </div>


    {/* CONNECT */}
    <div>

      <p
        className="
          font-[family-name:var(--font-dm-sans)]
          text-xs
          uppercase
          tracking-[0.12em]
          text-black/50
          mb-6
        "
      >
        Connect
      </p>

      <div
        className="
          flex
          flex-col
          gap-3
          font-[family-name:var(--font-dm-sans)]
          text-sm
          text-black
        "
      >
        <a href="#" className="hover:opacity-50 transition-opacity">
          Instagram
        </a>

        <a href="#" className="hover:opacity-50 transition-opacity">
          LinkedIn
        </a>

        <a href="#" className="hover:opacity-50 transition-opacity">
          Pinterest
        </a>

        <a href="mailto:hello@arcoliving.com" className="hover:opacity-50 transition-opacity">
          Email
        </a>
      </div>

    </div>

  </div>


  {/* BOTTOM FOOTER */}
  <div
    className="
      border-t
      border-black/20
      py-6
      flex
      flex-col
      md:flex-row
      md:items-center
      md:justify-between
      gap-4
    "
  >

    <p
      className="
        font-[family-name:var(--font-dm-sans)]
        text-xs
        text-black/50
      "
    >
      © 2026 Arco Living. All rights reserved.
    </p>


    <div
      className="
        flex
        gap-6
        font-[family-name:var(--font-dm-sans)]
        text-xs
        text-black/50
      "
    >

      <a href="#" className="hover:text-black transition-colors">
        Privacy Policy
      </a>

      <a href="#" className="hover:text-black transition-colors">
        Terms & Conditions
      </a>

    </div>

  </div>

</footer>

    </main>
  );
} 