import Image from "next/image";

export default function GridImage({ image }) {
  const { src, alt, width, height } = image;
  console.log(width);
  return (
    <Image
      width={width}
      height={height}
      src={src.medium}
      alt={alt}
      placeholder="blur"
      blurDataURL={src.tiny}
      quality={50}
    />
  );
}
