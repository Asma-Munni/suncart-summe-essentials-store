
"use client";

import React from 'react';
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaEnvelope } from "react-icons/fa";
const MyProfilePage = () => {
   const { data: session, isLoading } = useSession();

  console.log(session,"session")
  const avatarSrc =
    session?.user?.image &&
    typeof session.user.image === "string" &&
    session.user.image.startsWith("http") &&
    !session.user.image.includes("pngtree")
      ? session.user.image
      : "/assets/user.png";

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <span className="loading loading-spinner loading-lg text-amber-500"></span>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto p-6 mb-15">

      <h1 className="text-2xl font-bold mb-6 text-center">My Profile</h1>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md flex flex-col sm:flex-row gap-6 items-center border border-amber-500">

        <Image
          src={avatarSrc}
          alt="user"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />

        <div className="text-center sm:text-left">
  <h2 className="text-xl font-semibold flex items-center gap-2 justify-center sm:justify-start">
    <FaUser className="text-amber-500" />
    <span>{session?.user?.name}</span>
  </h2>
  <p className="text-gray-600 flex items-center gap-2 justify-center sm:justify-start mt-1">
    <FaEnvelope className="text-amber-500" />
    <span>{session?.user?.email}</span>
  </p>

  <Link
  href="/my-profile/update"
  className="inline-block mt-3 bg-amber-500 text-white px-4 py-2 rounded"
>
  Update Profile
</Link>
</div>

      </div>

    </div>
  );
};



export default MyProfilePage;




  