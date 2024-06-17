import "./page.css";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-15">
      <div className="logo">
        <Image src="/images/ElixirBytes.png" width={50} height={50} alt="" />
        <div className="name">
          <h1>ElixirBytes</h1>
        </div>
      </div>
      <div className="soon">
        <h1>Coming Soon...</h1>
        <h3>Stay Tuned!!!</h3>
      </div>
    </main>
  );
}
