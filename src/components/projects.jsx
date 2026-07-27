const features = [
  "Riwayat transaksi dengan kartu pendapatan berbeda untuk admin & kasir",
  "Filter berdasarkan tanggal dan bulan, lengkap dengan pagination",
  "Fitur ekspor data riwayat transaksi",
  "Perbaikan alur keranjang dan checkout",
  "Pemilihan meja terhubung ke nama pelanggan",
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
            Proyek tim · sedang berjalan
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-medium mb-4">
            Aplikasi Kasir (POS)
          </h3>
          <p className="text-dim text-sm mb-6 max-w-md">
            Aplikasi point-of-sale untuk tugas kelompok, dibangun dengan
            Flutter dan terhubung ke backend Laravel. Mendukung dua peran
            pengguna dengan tampilan dan hak akses yang berbeda.
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {["Flutter", "GetX", "Laravel API"].map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-dim border border-hairline rounded px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
          <ul className="font-mono text-sm text-dim border-t border-hairline">
            {features.map((f, i) => (
              <li
                key={f}
                className="flex gap-4 py-3 border-b border-hairline"
              >
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
            <span className="w-1.5 h-1.5 rounded-full bg-sage" /> Role:
            Admin — kelola &amp; pantau
          </span>
          <span className="inline-flex items-center gap-2.5 font-mono text-xs text-dim border border-hairline rounded px-3.5 py-2.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Role:
            Kasir — transaksi harian
          </span>
          <span className="inline-flex items-center gap-2.5 font-mono text-xs text-dim border border-hairline rounded px-3.5 py-2.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-sage" /> Widget
            riwayat dipecah jadi modul terpisah
          </span>
        </div>
      </div>
    </section>
  );
}
