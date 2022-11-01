import Image from "next/image";

export default function GridImage({ image: { image, title } }) {
  return (
    <div>
      <Image width={400} height={300} src={image.slice(4, -1)} alt={title} />
    </div>
  );
}
