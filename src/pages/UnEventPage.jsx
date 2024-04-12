import MonumentRoute1 from "src/components/MonumentRoute1";
import Participants from "src/components/Participants";


const UnEventPage = () => {
    return (
        <div>
            <div className="max-w-[20%] flex float-left ml-7 mt-7 h-full border-solid border-8 border-[#263C5C]">
                <MonumentRoute1 />
            </div>
            <div className="align-middle pt-7 pl-10 flex">
                <h6 className="flex text-3xl bg-[#263C5C] w-[30%] text-[#FFFFFF] justify-center h-[50px] align-middle">Evento Monumento</h6>
                <div className="relative ml-[5%]">
                    <Participants />
                </div>
            </div>

        </div>
    );
}

export default UnEventPage;