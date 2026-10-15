
import React, { useEffect, useState } from "react";
import kalamJi from "../assets/kalamJi.png";
import isromis from "../../isro.json";

const About = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    setMissions(Array.isArray(isromis) ? isromis : []);
  }, []);

  return (
    <main className="min-h-screen bg-[#030712] text-white">

      {/* ABOUT HERO SECTION */}
      <section className="relative isolate min-h-[70vh] overflow-hidden
        bg-gradient-to-br from-slate-950 via-indigo-950 to-black">

        {/* Background glow */}
        <div className="absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_75%_30%,rgba(79,70,229,0.22),transparent_45%)]">
        </div>

        <div className="mx-auto grid min-h-[70vh] max-w-7xl
          grid-cols-1 items-center gap-10 px-6 py-14
          md:grid-cols-2 lg:px-12">

          {/* Text content */}
          <div className="order-2 md:order-1">
            <p className="mb-4 text-sm font-bold uppercase
              tracking-[0.3em] text-cyan-400">
              India's Space Journey
            </p>

            <h1 className="text-4xl font-black leading-tight
              sm:text-5xl lg:text-6xl">
              Dream Beyond
              <span className="mt-2 block text-indigo-400">
                The Universe
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8
              text-slate-300 sm:text-lg">
              Dr. APJ Abdul Kalam inspired generations to dream
              big and explore the unknown. Discover India's
              journey into space and the achievements of ISRO.
            </p>

            <a href="#isro-missions"
              className="mt-8 inline-block rounded-lg
              bg-indigo-600 px-7 py-3.5 font-bold
              text-white hover:bg-indigo-500">
              Explore ISRO Missions
            </a>
          </div>

          {/* Kalam image */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="w-full max-w-md overflow-hidden
              rounded-2xl border border-indigo-400/30
              bg-slate-900 shadow-2xl shadow-indigo-950/50">

              <img
                src={kalamJi}
                alt="Dr. APJ Abdul Kalam"
                className="h-[320px] w-full object-cover
                object-top sm:h-[420px]"
              />

              <div className="border-t border-white/10 p-5">
                <h2 className="text-xl font-bold">
                  Dr. APJ Abdul Kalam
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Scientist • Former President of India
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ISRO MISSIONS SECTION */}
      <section id="isro-missions" className="mx-auto max-w-7xl
        px-6 py-20 lg:px-12">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase
            tracking-[0.3em] text-cyan-400">
            India's Achievements
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            ISRO Space Missions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl
            leading-7 text-slate-400">
            Explore India's remarkable space missions,
            scientific discoveries and achievements.
          </p>
        </div>

        {/* Mission cards */}
        {missions.length > 0 ? (
          <div className="grid grid-cols-1 gap-7
            sm:grid-cols-2 lg:grid-cols-3">

            {missions.map((isro) => (
              <article
                key={isro.mission_id}
                className="overflow-hidden rounded-2xl
                border border-white/10 bg-gradient-to-b
                from-slate-900 to-[#080d1b]"
              >

                {/* Mission image */}
                <div className="h-52 overflow-hidden
                  bg-slate-800">
                  <img src={isro.image} alt="" />
                </div>

                {/* Mission information */}
                <div className="flex flex-col p-6">

                  <p className="text-xs font-bold uppercase
                    tracking-[0.2em] text-cyan-400">
                    {isro.program || "ISRO Programme"}
                  </p>

                  <h3 className="mt-3 text-xl font-bold
                    text-white">
                    {isro.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6
                    text-slate-300">
                    {isro.description}
                  </p>

                  <div className="mt-5 border-t
                    border-white/10 pt-4">
                    <h4 className="text-sm font-semibold
                      text-indigo-300">
                      Key Achievement
                    </h4>

                    <p className="mt-2 text-sm leading-6
                      text-slate-400">
                      {isro.achievements}
                    </p>
                  </div>

                </div>
              </article>
            ))}

          </div>
        ) : (
          <div className="rounded-2xl border border-white/10
            bg-slate-900/60 px-6 py-12 text-center">
            <h3 className="text-xl font-bold">
              No Missions Available
            </h3>
            <p className="mt-3 text-slate-400">
              Please check your isro.json file and mission data.
            </p>
          </div>
        )}
      </section>

    </main>
  );
};

export default About;
