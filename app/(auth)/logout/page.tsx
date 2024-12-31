"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 2000);
  }, []);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain min-h-screen flex items-center justify-center py-5 md:py-10">
        <p className="text-center">Redirect logout.</p>
      </section>
    </>
  );
};

export default LogoutPage;
