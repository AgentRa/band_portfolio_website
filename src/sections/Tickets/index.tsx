import {TicketRow} from "./components";

const data = [
    {
        date: 'FEB 24, 2024',
        place: 'echo goa',
        country: 'goa, india',
        ticketLink: 'goingapp',
        facebookLink: 'facebookLink',
        mapLink: 'MapLink',
    },
    {
        date: 'FEB 24, 2024',
        place: 'echo goa',
        country: 'goa, india',
        ticketLink: 'goingapp',
        facebookLink: 'facebookLink',
        mapLink: 'MapLink',
    },
    {
        date: 'FEB 24, 2024',
        place: 'echo goa',
        country: 'goa, india',
        ticketLink: 'goingapp',
        facebookLink: 'facebookLink',
        mapLink: 'MapLink',
    },
    {
        date: 'FEB 24, 2024',
        place: 'echo goa',
        country: 'goa, india',
        ticketLink: 'goingapp',
        facebookLink: 'facebookLink',
        mapLink: 'MapLink',
    },
    {
        date: 'FEB 24, 2024',
        place: 'echo goa',
        country: 'goa, india',
        ticketLink: 'goingapp',
        facebookLink: 'facebookLink',
        mapLink: 'MapLink',
    },
    {
        date: 'FEB 24, 2024',
        place: 'echo goa',
        country: 'goa, india',
        ticketLink: 'goingapp',
        facebookLink: 'facebookLink',
        mapLink: 'MapLink',
    }
]

export const Tickets = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center my-10">
            <h2 className="text-4xl">Live Shows</h2>
            {data.map((ticketInfo) => <TicketRow key={ticketInfo.date}{...ticketInfo}/>)}
        </div>
    )
}