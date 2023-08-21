"use client";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex flex-col md:mx-[144px] md:my-[460px] md:p-0 py-40 px-5 md:items-start items-center text-xl ">
        <p className="flex flex-row my-4 font-montserrat my-auto text-[12px] font-[400] leading-[14.63px] text-xl">
          Signed in with username{" "}
          <p className="px-4 bg-blue-600 rounded-md text-white mx-4 px-4 py-1">
            {session.user.name}
          </p>
        </p>
        <Link
          href="/dashboard"
          className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800 hover:ring-4 hover:ring-gray-700 transition delay-50 my-4"
        >
          View Dashboard
        </Link>
        <button
          className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800 hover:ring-4 hover:ring-gray-700 transition delay-50 my-4"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:mx-[244px] md:my-[260px] md:p-0 py-40 px-5 md:items-start items-center">
      <p className="h-[44px] w-[131px] text-[36px] font-[700] font-montserrat leading-[43.3px]">
        Sign In
      </p>
      <p className="font-lato leading-[19.2px] text-left">
        Sign in to your account
      </p>
      <div className="flex flex-row md:w-[385px] w-fit my-[26px] md:justify-between">
        <button
          type="button"
          onClick={() => signIn()}
          className="flex flex-row justify-center md:w-[180px] h-[30px] md:bg-white md:rounded-[10px] hover:bg-gray-200 transition delay-50"
        >
          <FcGoogle className="w-[14-px] h-[14px] my-auto" />
          <p className=" hidden md:block w-[118px] h-[15px] font-montserrat my-auto text-[12px] font-[400] leading-[14.63px] text-[#858585] md:ml-[10px]">
            Sign in with Google
          </p>
        </button>
        <button
          type="button"
          onClick={() => signIn()}
          className="flex flex-row justify-center md:w-[180px] h-[30px] md:bg-white md:rounded-[10px] hover:bg-gray-200 transition delay-50"
        >
          <AiFillApple className="w-[14-px] h-[14px] my-auto text-gray-400" />
          <p className="hidden md:block  w-[118px] h-[15px] font-montserrat my-auto text-[12px] font-[400] leading-[14.63px] text-[#858585] md:ml-[10px]">
            Sign in with Apple
          </p>
        </button>
      </div>
      <div className="md:w-[385px] w-[340px]  h-[317px] bg-white rounded-[20px] md:p-0 p-4">
        <div className="flex flex-col md:p-[30px]">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-lato font-[400] text-[16px] leading-[19.2px]"
            >
              Email address
            </label>
            <input
              id="email"
              type="text"
              className="focus:outline-none focus:ring-0 bg-[#F5F5F5] md:w-[325px] h-[40px] w-[280px] rounded-[10px] pl-[15px] font-lato font-[400] text-[16px] leading-[19.2px] my-[10px]"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="pw"
              className="font-lato font-[400] text-[16px] leading-[19.2px] mt-[10px]"
            >
              Password
            </label>
            <input
              id="pw"
              type="password"
              className="focus:outline-none focus:ring-0 bg-[#EAEAEA] md:w-[325px] h-[40px] w-[280px] rounded-[10px] pl-[15px] font-lato font-[400] text-[16px] leading-[19.2px] my-[10px]"
              placeholder="............."
            />
          </div>
          <button
            type="button"
            onClick={() => signIn()}
            className="font-lato font-[400] text-[16px] leading-[19.2px] mt-[10px] text-[#346BD4] text-left my-[10px]"
          >
            Forgot Password?
          </button>
          <button
            type="button"
            onClick={() => alert("Yet to implement")}
            className="font-montserrat font-[700] text-[16px] leading-[19.5px] mt-[10px] text-white my-[10px] bg-black md:w-[325px] h-[40px] rounded-[10px] hover:bg-gray-800 transition delay-50"
          >
            Sign In
          </button>
        </div>
      </div>
      <p className="font-lato font-[400] text-[16px] leading-[19.2px] text-center text-[#858585] mt-[20px]">
        Don’t have an account?{" "}
        <button onClick={() => signIn()} className="text-[#346BD4]">
          Register here
        </button>
      </p>
    </div>
  );
};
export default Login;
