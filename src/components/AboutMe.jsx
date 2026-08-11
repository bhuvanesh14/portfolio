import {aboutMeData} from "../data"

function AboutMe() {
  return (
    <section className="relative flex flex-col justify-center border-t border-gray-700 px-5 py-8 sm:px-8 md:px-16 md:py-16 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="max-w-4xl font-poppins text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mt-2"><span className="text-gradient">{aboutMeData.title}</span></h2>
        <p className="mt-8 max-w-2xl md:text-xl lg:text-2xl leading-relaxed text-muted-foreground md:text-xl">{aboutMeData.description}</p>
        <ul className="mt-12 grid gap-x-10 gap-y-4 font-poppins text-base text-foreground sm:grid-cols-2">
            {
                aboutMeData.experience.map((exp) => (
                    <li className="flex items-baseline gap-3 border-b border-b-red-500 pb-4"><span className="text-blue-500 font-bold mr-2">-</span> {exp}</li>
                ))
            }
        </ul>
      </div>
      </section>
  )
}

export default AboutMe