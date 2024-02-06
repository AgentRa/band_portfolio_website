type TicketInfoProps = {
  date: string;
  place: string;
  country: string;
  ticketLink: string;
  facebookLink: string;
  mapLink: string;
};
export const TicketRow = ({ date, place, country, ticketLink, facebookLink, mapLink }: TicketInfoProps) => {
  return (
    <div className="flex h-20 w-full flex-row my-2 duration-500 place-items-end justify-between rounded-xl p-4 hover:bg-gray-200">
      <div className=" flex h-full flex-col justify-between">
        <p className="font-bold">{date}</p>
        <p className="text-gray-500">{place}</p>
      </div>
      <p className="text-gray-500">{country}</p>
      <div>
        <a href="TODO">
          <button
              type="button"
              className="my-1 me-2  rounded-lg  border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
          >
            {ticketLink}
          </button>
        </a>
        <a href="TODO">
          <button
              type="button"
              className="my-1 me-2  rounded-lg  border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
          >
            {facebookLink}
          </button>
        </a>
        <a href="TODO">
          <button
              type="button"
              className="my-1 me-2  rounded-lg  border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
          >
            {mapLink}
          </button>
        </a>
      </div>
    </div>
);
};
