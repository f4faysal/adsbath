import Image from "next/image";
import HeroImg from "@/assets/AdsBath/Section.png"

export default function HeaderSection() {
  return (
    <header className="relative h-[80vh] bg-black">
      <Image
        src={HeroImg}
        alt="Cover"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <h1 className="text-white text-5xl font-bold">Waxy Flower</h1> */}
      </div>
    </header>
  );
}
