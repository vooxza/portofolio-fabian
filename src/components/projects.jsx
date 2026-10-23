const features = [
  "Upload dan pengelolaan foto serta video hasil acara sekolah",
  "Role admin/crew bisa menambah, mengedit, menghapus, dan mengatur dokumentasi",
  "Member dapat melihat dan mengunduh file yang dipilih dengan mudah",
  "Sistem berbasis folder, tanggal, dan kategori acara agar lebih rapi",
  "Tampilan seperti Google Drive khusus untuk kebutuhan dokumentasi sekolah",
];

export default function Projects() {
  return (
    <section id="proyek" className="py-24 border-t border-hairline">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-sm text-faint">03</span>
        <h2 className="font-display text-3xl font-medium">Proyek</h2>
      </div>
      <div className="bg-surface border border-hairline rounded-lg overflow-hidden grid md:grid-cols-2">
        <div className="p-11">
          <div className="font-mono text-[11px] uppercase tracking-wider text-sage mb-4">
            Proyek sekolah · RUSMEDIA
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-medium mb-4">
            RUSMEDIA
          </h3>
          <p className="text-dim text-sm mb-6 max-w-md">
            RUSMEDIA adalah aplikasi dokumentasi sekolah yang berfungsi sebagai
            pusat penyimpanan digital hasil foto dan video dari berbagai acara
            di SMK Raden Umar Said Kudus. Aplikasi ini dibuat untuk mempermudah
            admin/crew dalam mengelola dokumentasi serta member dalam melihat
            dan mengunduh hasil acara yang mereka butuhkan.
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {["Web App", "Role-based Access", "Gallery", "School Docs"].map(
              (t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-dim border border-hairline rounded px-3 py-1.5"
                >
                  {t}
                </span>
              ),
            )}
          </div>
          <ul className="font-mono text-sm text-dim border-t border-hairline">
            {features.map((f, i) => (
              <li key={f} className="flex gap-4 py-3 border-b border-hairline">
                <span className="text-faint min-w-[22px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-inkalt border-t md:border-t-0 md:border-l border-hairline p-11 flex flex-col justify-center gap-4">
          <span className="inline-flex items-center gap-2.5 font-mono text-xs text-dim border border-hairline rounded px-3.5 py-2.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-sage" /> Role: Admin/
            Crew — tambah, edit, hapus, kelola semua dokumentasi
          </span>
          <span className="inline-flex items-center gap-2.5 font-mono text-xs text-dim border border-hairline rounded px-3.5 py-2.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Role: Member —
            lihat dan unduh hasil dokumentasi pilihan
          </span>
          <span className="inline-flex items-center gap-2.5 font-mono text-xs text-dim border border-hairline rounded px-3.5 py-2.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-sage" /> Konsep: Google
            Drive sekolah untuk arsip acara dan kegiatan
          </span>
        </div>
      </div>
    </section>
  );
}
