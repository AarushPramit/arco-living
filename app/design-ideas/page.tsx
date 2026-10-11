import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function DesignIdeas() {
  return (
    <main className="bg-[#F0E9E3]">

      <Navbar />

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-120px)] lg:h-[calc(100vh-160px)]">

        <div className="relative w-full h-full overflow-hidden">

          <Image
            src="/images/design-ideas-hero.png"
            alt="Arco Living interior"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

        </div>

      </section>


      {/* ================================================= */}
      {/* OUR STUDIO */}
      {/* ================================================= */}

      <section className="bg-[#F0E9E3] px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* LEFT */}
          <div>

            <h2
              className="
                font-[family-name:var(--font-manrope)]
                text-5xl
                md:text-6xl
                lg:text-7xl
                leading-[0.95]
                tracking-[-0.05em]
                text-black
              "
            >
              Our Studio
            </h2>

          </div>


          {/* RIGHT */}
          <div className="space-y-20">

            <p
              className="
                font-[family-name:var(--font-dm-sans)]
                text-xl
                md:text-2xl
                leading-[1.35]
                text-black
                max-w-xl
              "
            >
              We create thoughtful interiors that bring together
              architecture, material, light and everyday living.
            </p>


            <p
              className="
                font-[family-name:var(--font-dm-sans)]
                text-base
                md:text-lg
                leading-[1.6]
                text-black
                max-w-xl
              "
            >
              Every space begins with understanding the people who
              inhabit it. From the smallest detail to the overall
              atmosphere, our approach is rooted in creating spaces
              that feel personal, timeless and distinctly yours.
            </p>

          </div>

        </div>

      </section>

      {/* --------------------------------------------------------- */}
{/* INSPIRATION SECTION */}
{/* --------------------------------------------------------- */}

<section className="bg-[#F0E9E3] px-6 md:px-10 lg:px-16 py-24 md:py-32">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

    {/* IMAGE */}
    <div className="relative w-full aspect-square overflow-hidden">
      <Image
        src="/images/inspiration.jpg"
        alt="Arco Living inspiration"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>

    {/* CONTENT */}
    <div className="flex flex-col justify-center">

      <h2
        className="
          font-[family-name:var(--font-manrope)]
          text-5xl
          md:text-6xl
          lg:text-7xl
          leading-[0.95]
          tracking-[-0.05em]
          text-black
        "
      >
        Inspiration
      </h2>

      <p
        className="
          mt-10
          max-w-md
          font-[family-name:var(--font-dm-sans)]
          text-base
          md:text-lg
          leading-relaxed
          text-black/80
        "
      >
        Spaces inspired by the way you live, designed with intention and shaped around the details that make a place feel like yours. From the textures you touch to the light that fills a room, every element is thoughtfully considered to create a balance between beauty, comfort, and function. We believe the most meaningful spaces are those that reflect your personality, evolve with you, and feel effortlessly at home.
      </p>

    </div>

  </div>

</section>

{/* --------------------------------------------------------- */}
{/* DARK IMAGE SHOWCASE */}
{/* --------------------------------------------------------- */}

<section className="w-full bg-[#161616] px-6 md:px-10 lg:px-16 py-16 md:py-20">

  {/* Three Images */}
  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
      md:gap-8
    "
  >

    {/* IMAGE 1 */}
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <Image
        src="/images/img1.jpg"
        alt="Arco Living interior"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>

    {/* IMAGE 2 */}
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <Image
        src="/images/img5.jpg"
        alt="Arco Living interior"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>

    {/* IMAGE 3 */}
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <Image
        src="/images/img6.jpg"
        alt="Arco Living interior"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
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