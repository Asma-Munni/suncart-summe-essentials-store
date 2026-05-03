

"use client";

import React from 'react';
import { useSession, authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaUser, FaImage } from "react-icons/fa";


const UpdateProfilePage = () => {
  const { data: session, isLoading } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpdate = async () => {
    if (!name.trim() && !imageUrl.trim()) {
      toast.error("Please provide a name or image URL to update");
      return;
    }

    const { error } = await authClient.updateUser({
      name: name.trim() || session?.user?.name,
      image: imageUrl.trim() || session?.user?.image,
    });

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }

    toast.success("Profile updated successfully");
    router.push("/profile");
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
      </div>
    );

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-amber-50 p-6 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold">Update Profile</h1>

        <div>
          <label className="block text-sm font-medium mb-1 flex items-center gap-1">
            <FaUser className="text-amber-500" /> Name
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder={session?.user?.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 flex items-center gap-1">
            <FaImage className="text-amber-600" /> Image URL
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="https://your-image-url.com"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button
          onClick={handleUpdate}
          className="btn w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:bg-blue-600 transition"
        >
          Update Information
        </button>
      </div>
    </div>
  );
};
export default UpdateProfilePage;



