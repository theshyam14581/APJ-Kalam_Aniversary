
import React from "react";
import rocket from "../assets/rocket.png";
import About from "./About"

const Home = () => {
  return (
    <main className="min-h-screen bg-[#030712] text-white">

      {/* HERO SECTION */}
      <section className="relative isolate min-h-[88vh] overflow-hidden
        bg-gradient-to-br from-[#020617] via-[#11112e] to-[#030712]">

        {/* Space background decoration */}
        <div className="absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_75%_25%,rgba(79,70,229,0.20),transparent_40%),radial-gradient(ellipse_at_20%_80%,rgba(14,165,233,0.12),transparent_35%)]">
        </div>

        {/* Static stars */}
        <div className="absolute inset-0 -z-10
          bg-[radial-gradient(white_1px,transparent_1px)]
          [background-size:45px_45px] opacity-20">
        </div>

        {/* Navbar */}
        <nav className="mx-auto flex max-w-7xl items-center
          justify-between px-6 py-6 lg:px-12">

          <a href="/" className="text-2xl font-black tracking-wider">
            <span className="text-indigo-400">SHYAM</span>SPACEX
          </a>

          <div className="hidden items-center gap-8 text-sm
            text-slate-300 md:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#explore" className="hover:text-white">Explore</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>

          <a href="#explore"
            className="rounded-full border border-indigo-400/60
            px-5 py-2 text-sm font-semibold text-indigo-200
            hover:bg-indigo-500/20">
            Explore Space
          </a>
        </nav>

        {/* Hero content */}
        <div id="home" className="mx-auto grid max-w-7xl
          grid-cols-1 items-center gap-10 px-6 pb-16 pt-8
          md:grid-cols-2 lg:px-12 lg:pb-24">

          {/* Left content */}
          <div className="order-2 md:order-1">
            <p className="mb-5 inline-flex items-center gap-2
              rounded-full border border-indigo-400/30
              bg-indigo-400/10 px-4 py-2 text-xs
              font-semibold uppercase tracking-[0.25em]
              text-indigo-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              Discover The Unknown
            </p>

            <h1 className="max-w-xl text-5xl font-black
              leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Explore The
              <span className="block text-indigo-400">
                Infinite
              </span>
              Universe.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8
              text-slate-300 sm:text-lg">
              Discover distant planets, mysterious galaxies
              and the wonders of deep space. Your journey
              beyond Earth begins here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#explore"
                className="rounded-lg bg-indigo-600 px-7 py-3.5
                font-bold text-white hover:bg-indigo-500">
                Start Exploring
              </a>

              <a href="#about"
                className="rounded-lg border border-white/20
                px-7 py-3.5 font-bold text-slate-200
                hover:bg-white/10">
                Discover More
              </a>
            </div>

            {/* Quick facts */}
            <div className="mt-12 grid max-w-md grid-cols-3
              gap-4 border-t border-white/10 pt-6">

              <div>
                <h3 className="text-2xl font-bold text-white">8</h3>
                <p className="mt-1 text-xs text-slate-400">
                  Planets
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">1</h3>
                <p className="mt-1 text-xs text-slate-400">
                  Solar System
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">∞</h3>
                <p className="mt-1 text-xs text-slate-400">
                  Possibilities
                </p>
              </div>
            </div>
          </div>

          {/* Right: Rocket */}
          <div className="order-1 flex min-h-[300px]
            items-center justify-center md:order-2 md:min-h-[500px]">

            <div className="relative flex h-[320px] w-full
              max-w-[440px] items-center justify-center
              rounded-full border border-indigo-400/10
              bg-indigo-500/5 sm:h-[430px]">

              {/* Planet decoration */}
              <div className="absolute right-8 top-10 h-16 w-16
                rounded-full bg-gradient-to-br from-orange-200
                via-orange-500 to-red-900 shadow-xl
                shadow-orange-500/20">
              </div>

              {/* Planet rings */}
              <div className="absolute bottom-12 left-8 h-24 w-24
                rounded-full border-[10px] border-cyan-400/20
                bg-gradient-to-br from-cyan-300 to-blue-800">
              </div>

              {/* Rocket image */}
              <img
                src={rocket}
                alt="Rocket exploring outer space"
                className="relative z-10 h-[280px] w-[260px]
                object-contain drop-shadow-[0_0_35px_rgba(99,102,241,0.35)]
                sm:h-[370px] sm:w-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section id="explore" className="mx-auto max-w-7xl
        px-6 py-20 lg:px-12">

        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase
            tracking-[0.3em] text-indigo-400">
            Beyond Our World
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Explore The Cosmos
          </h2>

          <p className="mx-auto mt-4 max-w-xl
            leading-7 text-slate-400">
            Every corner of space holds a new mystery.
            Choose your destination and begin discovering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6
          sm:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <article className="rounded-2xl border border-white/10
            bg-gradient-to-br from-indigo-950 to-slate-950 p-7">
            <div className="mb-5 flex h-14 w-14 items-center
              justify-center rounded-xl bg-indigo-500/15 text-3xl">
              🌌
            </div>
            <h3 className="text-xl font-bold">Galaxies</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Explore enormous collections of stars, gas,
              dust and mysterious cosmic structures.
            </p>
            <a href="#about" className="mt-5 inline-block
              font-semibold text-indigo-300 hover:text-white">
              Discover more →
            </a>
          </article>

          {/* Card 2 */}
          <article className="rounded-2xl border border-white/10
            bg-gradient-to-br from-blue-950 to-slate-950 p-7">
            <div className="mb-5 flex h-14 w-14 items-center
              justify-center rounded-xl bg-cyan-500/15 text-3xl">
              🪐
            </div>
            <h3 className="text-xl font-bold">Planets</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Learn about distant worlds, planetary rings
              and the fascinating planets in our solar system.
            </p>
            <a href="#about" className="mt-5 inline-block
              font-semibold text-cyan-300 hover:text-white">
              Discover more →
            </a>
          </article>

          {/* Card 3 */}
          <article className="rounded-2xl border border-white/10
            bg-gradient-to-br from-purple-950 to-slate-950 p-7">
            <div className="mb-5 flex h-14 w-14 items-center
              justify-center rounded-xl bg-purple-500/15 text-3xl">
              🚀
            </div>
            <h3 className="text-xl font-bold">Space Missions</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Discover spacecraft, launch technology and
              humanity's journey into outer space.
            </p>
            <a href="#about" className="mt-5 inline-block
              font-semibold text-purple-300 hover:text-white">
              Discover more →
            </a>
          </article>
        </div>
      </section>

      {/* ABOUT COMPONENT */}
      <div id="about">
        <About />
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-7
        text-center text-sm text-slate-500">
        © 2026 ShyamSpaceX. Explore beyond limits.
      </footer>
    </main>
  );
};

export default Home;
