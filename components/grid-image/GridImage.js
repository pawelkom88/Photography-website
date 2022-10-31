import Image from "next/image";

export default function GridImage({ image: { image, title } }) {
  return (
    <div>
      <Image src={image} alt={title} />
    </div>
  );
}
