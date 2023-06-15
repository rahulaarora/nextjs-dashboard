import Task from "./Task";
import Image from "next/image";
const Board = () => {
    return (
        <div>
            <div className="flex items-center justify-between pb-[28px]">
                <div className="flex items-center justify-between gap-3">
                    <p className="text-[14px] font-medium">Backlog Tasks</p>
                    <p className="bg-[#CA8A04] text-[#CA8A04] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold">5</p>
                </div>
                <div>
                    <Image alt="Icon" src="/images/more_horiz.svg" width="20" height="20" className="cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <div className="flex justify-center rounded-lg bg-white py-1 drop-shadow-sm"><Image alt="Icon" src="/images/new_task_button.svg" width="20" height="20" className="cursor-pointer" /></div>
            </div>
        </div>
    );
}

export default Board;