export default function Contact() {
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=fasn004@email.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="kontak" className="py-24 border-t border-hairline text-center">
      <div className="flex items-baseline justify-center gap-4 mb-12">
        <span className="font-mono text-sm text-faint">04</span>
        <h2 className="font-display text-3xl font-medium">Kontak</h2>
      </div>
      <h2 className="font-display font-medium text-3xl md:text-5xl max-w-xl mx-auto mb-7">
        Ada proyek yang mau dikerjakan bareng?
      </h2>
      <p className="text-dim max-w-md mx-auto mb-10">
        Terbuka untuk kolaborasi, magang, dan pekerjaan freelance.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#"
          onClick={handleEmailClick}
          className="font-mono text-sm px-6 py-3 rounded bg-sage text-ink hover:bg-sage/80 transition"
        >
          fasn004@email.com
        </a>
        <a
          href="https://github.com/vooxza"
          className="font-mono text-sm px-6 py-3 rounded border border-hairline hover:border-dim hover:text-ivory transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/fabian-amadeus"
          className="font-mono text-sm px-6 py-3 rounded border border-hairline hover:border-dim hover:text-ivory transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
