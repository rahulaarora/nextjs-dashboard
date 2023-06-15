import Image from "next/image";
const Avatar = () => {
    return (
        <div className="relative">
            <Image alt="Avatar" src={"/images/avatar2.png"} width="35" height="35" className="cursor-pointer rounded-full" />
            <span className="absolute -top-2 left-6 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white">
                12
            </span>
            <span className="absolute bottom-0 left-6 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white">
            </span>
        </div>
    );
}

export default Avatar;