
import { skillsData } from '../data';
function Skills() {
  return (
    <section className="relative flex flex-col justify-center border-t border-border px-5 py-24 sm:px-8 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="max-w-4xl font-poppins text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mt-2 mb-2">
          <span className="text-gradient">{skillsData.title}</span>
        </h2>
        <p className="mb-8">{skillsData.description}</p>
        <div>
          <ul className="flex flex-wrap justify-center gap-4">
        {skillsData.lang.map((skill, index) => (
          <li key={index} className="flex flex-col items-center w-[18.3%] border rounded-md border-blue-700 gap-2 p-4">
            {skill.img && <img src={skill.img} alt={skill.title} width="80" className="p-2" />}
            <span className="uppercase">{skill.title}</span>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
