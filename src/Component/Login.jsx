
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login logic yahan add karna hai
    console.log({ name, email, password });
  };

  return (
    <main className="relative isolate flex min-h-screen
      items-center justify-center overflow-hidden
      bg-[#030712] px-4 py-12 text-white">

      {/* Cosmic background */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(ellipse_at_20%_20%,rgba(79,70,229,0.24),transparent_40%),radial-gradient(ellipse_at_85%_80%,rgba(8,145,178,0.16),transparent_35%)]">
      </div>

      {/* Static stars */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(white_1px,transparent_1px)]
        [background-size:45px_45px] opacity-15">
      </div>

      {/* Login card */}
      <div className="w-full max-w-md rounded-2xl
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
            ShyamSpaceX • Mission Control
          </p>

          <h1 className="mt-4 text-3xl font-black sm:text-4xl">
            Welcome <span className="text-indigo-400">Back</span>
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Login to continue your space journey.
          </p>
        </div>

        {/* Login form */}
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
              placeholder="Enter your name"
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
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border
                border-white/10 bg-slate-900 px-4 py-3
                text-white placeholder:text-slate-500
                outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-indigo-600
              px-5 py-3.5 font-bold text-white
              hover:bg-indigo-500 focus:outline-none
              focus:ring-2 focus:ring-indigo-400
              focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Login to Mission Control →
          </button>

        </form>

        {/* Signup link */}
        <div className="mt-7 border-t border-white/10 pt-6
          text-center">

          <p className="text-sm text-slate-400">
            New to ShyamSpaceX?
          </p>

          <Link
            to="/Signup"
            className="mt-2 inline-block font-semibold
              text-cyan-400 hover:text-cyan-300"
          >
            Create New Account →
          </Link>

        </div>

        <p className="mt-7 text-center text-xs text-slate-600">
          EXPLORE BEYOND LIMITS
        </p>

      </div>
    </main>
  );
};

export default Login;
