import { ExpData } from "../data";

export default function Experiences() {
  
  return (
    <section className="relative flex flex-col justify-center border-t border-gray-700 px-5 py-8 sm:px-8 md:px-16 md:py-16 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="max-w-4xl font-poppins text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mt-2">
          <span className="text-gradient">{ExpData.title}</span>
        </h2>
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <ol className="mt-14 space-y-14">
          <li>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl font-semibold leading-snug md:text-3xl flex-1">{ExpData.experience[0].designation} · 
                  <span className="text-blue">{ExpData.experience[0].company}</span></h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm text-red">
                  {ExpData.experience[0].joiningDate} - {ExpData.experience[0].endingDate}
                </span>
              </div>
              <ul className="mt-5 max-w-3xl space-y-3 text-base text-muted-foreground">

               {ExpData.experience[0].description.map((item) => (
                      <li className="flex gap-3 text-red" key={item}>
                  <span
                    className="mt-2.5 h-1.5 w-1 shrink-0 rounded-[1px] bg-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    {item}
                  </span>
                </li>
               ))}


                
              </ul>
            </div>
          </li>
           <li>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl font-semibold leading-snug md:text-3xl">{ExpData.experience[1].designation} · 
                  <span className="text-blue">{ExpData.experience[1].company}</span></h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm text-red">
                  {ExpData.experience[1].joiningDate} - {ExpData.experience[1].endingDate}
                </span>
              </div>
              <ul className="mt-5 max-w-3xl space-y-3 text-base text-muted-foreground">

               {ExpData.experience[1].description.map((item) => (
                      <li className="flex gap-3 text-red" key={item}>
                  <span
                    className="mt-2.5 h-1.5 w-1 shrink-0 rounded-[1px] bg-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    {item}
                  </span>
                </li>
               ))}


                
              </ul>
            </div>
          </li>
          <li>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="flex flex-col md:flex-col lg:flex-row items-left lg: font-display text-2xl font-semibold leading-snug md:text-3xl">{ExpData.experience[2].designation} · 
                  <span className="text-blue">{ExpData.experience[2].company}</span></h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm text-red">
                  {ExpData.experience[2].joiningDate} - {ExpData.experience[2].endingDate}
                </span>
              </div>
              <ul className="mt-5 max-w-3xl space-y-3 text-base text-muted-foreground">

               {ExpData.experience[2].description.map((item) => (
                      <li className="flex gap-3 text-red" key={item}>
                  <span
                    className="mt-2.5 h-1.5 w-1 shrink-0 rounded-[1px] bg-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    {item}
                  </span>
                </li>
               ))}


                
              </ul>
            </div>
          </li>
          <li>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl font-semibold leading-snug md:text-3xl">{ExpData.experience[3].designation} · 
                  <span className="text-blue">{ExpData.experience[3].company}</span></h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm text-red">
                  {ExpData.experience[3].joiningDate} - {ExpData.experience[3].endingDate}
                </span>
              </div>
              <ul className="mt-5 max-w-3xl space-y-3 text-base text-muted-foreground">

               {ExpData.experience[3].description.map((item) => (
                      <li className="flex gap-3 text-red" key={item}>
                  <span
                    className="mt-2.5 h-1.5 w-1 shrink-0 rounded-[1px] bg-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    {item}
                  </span>
                </li>
               ))}


                
              </ul>
            </div>
          </li>
          <li>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl font-semibold leading-snug md:text-3xl">{ExpData.experience[4].designation} · 
                  <span className="text-blue">{ExpData.experience[4].company}</span></h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm text-red">
                  {ExpData.experience[4].joiningDate} - {ExpData.experience[4].endingDate}
                </span>
              </div>
              <ul className="mt-5 max-w-3xl space-y-3 text-base text-muted-foreground">

               {ExpData.experience[4].description.map((item) => (
                      <li className="flex gap-3 text-red" key={item}>
                  <span
                    className="mt-2.5 h-1.5 w-1 shrink-0 rounded-[1px] bg-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    {item}
                  </span>
                </li>
               ))}


                
              </ul>
            </div>
          </li>
          <li>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl font-semibold leading-snug md:text-3xl">{ExpData.experience[5].designation} · 
                  <span className="text-blue">{ExpData.experience[5].company}</span></h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm text-red">
                  {ExpData.experience[5].joiningDate} - {ExpData.experience[5].endingDate}
                </span>
              </div>
              <ul className="mt-5 max-w-3xl space-y-3 text-base text-muted-foreground">

               {ExpData.experience[5].description.map((item) => (
                      <li className="flex gap-3 text-red" key={item}>
                  <span
                    className="mt-2.5 h-1.5 w-1 shrink-0 rounded-[1px] bg-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    {item}
                  </span>
                </li>
               ))}


                
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
