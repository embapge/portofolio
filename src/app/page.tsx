import { ServiceCard } from "@/components/Card/ServiceCard";
import { DM_Serif_Display, Inter_Tight } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  //   variable: "--font-dm-serif-display",
});

const interTight = Inter_Tight({
  weight: "600",
  //   variable: "--font-inter-tight",
});

export default function Home() {
  return (
    <>
      <div className="container overflow-hidden">
        <section
          className="w-screen h-screen mb-30 shadow-lg shadow-red-700/50"
          style={{
            backgroundImage: "url('/images/hero-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
          }}
        ></section>
        <section
          id="service"
          className={`flex flex-col items-center justify-center mb-20`}
        >
          <div className="service-title w-[300px]">
            <small className={`${interTight.className}`}>
              My <span className={`text-(--secondary)`}>Services</span>
            </small>
            <h2
              className={`${dmSerifDisplay.className} text-shadow-lg text-shadow-red-700`}
            >
              What I Do?
            </h2>
          </div>
        </section>
        <section className="w-[90vw] mx-auto">
          <ServiceCard />
        </section>
      </div>
    </>
  );
}
