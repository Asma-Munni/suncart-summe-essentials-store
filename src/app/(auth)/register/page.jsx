"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    console.log(data, "data");

    const { email, name, photo, password } = data;
    console.log(email, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    console.log(res, error);

    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Signup successful");
    }
  };

  console.log(watch("email"));
  console.log(watch("password"));

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-white">
      <div className="p-4 mt-4 rounded-xl bg-amber-50 shadow-lg w-full max-w-md">
        <h2 className="text-center text-3xl font-bold mb-6">
          Register your account
        </h2>

        <div className="divider"></div>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          {/* Name Field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>

            <input
              type="text"
              className="input w-full"
              placeholder="Type here name"
              {...register("name", {
                required: "Name field is required.",
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </fieldset>

          {/* Photo URL Field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>

            <input
              type="text"
              className="input w-full"
              placeholder="Type here Photo URL"
              {...register("photo", {
                required: "Photo URL field is required.",
              })}
            />

            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </fieldset>

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

          {/* Password Field with Eye Icon */}
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
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-600"
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
            Register
          </button>
        </form>

        <p className="text-center">
          Already have an account?
          <Link className="text-amber-500 ml-1" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;