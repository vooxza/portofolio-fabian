export default function About() {
  return (
    <section id="tentang" className="py-24 border-t border-hairline">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-sm text-faint">01</span>
        <h2 className="font-display text-3xl font-medium">Tentang</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 text-dim">
        <p>
          Saya <strong className="text-ivory font-medium">Fabian</strong>,
          seorang{" "}
          <strong className="text-ivory font-medium">
            Flutter developer
          </strong>{" "}
          yang senang membangun aplikasi mobile dari nol — mulai dari
          struktur state management, alur navigasi, sampai bagaimana
          aplikasi itu bicara dengan backend.
        </p>
        <p>
          Selain menulis fitur baru, saya juga terbiasa merapikan kode yang
          sudah ada — memecah widget jadi modul yang lebih kecil, memperbaiki
          alur yang bikin bingung, sampai membenahi detail tampilan yang
          sering luput seperti format tanggal atau ukuran teks.
        </p>
        <p>
          Belakangan ini banyak berkutat dengan aplikasi berbasis{" "}
          <strong className="text-ivory font-medium">GetX</strong> yang
          terhubung ke{" "}
          <strong className="text-ivory font-medium">REST API Laravel</strong>
          , termasuk menangani peran pengguna yang berbeda, filtering data,
          dan hal-hal kecil yang bikin sebuah aplikasi terasa selesai —
          bukan cuma jalan.
        </p>
        <p>
          Sebagian besar pengalaman ini datang dari mengerjakan proyek
          bersama tim — belajar membagi modul, menjaga kode tetap konsisten,
          dan berkomunikasi soal keputusan teknis supaya semua orang di tim
          bisa jalan di arah yang sama.
        </p>
      </div>
    </section>
  );
}
