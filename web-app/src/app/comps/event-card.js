import Image from "next/image";
import { MdLocationPin, MdCalendarMonth } from "react-icons/md";


import { useState } from "react";

const EventCard = ( event ) => {

    const [eventNum , setEventNum] = useState(0)
    console.log(event);

    return (
        <div className="card flex flex-row bg-cyan-500/50 mx-[5rem] p-[2rem] rounded-2xl">

            <div className="card-image basis-1/3">
                {/* <Image src={event[eventNum].img} alt={event[eventNum].title} width={200} height={200} /> */}



            </div>
            <div className="card-body basis-2/3 xl:pl-[4rem]">

                <div className="card-title text-[2rem]">{event[eventNum].title}</div>
                <div className="flex text-[1.5rem]"><MdLocationPin /> {event[eventNum].loc}</div>
                <div className="flex text-[1.5rem]"><MdCalendarMonth />{event[eventNum].date}</div>
                <p className="card-text">{event[eventNum].time}</p>
                <p className="card-text">{event[eventNum].desc}</p>
            </div>
        </div>
    );

}

export default EventCard;