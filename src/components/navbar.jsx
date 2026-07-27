export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink/85 backdrop-blur-sm border-b border-hairline">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
        <a href="#" className="font-mono text-sm tracking-wide">
          fabian<span className="text-sage">.dev</span>
        </a>
        <ul className="hidden md:flex gap-8 font-mono text-sm text-dim">
          <li>
            <a href="#tentang" className="hover:text-ivory transition">
              tentang
            </a>
          </li>
          <li>
            <a href="#keahlian" className="hover:text-ivory transition">
              keahlian
            </a>
          </li>
          <li>
            <a href="#proyek" className="hover:text-ivory transition">
              proyek
            </a>
          </li>
          <li>
            <a href="#kontak" className="hover:text-ivory transition">
              kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
