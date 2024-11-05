import Image from "next/image";
import Products from "./_components/products";
import Header from "./_components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
}
