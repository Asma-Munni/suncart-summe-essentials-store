"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);
  };

  console.log(watch("email"));
  console.log(watch("password"));


  {/*google signin */}
         const handleGoogleSignin = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
            });
            console.log(data, "Google Sign-in data");
        };

  return (

    
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-white">
      <div className="p-6 rounded-xl bg-amber-50 shadow-lg w-full max-w-md">
        <button className="btn w-full mt-3 bg-white border flex items-center justify-center gap-2 hover:bg-gray-100 transition mb-2" onClick={handleGoogleSignin} >
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="divider">OR</div>

        <h2 className="text-center text-3xl font-bold mb-6">
          Login your account
        </h2>

        <div className="divider"></div>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          {/* Email Field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>

            <input
              type="email"
              className="input w-full"
              placeholder="Type here email"
              {...register("email", {
                required: "Email field is required.",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Password Field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>

            <div className="relative">
              <input
                type={isShowPassword ? "text" : "password"}
                className="input w-full pr-10"
                placeholder="Type here password"
                {...register("password", {
                  required: "Password field is required.",
                })}
              />

              <span
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn w-full bg-amber-500 text-white mb-4">
            Login
          </button>
        </form>

        <div className="divider"></div>

        <p>
          Do not have an account?
          <Link className="text-amber-500 ml-1" href="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;