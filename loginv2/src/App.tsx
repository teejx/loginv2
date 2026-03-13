function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-3/1 hidden md:inline-block relative">
        <img
          src="/src/assets/login-bg.png"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-extrabold bg-linear-to-t from-zinc-400 via-zinc-400 to-zinc-300 to-90% bg-clip-text text-transparent tracking-tighter animate-slide-up">
              Built by Filipino, for Philippine LGU's
            </h1>
            <h1 className="text-9xl font-extrabold text-white tracking-tighter ">
              DIGITIZING THE
            </h1>

            <h1 className="gradient-text text-transparent text-9xl font-extrabold tracking-tighter ">
              PHILIPPINES
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form className="md:w-96 w-80 flex flex-col items-center justify-center ">
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
