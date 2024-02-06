import {Tickets} from "@/sections";

const LiftsPage = () => {


  return (
    <main className="flex max-w-[1200px] m-auto flex-col items-center pb-16">
      <div className="flex w-full items-center justify-between px-4">
        <h1 className="ml-24 w-full text-center">Psycho Squad PL</h1>
      </div>
        <Tickets />
    </main>
  );
};

export default LiftsPage;
