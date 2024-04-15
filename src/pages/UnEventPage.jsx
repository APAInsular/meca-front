import MonumentRoute1 from "src/components/MonumentRoute1";
import Participants from "src/components/Participants";
import EventCreator1 from "src/components/EventCreator1";
import EventDescription1 from "src/components/EventDescription1";
import ImageCarousel from "src/components/Carrusel";

const UnEventPage = () => {
    const images = [
        '/Image/IMG_0794.JPG',
        '/Image/3.jpg',
        '/Image/2.jpg',
    ];
    return (
        <div>
            <div className="flex object-cover justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center">
                <h6 className="text-3xl bg-[#263C5C] object-cover text-white py-4 px-6 md:min-h-[50px] md:flex md:items-center lg:ml-5">
                    Evento Monumento
                </h6>
            </div>
            <div className="mx-auto sm:justify-center md:justify-center lg:justify-center max-w-[80%] sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] xl:max-w-[40%]">
                <EventCreator1 />
            </div>
            <div className="flex justify-center mt-3 mb-[10%] md:max-w-[500px] lg:w-[90%] xl:max-w-[90%]">
                <EventDescription1 />
            </div>
            <div className="flex justify-center align-top lg:absolute lg:right-10 lg:top-40">
                <Participants />
                <button type="button" className="rounded-xl btn-outline-primary ml-5 h-9 w-20 relative mt-2 bg-[#263C5C] text-[#FFFFFF]">Unirse</button>
            </div>
            <div className="md:max-w-[500px] mt-3 mb-3 sm:max-w-[400px] lg:max-w-[500px] lg:h-[500px] lg:absolute lg:left-10 lg:top-24">
            <MonumentRoute1 />
            </div>
            <div className="h-[300px] mt-3 mb-[15%] lg:flex flex justify-center lg:max-h-full lg:mx-auto">
                <ImageCarousel images={images} />
            </div>
        </div>
    );
}

export default UnEventPage;
