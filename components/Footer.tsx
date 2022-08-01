import Link from "next/link";
import { TbHeart } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="flex justify-center mb-4">
      <p className="flex items-center">
        Made with <TbHeart className="mx-1" />{" "}
        <Link href="http://yelink.vercel.app">
          <a className="border-b-black">yellchan</a>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
