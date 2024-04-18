



const Participants = () => {
    let going = 5;
    let maxParticipants = 40;
    return(
        <div className="w-[150px] h-[50px] bg-[#263C5C] flex justify-between ml-[50%]">
            <div className="flex float-left text-2xl text-[#FFFFFF] mt-2 ml-8">{going}/{maxParticipants}</div>
            <img className="w-[30%] h-[90%] flex float-right mt-1 mr-2" src="/Image/user(1).png" alt="userimg" />
        </div>
    );
}

export default Participants;