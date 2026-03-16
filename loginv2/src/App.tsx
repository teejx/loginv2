import { useState } from "react";
import { MdRadioButtonUnchecked, MdOutlineLock } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function App() {
  const [view, setView] = useState("login");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>_]/.test(password);

  const passwordValid = hasLength && hasUppercase && hasNumber && hasSpecial;

  const passwordsMatch = password === confirmPassword && confirmPassword !== "";

  return (
    <div className="flex min-h-screen">
      {/* HERO / VIDEO SIDE */}
      <div className="w-3/1 hidden md:inline-block relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="src/assets/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#050C19]"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#050C19]/60 to-transparent"></div>
        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex items-center pl-24">
          <div className="max-w-xl text-left flex flex-col gap-6">
            <div className="flex items-center gap-3 w-fit px-4 py-2 rounded-full border border-yellow-400/30 bg-blue-900/10 backdrop-blur">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <span className="text-xs font-semibold text-yellow-300 tracking-widest">
                BUILT BY FILIPINOS, FOR PHILIPPINE LGUS
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <h1 className="text-7xl font-black text-white">DIGITIZING</h1>
              <h1 className="text-7xl font-black text-white">THE</h1>
              <h1 className="text-7xl font-black gradient-text">
                PHILIPPINES.
              </h1>
            </div>
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
      {/* FORM SIDE */}
      <div className="min-w-105 w-full flex flex-col items-center justify-center px-10">
        {view === "login" ? (
          <form className="w-full max-w-96 lg:w-96 flex flex-col">
            <div className="flex flex-col text-left w-full pb-6">
              <h1 className="text-[16px] font-semibold">Welcome to the</h1>
              <h2 className="text-[30px] font-black bg-linear-to-t from-[#2600FF] via-[#7132a8] to-[#FF8400] bg-clip-text text-transparent">
                Digital Ecosystem
              </h2>
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300/60 h-12 rounded-lg px-6 text-sm mb-4"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300/60 h-12 rounded-lg px-6 text-sm mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="w-full flex items-center justify-between mt-6 text-gray-500">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="cursor-pointer" />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => setView("forgot")}
                className="text-blue-500 font-semibold text-sm hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="w-full max-w-96 lg:w-96 flex flex-col">
            {/* TITLE */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <MdOutlineLock />
              </div>

              <h1 className="text-xl font-semibold">Set Your Password</h1>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Create a strong, unique password to protect your city account.
            </p>
            {/* NEW PASSWORD */}
            <label className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
              NEW PASSWORD
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border border-gray-300/60 h-12 rounded-lg px-4 mb-4 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* CONFIRM PASSWORD */}
            <label className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300/60 h-12 rounded-lg px-4 mb-2 text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!passwordsMatch && confirmPassword && (
              <p className="text-red-500 text-xs mb-4">
                Passwords do not match
              </p>
            )}
            {/* PASSWORD REQUIREMENTS CARD */}
            <div className="border border-indigo-400 rounded-lg p-4 mb-6">
              <h3 className="text-xs font-semibold text-indigo-600 mb-3 tracking-widest">
                PASSWORD REQUIREMENTS
              </h3>

              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  {hasLength ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <MdRadioButtonUnchecked className="text-gray-400" />
                  )}
                  <span>At least 8 characters long</span>
                </li>

                <li className="flex items-center gap-2">
                  {hasUppercase ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <MdRadioButtonUnchecked className="text-gray-400" />
                  )}
                  <span>Include at least one CAPITAL letter</span>
                </li>

                <li className="flex items-center gap-2">
                  {hasNumber ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <MdRadioButtonUnchecked className="text-gray-400" />
                  )}
                  <span>Include at least one number</span>
                </li>

                <li className="flex items-center gap-2">
                  {hasSpecial ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <MdRadioButtonUnchecked className="text-gray-400" />
                  )}
                  <span>
                    Include at least one special character (e.g. #, _, ?)
                  </span>
                </li>
              </ul>
            </div>
            {/* SUBMIT BUTTON */}
            <button
              disabled={!passwordValid}
              className={`h-11 rounded-lg text-white shadow-lg
    ${passwordValid ? "bg-indigo-600" : "bg-gray-400 cursor-not-allowed"}`}
            >
              SET PASSWORD & CONTINUE
            </button>
            {/* BACK BUTTON */}
            <button
              type="button"
              onClick={() => setView("login")}
              className="mt-4 text-sm text-blue-500 hover:underline"
            >
              Back to login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
