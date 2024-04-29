import EventTitle from "../components/EventPage/EventTitle";
import Events from "../components/EventPage/Events";

const EventPage = () => {
    return (
        <div>
            <div className="pt-10 pb-10 lg:ml-[10%]"><EventTitle /></div>
            <Events />
        </div>
    );
}


export default EventPage;