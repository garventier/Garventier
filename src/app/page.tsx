export default function Home() {
  return (
    <main className="bg-[#F8F7F3] text-[#1F2937]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#F8F7F3]/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="font-serif tracking-[0.25em] text-[#09185D] text-xl">
            GARVENTIER
          </div>

          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.15em]">
            <a href="#about">About</a>
            <a href="#holdings">Holdings</a>
            <a href="#performance">Performance</a>
            <a href="#thesis">Thesis</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-[2px] bg-[#B8932C] mb-10"></div>

            <h1 className="font-serif text-[#09185D] text-6xl md:text-8xl leading-[0.9] font-light mb-10">
              We do not sell
              <br />
              convictions.
            </h1>

            <p className="text-xl leading-relaxed max-w-lg text-gray-700">
              Garventier Capital acquires ownership stakes in
              exceptional businesses and holds them permanently.
            </p>

            <button className="mt-12 uppercase tracking-[0.15em] text-[#B8932C] border-b border-[#B8932C] pb-1">
              Request a Conversation
            </button>
          </div>

          <div>
            <img
              src="/mountains.jpg"
              alt="Landscape"
              className="rounded-xl object-cover h-[600px] w-full"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-32">
        <div className="uppercase text-[#B8932C] tracking-[0.2em] text-sm mb-6">
          About Us
        </div>

        <h2 className="font-serif text-[#09185D] text-5xl mb-10">
          Capital without an exit horizon
        </h2>

        <div className="max-w-4xl text-xl leading-relaxed text-gray-700">
          <p>
            Garventier Capital acquires ownership stakes in
            exceptional businesses — public and private —
            and holds them permanently.
          </p>

          <p className="mt-8">
            We are not a fund with a vintage year. We are not
            optimizing for a carry event. We are building an
            institution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              n: "01",
              title: "Identify early",
              text: "Structural shifts before the market prices them.",
            },
            {
              n: "02",
              title: "Own with conviction",
              text: "Concentrated positions in businesses we understand deeply.",
            },
            {
              n: "03",
              title: "Hold indefinitely",
              text: "No exit timeline. No pressure to sell what compounds.",
            },
          ].map((item) => (
            <div
              key={item.n}
              className="bg-white/60 rounded-xl p-8 border border-gray-100"
            >
              <div className="text-[#B8932C] mb-4">{item.n}</div>

              <h3 className="font-medium text-2xl mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOLDINGS */}
      <section
        id="holdings"
        className="max-w-6xl mx-auto px-8 py-24 border-t border-gray-200"
      >
        <div className="uppercase text-[#B8932C] tracking-[0.2em] text-sm mb-6">
          Holdings
        </div>

        <h2 className="font-serif text-[#09185D] text-5xl mb-8">
          What we own
        </h2>

        <div className="space-y-8 mt-16">
          {[
            [
              "GEQ",
              "Concentrated public equities.",
              "Public Equities",
              "Active",
            ],
            [
              "GEQ II",
              "Long-duration public positions.",
              "Public Equities",
              "Active",
            ],
            [
              "Infrastructure Acquisitions",
              "Data, power, compute and connectivity.",
              "Private Subsidiaries",
              "In Formation",
            ],
          ].map((item) => (
            <div
              key={item[0]}
              className="grid md:grid-cols-4 gap-4 border-b border-gray-200 pb-8"
            >
              <div className="font-medium">{item[0]}</div>
              <div>{item[1]}</div>
              <div>{item[2]}</div>
              <div className="text-[#B8932C]">{item[3]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section
        id="performance"
        className="max-w-6xl mx-auto px-8 py-32"
      >
        <div className="uppercase text-[#B8932C] tracking-[0.2em] text-sm mb-6">
          Performance
        </div>

        <h2 className="font-serif text-[#09185D] text-5xl mb-12">
          Returns since inception
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border p-10">
            <div className="uppercase tracking-[0.15em] text-sm">
              GEQ — Flagship
            </div>

            <div className="font-serif text-[#09185D] text-6xl mt-6">
              2.92x
            </div>

            <div className="mt-4 text-gray-600">
              Since February 2022
            </div>

            <div className="mt-6 inline-block border border-[#B8932C] px-3 py-1 text-[#B8932C]">
              39.1% CAGR
            </div>
          </div>

          <div className="bg-white rounded-xl border p-10">
            <div className="uppercase tracking-[0.15em] text-sm">
              GEQ II
            </div>

            <div className="font-serif text-[#09185D] text-6xl mt-6">
              1.48x
            </div>

            <div className="mt-4 text-gray-600">
              Since January 2025
            </div>

            <div className="mt-6 inline-block border border-[#B8932C] px-3 py-1 text-[#B8932C]">
              34.5% CAGR
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section
        id="thesis"
        className="max-w-6xl mx-auto px-8 py-32 border-t border-gray-200"
      >
        <div className="uppercase text-[#B8932C] tracking-[0.2em] text-sm mb-6">
          Investment Thesis
        </div>

        <h2 className="font-serif text-[#09185D] text-5xl mb-10">
          Owning the foundation
        </h2>

        <p className="max-w-3xl text-xl leading-relaxed text-gray-700 mb-20">
          Every transformative era produces businesses that do
          not merely participate in the new order — they
          constitute it.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-medium text-2xl mb-4">
              AI Infrastructure
            </h3>
            <p>Semiconductors, compute and physical architecture.</p>
          </div>

          <div>
            <h3 className="font-medium text-2xl mb-4">
              Power & Energy
            </h3>
            <p>Generation and transmission capacity.</p>
          </div>

          <div>
            <h3 className="font-medium text-2xl mb-4">
              Data & Connectivity
            </h3>
            <p>Fiber, colocation and network infrastructure.</p>
          </div>

          <div>
            <h3 className="font-medium text-2xl mb-4">
              Mid-Market Take Privates
            </h3>
            <p>Permanent ownership of exceptional businesses.</p>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#09185D] text-white py-14 mt-24"
      >
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <div>
            <div className="tracking-[0.2em]">
              GARVENTIER
            </div>

            <div className="text-sm text-gray-300 mt-3">
              Holding exceptional businesses for the long term.
            </div>
          </div>

          <div className="text-sm text-gray-300">
            © 2026 Garventier Capital
          </div>
        </div>
      </footer>
    </main>
  );
}
