import Board from "./Board";
import BoardHeader from "./BoardHeader";
import ControlView from "./ControlView";
import MainHeader from "./MainHeader";

const Main = (props) => {
    return (
        <main className={props.navToggle ? "flex-1 hidden" : "flex-1"}>
            <MainHeader />
            <BoardHeader />
            <ControlView />
            <div className="grid grid-cols-1 gap-[24px] px-[16px] pb-[28px] md:grid-cols-2 md:px-[36px] xl:grid-cols-4">
                <Board />
                <Board />
                <Board />
                <Board />
            </div>
        </main>
    );
}

export default Main;