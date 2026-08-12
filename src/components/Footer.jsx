//import { useState } from 'react';

function Footer() {

  //const [scrollTop, setScrollTop] = useState(false);

  function handleScroll() {
    document.body.scrollTop = 0
      //setScrollTop();
  }


  return (
    <footer className="border-t border-gray-700">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-red md:flex-col lg:flex-row md:px-16 lg:px-24">
        <div className="text-center md:text-left">
          © 2026 Bhuvanesh Srinivasan. UI Lead Engineer • Lead Front-End Developer.
        </div>
        <div class="flex gap-4">
          <a
            href="mailto:bhuvaneshjayam1988@gmail.com"
            class="hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/bhuvanesh-srinivasan/"
            target="_blank"
            rel="noreferrer"
            class="hover:text-foreground"
          >
            LinkedIn<span class="sr-only"> (opens in a new tab)</span>
          </a>
          <a href="#top" onClick={handleScroll} class="hover:text-foreground">
            Back to top ↑
          </a>
          <a href="/privacy" class="hover:text-foreground">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
