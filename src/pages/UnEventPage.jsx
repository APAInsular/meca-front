import MonumentRoute1 from "../components/MonumentRoute1";
import Participants from "../components/Participants";
import EventCreator1 from "../components/EventPage/EventCreator1";
import EventDescription1 from "../components/EventPage/EventDescription1";
import ImageCarousel from "../components/Carrusel";

const UnEventPage = () => {
    const images = [
        '/Image/IMG_0794.JPG',
        '/Image/3.jpg',
        '/Image/2.jpg',
    ];

    return (
        <div>
            <div className="flex object-cover justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center">
                <h6 className="text-3xl bg-[#263C5C] object-cover text-white py-4 px-6 md:min-h-[50px] md:flex md:items-center lg:ml-5 lg:mt-5">
                    Evento Monumento
                </h6>
            </div>
            <div className="mx-auto sm:justify-center md:justify-center lg:justify-center max-w-[80%] sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] xl:max-w-[40%]">
                <EventCreator1 />
            </div>
            <div className="w-full mx-auto flex mt-3 mb-[10%] md:max-w-[500px] lg:max-w-[90%] justify-center lg:justify-center">
                <EventDescription1 />
            </div>
            <div className="my-4 lg:my-0 flex justify-center align-top lg:absolute lg:right-28 lg:top-40">
                <Participants />
                <button type="button" className="rounded-xl btn-outline-primary ml-5 h-9 w-20 relative mt-2 bg-[#263C5C] text-[#FFFFFF]">Unirse</button>
            </div>
            <div className="max-w-[350px] mx-auto justify-center lg:my-0 sm:justify-center sm:mx-auto sm:flex sm:z-0 md:justify-center md:mx-auto md:flex md:max-w-[300px] mt-4 mb-4 sm:max-w-[400px] lg:max-w-[500px] lg:h-[500px] lg:absolute lg:left-10 lg:top-40">
                <MonumentRoute1 />
            </div>
            <div className="h-[300px] mt-3 mb-[15%] lg:flex flex justify-center lg:max-h-full lg:mx-auto lg:w-[80%] lg:h-fit">
                <ImageCarousel images={images} />
            </div>
        </div>
    );
}

export default UnEventPage;
