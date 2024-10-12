import Image from "next/image";

const SectionLogo = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(33, 65, 161, 0.20) 0%, rgba(215, 37, 203, 0.20) 100%)",
      }}
      className="w-full h-[126px] px-3 py-2 flex items-center justify-center lg:gap-10 gap-3"
    >
      <Image
        src="/expedia-grayscale.png"
        height={300}
        width={300}
        alt="mouse-pointer"
        className="h-[30px]  lg:h-[50px] lg:w-[150px] object-contain"
      />
      <Image
        src="/mouse-pointer.png"
        height={300}
        width={300}
        alt="mouse-pointer"
        className="h-1/2  lg:h-[100px] lg:w-[100px] object-contain"
      />
      <Image
        src="/shopify-grayscale.png"
        height={300}
        width={300}
        alt="mouse-pointer"
        className="h-[30px]  lg:h-[50px] lg:w-[140px] object-contain"
      />
    </div>
  );
};

export default SectionLogo;
