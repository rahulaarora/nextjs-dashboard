import Image from "next/image";
const ProfilesGroup = (props) => {
    return (
        <div className="flex -space-x-3">
            <Image alt="Icon" src={"/images/avatar2.png"} width={props.dim} height={props.dim} className="rounded-full border-2 border-white" />
            <Image alt="Icon" src={"/images/avatar2.png"} width={props.dim} height={props.dim} className="rounded-full border-2 border-white" />
            <Image alt="Icon" src={"/images/avatar2.png"} width={props.dim} height={props.dim} className="rounded-full border-2 border-white" />
            {props.dim == 40 ? <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]">+5</p> : <p className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-[10px] font-medium text-[#606C80]">+5</p>}
            
        </div>
    );
}

export default ProfilesGroup;