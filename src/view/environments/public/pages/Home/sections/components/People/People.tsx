import { PeopleList } from './mapped';

export const People = () => (
  <div className="w-full flex align-middle items-center flex-row justify-center gap-2 pt-10 max-md:w-full max-md:flex-col">
    {PeopleList.map((item, index) => (
      <div
        key={index}
        className=" flex items-center flex-col justify-evenly w-[280px] h-[280px] bg-neutrals-200 rounded-[25px]">
        <div className="w-[80px] h-[80px] rounded-full bg-black"></div>
        <p className="text-2xl font-staatliches text-dark-455">{item.name}</p>
        <p className="w-[200px] text-center font-Manrope text-black leading-[1.4]">{item.title}</p>
      </div>
    ))}
  </div>
);
