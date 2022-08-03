import Image from "next/image";
import { useRouter } from "next/router";

export interface ISSCore {
  image: any;
  heading: any;
  text: any;
}

const ShowScore = (props: ISSCore) => {
  const { image, heading, text } = props;
  const router = useRouter();

  return (
    <div className="h-80 w-full flex flex-col items-center justify-center">
      <Image src={image} alt="Emoji" width={100} height={100} />
      <h2 className="text-4xl mt-6 mb-2">{heading}</h2>
      <p className="text-xl mb-6">{text}</p>
      <button
        className="bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-xl px-5 py-2"
        onClick={() => router.push("/")}>
        Kembali ke Menu
      </button>
    </div>
  );
};

export default ShowScore;
