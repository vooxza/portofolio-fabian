export default function Hero() {
  return (
    <section className="py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <div className="flex items-center gap-2 font-mono text-sm text-sage mb-5">
          <span className="w-6 h-px bg-sage" />
          $ whoami
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.02] tracking-tight mb-4">
          Fabian.
        </h1>
        <p className="font-display italic text-xl md:text-2xl text-dim mb-6">
          Flutter Developer &amp; Software Engineer
        </p>
        <p className="text-dim max-w-md mb-9">
          Membangun aplikasi mobile dari sisi antarmuka sampai integrasi API —
          rapi di kode, jelas di alur data, dan enak dipakai di tangan
          pengguna.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#proyek"
            className="font-mono text-sm px-6 py-3 rounded bg-sage text-ink hover:bg-sage/80 transition"
          >
            Lihat proyek
          </a>
          <a
            href="#kontak"
            className="font-mono text-sm px-6 py-3 rounded border border-hairline hover:border-dim hover:text-ivory transition"
          >
            Hubungi saya
          </a>
        </div>
      </div>

      <div className="bg-surface border border-hairline rounded-lg overflow-hidden shadow-2xl shadow-black/40">
        <div className="flex gap-2 px-4 py-3 bg-inkalt border-b border-hairline">
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
        </div>
        <div className="p-5 font-mono text-sm text-dim leading-relaxed min-h-[200px]">
          <p>
            <span className="text-gold">$</span> cat profil.txt
          </p>
          <p className="text-ivory mb-3">
            Flutter developer, fokus di aplikasi
            <br />
            mobile dengan state management GetX
            <br />
            dan integrasi REST API.
          </p>
          <p>
            <span className="text-gold">$</span> cat stack.txt
          </p>
          <p className="text-ivory mb-3">
            Flutter · Dart · GetX
            <br />
            REST API · Laravel
          </p>
          <p>
            <span className="text-gold">$</span>{" "}
            <span className="inline-block w-[7px] h-[15px] bg-sage align-text-bottom animate-blink" />
          </p>
        </div>
      </div>
    </section>
  );
}
