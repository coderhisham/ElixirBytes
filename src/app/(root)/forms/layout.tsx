import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-black">
      <section className="flex min-h-screen  flex-1 flex-col max-md:p-4  mx-auto w-full justify-center items-center">
        {children}
      </section>
    </main>
  );
};

export default Layout;
