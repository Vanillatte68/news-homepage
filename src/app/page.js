import mainHeaderDesktop from "./images/image-web-3-desktop.jpg";
import mainHeaderMobile from "./images/image-web-3-mobile.jpg";
import news01Preview from "./images/image-retro-pcs.jpg";
import news02Preview from "./images/image-top-laptops.jpg";
import news03Preview from "./images/image-gaming-growth.jpg";

import Link from "next/link";
import Image from "next/image";

import Navhead from "./components/Navhead";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* nav header */}
      <header>
        <Navhead />
      </header>
      <main className="flex flex-col items-center justify-center md:items-start md:px-28 md:pb-28 px-8 pb-8 gap-8">
        {/* hero primary */}
        <article className="grid md:grid-cols-3 md:p-0 md:gap-y-10 gap-8">
          <Image
            className="md:col-span-2"
            src={mainHeaderDesktop}
            alt="main header"
          />
          <h1 className="text-6xl font-extrabold">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col gap-8 items-start">
            <p className="text-dark-grayish-blue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-red-primary font-bold tracking-[0.25rem] uppercase px-8 py-4 hover:bg-very-dark-blue hover:text-off-white">
              Read more
            </button>
          </div>
          <section className="flex flex-col md:row-span-2 md:row-start-1 md:col-start-3 p-8 bg-very-dark-blue text-grayish-blue md:m-0 mt-10 gap-8">
            <h2 className="text-orange-primary text-4xl font-bold">New</h2>
            <div>
              <h3 className="text-lg text-off-white font-bold mb-2 hover:text-orange-primary">
                <Link href="#">Hydrogen VS Electric Cars</Link>
              </h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <span className="border-t border-t-grayish-blue"></span>
            <div>
              <h3 className="text-lg text-off-white font-bold mb-2 hover:text-orange-primary">
                <Link href="#">The Downsides of AI Artistry</Link>
              </h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <span className="border-t border-t-grayish-blue"></span>
            <div>
              <h3 className="text-lg text-off-white font-bold mb-2 hover:text-orange-primary">
                <Link href="#">Is VC Funding Drying Up?</Link>
              </h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </section>
        </article>

        {/* hero secondary */}
        <article className="grid md:grid-cols-3 md:p-0 gap-6 md:mt-14 md:mb-0 my-10">
          <div className="grid grid-cols-2 gap-x-4 h-full">
            {/* image */}
            <Image
              className="row-span-3"
              src={news01Preview}
              alt="news01 preview"
            />
            <span className="text-red-primary text-5xl font-bold">01</span>
            <h3 className="text-xl font-extrabold hover:text-red-primary">
              <Link href="#">Reviving Retro PCs</Link>
            </h3>
            <p className="text-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 h-full">
            {/* image */}
            <Image
              className="row-span-3"
              src={news02Preview}
              alt="news02 preview"
            />
            <span className="text-red-primary text-5xl font-bold">02</span>
            <h3 className="text-xl font-extrabold hover:text-red-primary">
              <Link href="#">Top 10 Laptops of 2022</Link>
            </h3>
            <p className="text-dark-grayish-blue">
              Our best picks for various needs and budgets.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 h-full">
            {/* image */}
            <Image
              className="row-span-3"
              src={news03Preview}
              alt="news03 preview"
            />
            <span className="text-red-primary text-5xl font-bold">03</span>
            <h3 className="text-xl font-extrabold hover:text-red-primary">
              <Link href="#">The Growth of Gaming</Link>
            </h3>
            <p className="text-dark-grayish-blue">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </article>
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}
