
import React, { useState } from "react";
import axios from "axios";

const CreateUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const btnhandle = async (e) => {
    e.preventDefault();

    const payload = { name, email, age: Number(age) };

    try {
      await axios.post(
        "http://localhost:3000/students",
        payload
      );

      alert("User created successfully!");

      setName("");
      setEmail("");
      setAge("");
    } catch (err) {
      console.error(err);
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <main className="relative isolate flex min-h-screen w-full
      items-center justify-center overflow-hidden
      bg-[#030712] px-4 py-12 text-white">

      {/* Space background */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(ellipse_at_20%_20%,rgba(79,70,229,0.22),transparent_40%),radial-gradient(ellipse_at_85%_80%,rgba(8,145,178,0.15),transparent_35%)]">
      </div>

      {/* Static stars */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(white_1px,transparent_1px)]
        [background-size:45px_45px] opacity-15">
      </div>

      {/* Form container */}
      <div className="w-full max-w-lg rounded-2xl
        border border-indigo-400/25 bg-slate-950/80
        p-6 shadow-2xl shadow-indigo-950/40
        sm:p-9">

        {/* Header */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16
            items-center justify-center rounded-2xl
            border border-indigo-400/30 bg-indigo-500/10
            text-3xl">
            🚀
          </div>

          <p className="text-xs font-bold uppercase
            tracking-[0.3em] text-cyan-400">
            ShyamSpaceX • Mission Control
          </p>

          <h1 className="mt-3 text-3xl font-black
            tracking-tight sm:text-4xl">
            Create <span className="text-indigo-400">User</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Register a new explorer for the next mission.
          </p>
        </div>

        {/* User form */}
        <form onSubmit={btnhandle} className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name"
              className="text-sm font-semibold text-slate-200">
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border
                border-white/10 bg-slate-900/80 px-4 py-3
                text-white placeholder:text-slate-500
                outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email"
              className="text-sm font-semibold text-slate-200">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="explorer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border
                border-white/10 bg-slate-900/80 px-4 py-3
                text-white placeholder:text-slate-500
                outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col gap-2">
            <label htmlFor="age"
              className="text-sm font-semibold text-slate-200">
              Age
            </label>

            <input
              id="age"
              name="age"
              type="number"
              required
              min="1"
              max="120"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-lg border
                border-white/10 bg-slate-900/80 px-4 py-3
                text-white placeholder:text-slate-500
                outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full rounded-lg
              bg-indigo-600 px-5 py-3.5 font-bold text-white
              hover:bg-indigo-500 focus:outline-none
              focus:ring-2 focus:ring-indigo-400
              focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Create Explorer →
          </button>

        </form>

        {/* Footer */}
        <div className="mt-7 border-t border-white/10 pt-5
          text-center">
          <p className="text-xs text-slate-500">
            SHYAMSPACEX
            <span className="mx-2 text-indigo-400">•</span>
            Explore Beyond Limits
          </p>
        </div>

      </div>
    </main>
  );
};

export default CreateUsers;
