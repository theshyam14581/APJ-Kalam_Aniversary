
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Alluser = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/students"
      );

      setContent(response.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const deleteHandler = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:3000/students/${id}`
      );

      setContent((prev) =>
        prev.filter((ele) => ele.id !== id)
      );

      alert("User deleted successfully!");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-hidden
      bg-[#030712] px-4 py-12 text-white sm:px-6 lg:px-10">

      {/* Cosmic background */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(ellipse_at_15%_15%,rgba(79,70,229,0.22),transparent_40%),radial-gradient(ellipse_at_90%_85%,rgba(8,145,178,0.14),transparent_35%)]">
      </div>

      {/* Static stars */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(white_1px,transparent_1px)]
        [background-size:45px_45px] opacity-15">
      </div>

      <section className="mx-auto max-w-7xl">

        {/* Page heading */}
        <div className="mb-10 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16
            items-center justify-center rounded-2xl
            border border-indigo-400/30 bg-indigo-500/10
            text-3xl">
            👨‍🚀
          </div>

          <p className="text-xs font-bold uppercase
            tracking-[0.3em] text-cyan-400">
            ShyamSpaceX • Mission Control
          </p>

          <h1 className="mt-3 text-3xl font-black
            sm:text-4xl lg:text-5xl">
            All <span className="text-indigo-400">Explorers</span>
          </h1>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Manage registered users and their information.
          </p>

        </div>

        {/* User count */}
        <div className="mb-5 flex flex-wrap items-center
          justify-between gap-4 rounded-xl border
          border-white/10 bg-slate-950/70 p-5">

          <div>
            <p className="text-sm text-slate-400">
              Registered Explorers
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              {content.length}
            </h2>
          </div>

          <Link
            to="/createusers"
            className="rounded-lg bg-indigo-600 px-5 py-3
              text-sm font-bold text-white hover:bg-indigo-500"
          >
            + Create User
          </Link>

        </div>

        {/* Table container */}
        <div className="overflow-hidden rounded-2xl
          border border-indigo-400/20 bg-slate-950/80
          shadow-2xl shadow-indigo-950/30">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[720px]
              border-collapse text-left text-sm">

              {/* Table header */}
              <thead className="bg-indigo-950/90
                text-xs uppercase tracking-wider text-indigo-200">

                <tr>
                  <th className="px-6 py-5 font-bold">ID</th>
                  <th className="px-6 py-5 font-bold">Name</th>
                  <th className="px-6 py-5 font-bold">Email</th>
                  <th className="px-6 py-5 font-bold">Age</th>
                  <th className="px-6 py-5 text-center font-bold">
                    Actions
                  </th>
                </tr>

              </thead>

              {/* Table body */}
              <tbody className="divide-y divide-white/10">

                {loading ? (
                  <tr>
                    <td colSpan="5"
                      className="px-6 py-12 text-center text-cyan-300">
                      Loading explorers...
                    </td>
                  </tr>
                ) : content.length > 0 ? (

                  content.map((ele, index) => (

                    <tr
                      key={ele.id ?? index}
                      className="bg-slate-950/30 hover:bg-indigo-500/10"
                    >

                      <td className="px-6 py-5 font-bold
                        text-cyan-400">
                        #{ele.id ?? index + 1}
                      </td>

                      <td className="px-6 py-5 font-semibold
                        text-white">
                        {ele.name}
                      </td>

                      <td className="px-6 py-5 text-slate-300">
                        {ele.email}
                      </td>

                      <td className="px-6 py-5 text-slate-300">
                        {ele.age}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center
                          justify-center gap-3">

                          <Link
                            to={`/updatedata/${ele.id}`}
                            className="rounded-lg border
                              border-cyan-400/30 bg-cyan-500/10
                              px-4 py-2 font-semibold text-cyan-300
                              hover:bg-cyan-500/20"
                          >
                            Edit
                          </Link>

                          <button
                            type="button"
                            onClick={() => deleteHandler(ele.id)}
                            className="rounded-lg border
                              border-red-400/30 bg-red-500/10
                              px-4 py-2 font-semibold text-red-300
                              hover:bg-red-500/20"
                          >
                            Delete
                          </button>

                        </div>
                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>
                    <td colSpan="5"
                      className="px-6 py-14 text-center">

                      <div className="text-4xl">🪐</div>

                      <h3 className="mt-4 text-lg font-bold text-white">
                        No Explorers Found
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        Create a new user to begin your mission.
                      </p>

                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

          {/* Table footer */}
          <div className="border-t border-white/10
            px-6 py-4 text-xs text-slate-500">
            SHYAMSPACEX <span className="mx-2 text-indigo-400">•</span>
            Explorer Management System
          </div>

        </div>

      </section>

    </main>
  );
};

export default Alluser;
