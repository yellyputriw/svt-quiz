import { useRouter } from "next/router";
import { menu } from "../utils/menu";
import { TbClick, TbKeyboard } from "react-icons/tb";
import Image from "next/image";

const MenuList = () => {
  const router = useRouter();
  return (
    <div className=" w-full mt-5">
      <ul className="mx-auto flex flex-col justify-center max-w-xs ">
        {menu.map((menu) => (
          <li
            key={menu.id}
            className=" bg-neutral-50/50 mb-10 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-xl ">
            <button
              onClick={() => router.push(menu.target)}
              className="w-full flex justify-between items-center px-5 py-4 relative">
              <div>
                <div className="rounded-full bg-white p-2 text-black w-fit mb-2">
                  {menu.category === "PG" ? <TbClick /> : <TbKeyboard />}
                </div>
                <h2 className="text-xl text-left">{menu.title}</h2>
              </div>
              <div className="absolute -top-12 right-4">
                <Image
                  src={menu.img}
                  alt={menu.title}
                  width={120}
                  height={120}
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
