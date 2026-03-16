function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-3/1 hidden md:inline-block relative">
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/src/assets/background.mp4" type="video/mp4" />
        </video>

        {/* BLUE GRADIENT */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/40 to-transparent"></div>
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#050C19]"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#050C19]/60 to-transparent"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center pl-24">
          <div className="max-w-xl text-left flex flex-col gap-6">
            {/* BADGE */}
            <div className="flex items-center gap-3 w-fit px-4 py-2 rounded-full border border-yellow-400/30 bg-blue-900/10 backdrop-blur">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span
                  className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></span>
                <span
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></span>
              </div>

              <span className="text-xs font-semibold text-yellow-300 tracking-widest">
                BUILT BY FILIPINOS, FOR PHILIPPINE LGUS
              </span>
            </div>

            {/* HEADLINE */}
            <div className="flex flex-col leading-none">
              <h1 className="text-7xl font-black text-white tracking-tight">
                DIGITIZING
              </h1>

              <h1 className="text-7xl font-black text-white tracking-tight">
                THE
              </h1>

              <h1 className="text-7xl font-black gradient-text tracking-tight">
                PHILIPPINES.
              </h1>
            </div>

            {/* TAGLINE */}
            <div className="flex gap-4 items-start mt-4">
              <div className="w-1 bg-yellow-400 self-stretch"></div>

              <div>
                <h3 className="text-blue-400 font-semibold text-lg">
                  One LGU, One Barangay, One Unified Vision.
                </h3>

                <p className="text-gray-300 text-sm mt-2 max-w-md">
                  In full compliance with <strong>Republic Act 12254</strong>.
                  We are building the secure, high-speed digital architecture
                  that connects every Filipino citizen to their local
                  government.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-w-105 w-[420px] flex flex-col items-center justify-center px-10"></div> */}
      <div className="min-w-105 w-full flex flex-col items-center justify-center px-10">
        <form className="w-full max-w-96 lg:w-96 flex flex-col items-center justify-center">
          <div className="flex flex-col text-left w-full pb-6">
            <h1 className="text-[16px] font-semibold">Welcome to the</h1>
            <h2 className="text-[30px] font-black bg-linear-to-t from-[#2600FF] via-[#7132a8] to-[#FF8400] to-75% bg-clip-text text-transparent">
              Digital Ecosystem
            </h2>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="text-sm underline" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
