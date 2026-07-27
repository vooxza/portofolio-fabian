const skills = [
  {
    num: "01",
    title: "Flutter",
    desc: "Membangun aplikasi lintas platform dengan struktur widget yang modular dan mudah dirawat.",
  },
  {
    num: "02",
    title: "Dart",
    desc: "Menulis logika aplikasi yang bersih, terstruktur, dan enak dibaca ulang oleh tim.",
  },
  {
    num: "03",
    title: "GetX",
    desc: "Mengatur alur data aplikasi — controller, binding, dan reactive state yang rapi.",
  },
  {
    num: "04",
    title: "UI/UX",
    desc: "Menata antarmuka agar enak dilihat sekaligus jelas dipakai — bukan sekadar tampil bagus.",
  },
  {
    num: "05",
    title: "Debugging",
    desc: "Menelusuri bug pada alur transaksi dan tampilan, lalu memperbaikinya tanpa merusak yang lain.",
  },
  {
    num: "06",
    title: "REST API",
    desc: "Menghubungkan aplikasi ke backend saat dibutuhkan.",
  },{
    num: "07",
    title: "HTML & CSS",
    desc: "Membuat halaman web statis yang rapi, responsif, dan mudah diakses.",
  },{
    num: "08",
    title: "JavaScript",
    desc: "Menambahkan interaktivitas pada halaman web, termasuk animasi dan validasi form.",
  },{
    num: "09",
    title: "React",
    desc: "Membangun antarmuka web yang dinamis dengan komponen yang bisa digunakan ulang.  ",
  },
];

export default function Skills() {
  return (
    <section id="keahlian" className="py-24 border-t border-hairline">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-sm text-faint">02</span>
        <h2 className="font-display text-3xl font-medium">Keahlian</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
        {skills.map((s) => (
          <div key={s.num} className="bg-ink hover:bg-inkalt transition p-8">
            <span className="block font-mono text-xs text-sage mb-3">
              {s.num}
            </span>
            <h4 className="font-display font-medium text-lg mb-2">
              {s.title}
            </h4>
            <p className="text-dim text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
