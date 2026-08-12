import { contactData } from "../data";

function Contact() {
  return (
    <section className="relative flex flex-col justify-center border-t border-gray-700 px-5 py-8 sm:px-8 md:px-16 md:py-16 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="max-w-4xl font-poppins text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mt-2">
          <span className="text-gradient">{contactData.title}</span>
        </h2>
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <p class="mt-6 max-w-xl text-sm text-muted-foreground md:text-xl lg:text-2xl">
          {contactData.description}
        </p>
        <div className="mt-12">
          <a
            href="mailto:bhuvaneshjayam1988@gmail.com"
            className="group inline-flex items-baseline gap-3 border-b-2 border-b-blue-700 font-display text-sm font-semibold transition hover:text-blue md:text-2xl lg:text-4xl"
          >
            {contactData.email}
            <span
              className="text-2xl transition group-hover:translate-x-1 md:text-4xl"
              aria-hidden="true"
            >
              →
            </span>
          </a>
          <div className="mt-10 mb-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-base">
            <a
              href="tel:+919789894414"
              className="text-muted-foreground hover:text-gray-300"
            >
              {contactData.mobile}
            </a>
            <a
              href="https://www.linkedin.com/in/bhuvanesh-srinivasan/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-gray-300"
            >
              /{contactData.name}
            </a>
          </div>
          
            <a
            href="/resume.pdf"
            download="Bhuvanesh_Srinivasan_Frontend_UI_Lead_Resume.pdf"
            className="mt-8 rounded-full border border-blue-500 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-blue-700 cursor-pointer hover:bg-blue-700"
          >
            View Resume
          </a>
          
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
