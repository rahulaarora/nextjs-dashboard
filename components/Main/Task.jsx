import Image from "next/image";
import TaskTag from "./TaskTag";
import ProfilesGroup from "../Common/ProfilesGroup";
const Task = () => {
    return (
        <div className="flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm">
            <div className="flex items-start justify-between gap-2">
                <p className="text-[12px] font-medium text-[#1F2633]">Model Answer</p>
                <div className="flex w-12 items-center justify-end gap-2">
                    <Image alt="Icon" src="/images/task.svg" width="20" height="20" className="cursor-pointer" />
                    <p className="text-[10px] font-bold text-[#33BFFF]">4</p>
                </div>
            </div>

            <div className="flex items-center gap-1">
                <TaskTag />
                <TaskTag />
                <TaskTag />
            </div>

            <div className="flex items-center justify-between">
                <ProfilesGroup dim={32}/>
                <div className="flex items-center gap-1.5">
                    <Image alt="Icon" src="/images/file_present.svg" width="20" height="20" className="cursor-pointer" /><p className="text-[10px] font-bold text-[#33BFFF]">4</p>
                    <Image alt="Icon" src="/images/message.svg" width="20" height="20" className="cursor-pointer" />
                    <p className="text-[10px] font-bold text-[#33BFFF]">4</p>
                </div>
            </div>
        </div>
    );
}

export default Task;