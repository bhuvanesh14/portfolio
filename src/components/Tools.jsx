import { toolsData } from '../data';

function Tools() {
  return (
    <section className="relative flex flex-col justify-center border-t border-border px-5 py-24 sm:px-8 md:px-16 md:py-28 lg:px-24">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="max-w-4xl font-poppins text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mt-2 mb-2">
              <span className="text-gradient">{toolsData.title}</span>
            </h2>
            <p className="mb-8">{toolsData.description}</p>
            <div>
              <ul className="flex flex-wrap gap-4">
            {toolsData.lang.map((tools, index) => (
              <li key={index} className="flex flex-col items-center w-[15.5%] border rounded-md border-blue-700 gap-2 p-4">
                {tools.img && <img src={tools.img} alt={tools.title} width="80" className="p-2" />}
                <span className="uppercase">{tools.title}</span>
              </li>
            ))}
          </ul>
            </div>
          </div>
        </section>
  )
}

export default Tools