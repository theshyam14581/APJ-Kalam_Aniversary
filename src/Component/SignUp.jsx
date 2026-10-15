
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Signup logic yahan add karna hai
    console.log({ name, email, contact, password });
  };

  return (
    <main className="relative isolate flex min-h-screen
      items-center justify-center overflow-hidden
      bg-[#030712] px-4 py-10 text-white">

      {/* Cosmic background */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(ellipse_at_15%_20%,rgba(79,70,229,0.24),transparent_40%),radial-gradient(ellipse_at_85%_80%,rgba(8,145,178,0.16),transparent_35%)]">
      </div>

      {/* Static stars */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(white_1px,transparent_1px)]
        [background-size:45px_45px] opacity-15">
      </div>

      {/* Signup card */}
      <section className="w-full max-w-lg rounded-2xl
        border border-indigo-400/25 bg-slate-950/85
        p-6 shadow-2xl shadow-indigo-950/40 sm:p-9">

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
            ShyamSpaceX • Join The Mission
          </p>

          <h1 className="mt-4 text-3xl font-black sm:text-4xl">
            Create <span className="text-indigo-400">Account</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Become an explorer and start your space journey.
          </p>
        </div>

        {/* Signup form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

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
              placeholder="Enter your full name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border
                border-white/10 bg-slate-900 px-4 py-3
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
              placeholder="explorer@example.com"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border
                border-white/10 bg-slate-900 px-4 py-3
                text-white placeholder:text-slate-500
                outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact"
              className="text-sm font-semibold text-slate-200">
              Contact Number
            </label>

            <input
              id="contact"
              name="contact"
              type="tel"
              placeholder="Enter your contact number"
              autoComplete="tel"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full rounded-lg border
                border-white/10 bg-slate-900 px-4 py-3
                text-white placeholder:text-slate-500
                outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password"
              className="text-sm font-semibold text-slate-200">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              autoComplete="new-password"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border
                border-white/10 bg-slate-900 px-4 py-3
                text-white placeholder:text-slate-500
                outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-500/20"
            />

            <p className="text-xs text-slate-500">
              Password must contain at least 8 characters.
            </p>
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
            Create Explorer Account →
          </button>

        </form>

        {/* Login link */}
        <div className="mt-7 border-t border-white/10 pt-6
          text-center">

          <p className="text-sm text-slate-400">
            Already have an account?
          </p>

          <Link
            to="/Login"
            className="mt-2 inline-block font-semibold
              text-cyan-400 hover:text-cyan-300"
          >
            Login Here →
          </Link>

        </div>

        <p className="mt-7 text-center text-xs
          tracking-wider text-slate-600">
          EXPLORE BEYOND LIMITS
        </p>

      </section>
    </main>
  );
};

export default SignUp;
