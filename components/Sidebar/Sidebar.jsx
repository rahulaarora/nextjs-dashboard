import Avatar from "../Common/Avatar";
import Image from "next/image";
const Sidebar = () => {
    return (
        <aside className="hidden lg:block min-h-full">
            <div className="flex flex-col min-h-full">
                <div className="flex flex-col">
                    <div className="border-b-[1px] border-l-[1px] border-[#E9EBF0] p-[33px]">
                        <Image alt="icon" src="/images/close.svg" width="21" height="21" className="cursor-pointer" />
                    </div>
                </div>

                <div className="min-h-[] flex flex-1 flex-col items-center justify-center gap-3 border-l-[1px] border-[#E9EBF0]">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>

                <div className="border-y-[1px] border-l-[1px] border-[#E9EBF0] p-[33px]">
                    <Image alt="icon" src="/images/arrow_forward.svg" width="21" height="21" className="cursor-pointer" />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;