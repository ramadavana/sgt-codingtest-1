"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("../../pages/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center h-screen mx-auto animate-pulse">
      <p className="text-2xl font-bold">Coding Test 1</p>

      <p>Redirecting to Login Page in 3 seconds...</p>
    </div>
  );
};

export default Home;
