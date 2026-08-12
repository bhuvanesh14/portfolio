import { heroData } from "../data.jsx";

function Hero() {
  return (
    <section className="relative flex flex-col justify-center border-t border-gray-700 px-5 py-8 sm:px-8 md:px-16 md:py-16 lg:px-24 lg:min-h-screen">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[14px] text-gray-300 uppercase">
          {heroData.available[0].text}  · {heroData.available[0].workMode1} · {" "}
          {heroData.available[0].workMode2} · {heroData.available[0].workMode3}
        </p>
        <div className="md:w-[40%]">
            <h1 className="text-4xl md:text-5xl font-bold mt-12.5">
          {heroData.title}<span className="text-gradient">{heroData.name}</span>
        </h1>
        <p className="text-md text-gray-400 mt-2 break-all"> 
            {heroData.subtitle}</p>
        </div>
        <div className="mt-8 mb-10 md:mt-12">
            <ul className="flex flex-wrap gap-4 text-sm text-blue-400">
                {heroData.languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                ))}
            </ul>
        </div>
        <a href="#" className="mt-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">Let's talk →</a>
            <a
            href="/resume.pdf"
            download="Bhuvanesh_Srinivasan_Frontend_UI_Lead_Resume.pdf" className="mt-8 ml-4 border border-blue-500 text-white  px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">View Resume</a>
      </div>
    </section>
  );
}

export default Hero;
