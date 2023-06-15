import Image from "next/image";
import ProfilesGroup from "../Common/ProfilesGroup";
const BoardHeader = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-2 px-[16px] py-[28px] md:px-[36px] xl:flex-row">
            <div className="flex items-center gap-[24px]"><p className="text-3xl font-semibold text-[#1F2633]">Task Boards</p>
                <Image alt="arrow" src="/images/edit.svg" width="20" height="20" className="cursor-pointer" />
            </div>

            <div className="flex flex-wrap justify-center gap-[10px] md:gap-[24px] xl:gap-[32px]"><p className="cursor-pointer text-[11px] font-semibold text-[#3B82F6] underline decoration-[#3B82F6] decoration-1 underline-offset-8">Timeline</p><p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">Calendar</p><p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">Dashboard</p><p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">Progress</p><p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">Forms</p><p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">More</p></div>

            <div className="mt-2 flex items-center gap-2">
                <ProfilesGroup dim={40} />
                <Image alt="Icon" src="/images/add_button.svg" width="40" height="40" className="cursor-pointer" />
            </div>

        </div>
    );
}

export default BoardHeader;