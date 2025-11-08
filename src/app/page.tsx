import { ServiceCard } from "@/components/Card/ServiceCard";

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
            <small>
              My <span className={`text-(--secondary)`}>Services</span>
            </small>
            <h2 className={`text-shadow-lg text-shadow-red-700`}>What I Do?</h2>
          </div>
        </section>
        <section className="w-[90vw] mx-auto">
          <ServiceCard />
        </section>
      </div>
    </>
  );
}
