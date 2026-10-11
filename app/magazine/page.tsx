import Image from "next/image";
import Navbar from "@/components/Navbar";


export default function Magazine() {
  return (
    <main className="bg-[#F0E9E3]">

      {/* NAVBAR */}
      <Navbar />

      {/* --------------------------------------------------------- */}
      {/* MAGAZINE HERO */}
      {/* --------------------------------------------------------- */}

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

          {/* HERO IMAGE */}
          <Image
  src="/images/magazine-hero.png"
  alt="Arco Living Magazine"
  fill
  priority
  sizes="100vw"
  className="
    object-cover
    object-[20%_center]
    md:object-center
  "
/>

        </div>

      </section>

      
{/* MAGAZINE SECTION */}
<section className="bg-[#F0E9E3] px-6 md:px-14 lg:px-20 py-20 md:py-28">

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

    {/* Left Heading */}
    <div className="lg:col-span-6">
      <h2 className="
        font-[family-name:var(--font-manrope)]
        text-[52px]
        md:text-[72px]
        lg:text-[88px]
        leading-[0.95]
        tracking-[-0.06em]
        text-black
      ">
        Magazine
      </h2>
    </div>

    {/* Right Content */}
    <div className="lg:col-span-6 lg:pt-2">

      {/* First Content */}
      <p className="
        font-[family-name:var(--font-dm-sans)]
        text-lg
        md:text-xl
        lg:text-[28px]
        leading-relaxed
        text-black
        max-w-2xl
      ">
        Explore ideas, spaces, and perspectives that inspire thoughtful
        living. Discover design stories that bring together creativity,
        materials, and the details that make every space unique.
      </p>

      {/* Second Content */}
      <p className="
        mt-12
        md:mt-20
        lg:mt-24
        font-[family-name:var(--font-dm-sans)]
        text-base
        md:text-lg
        lg:text-[22px]
        leading-relaxed
        text-black
        max-w-2xl
      ">
        From timeless interiors to emerging trends, our magazine celebrates
        spaces shaped by individuality, intention, and the way we live.
      </p>

    </div>

  </div>

</section>



{/* INSPIRATION SECTION */}
<section className="bg-[#F0E9E3] pt-12 pb-0">

  {/* HEADING ALIGNED LEFT */}
  <div className="lg:col-span-6 pl-6 md:pl-10 lg:pl-24 mb-8 md:mb-12">
      <h2 className="
        font-[family-name:var(--font-manrope)]
        text-[52px]
        md:text-[72px]
        lg:text-[88px]
        leading-[0.95]
        tracking-[-0.06em]
        text-black
      ">
      Inspiration
    </h2>
  </div>

  {/* IMAGE: LEFT-ALIGNED WITH SPACE ON RIGHT */}
  <div className="relative ml-0 h-[55vh] min-h-[350px] w-[96%] overflow-hidden md:h-[75vh]">
    <Image
      src="/images/inspiration1.png"
      alt="Luxury coastal living room"
      fill
      priority
      sizes="96vw"
      className="object-cover object-center"
    />
  </div>

</section>



{/* INSPIRATION PHOTO GRID */}
<section className="bg-[#F0E9E3] px-5 py-12 md:px-16 md:py-16">

  {/* FIRST TWO IMAGES — ALIGNED */}
  <div className="grid grid-cols-2 items-start gap-5 md:gap-4">

    {/* IMAGE 1 */}
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          src="/images/img6.jpg"
          alt="Contemporary interior design"
          fill
          sizes="(max-width: 768px) 50vw, 45vw"
          className="object-cover"
        />
      </div>

      {/* TEXT BELOW IMAGE */}
      <div className="mt-4">
        <p className="font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.15em] text-[#8B7765]">
          01 / 02
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-dm-sans)] text-base text-black md:text-lg">
          Designed to Stay
        </h3>
      </div>
    </div>

    {/* IMAGE 2 */}
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          src="/images/img5.jpg"
          alt="Warm minimalist living space"
          fill
          sizes="(max-width: 768px) 50vw, 45vw"
          className="object-cover"
        />
      </div>

      {/* TEXT BELOW IMAGE */}
      <div className="mt-4">
        <p className="font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.15em] text-[#8B7765]">
          02 / 02
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-dm-sans)] text-base text-black md:text-lg">
          Warm Minimalism
        </h3>
      </div>
    </div>

    {/* IMAGE 3 - FULL LEFT ALIGNMENT */}
    <div className="relative mt-12 ml-[-4.5vw] h-[40vh] min-h-[280px] w-[96.5vw] overflow-hidden md:mt-16 md:h-[55vh]">
      <Image
        src="/images/img4.png"
        alt="Coastal contemporary interior design"
        fill
        sizes="96.5vw"
        className="object-cover object-center"
      />
    </div>
  </div>

</section>

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
