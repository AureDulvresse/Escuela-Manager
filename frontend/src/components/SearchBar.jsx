import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-[5px] gap-1 w-[350px]">
      <input
        type="search"
        name="search"
        className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
        placeholder="Taper une recherche"
      />
      <button className="h-[40px] px-2 rounded-md bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center">
        <BiSearchAlt2 className="text-white text-[24px] leading-3" />
      </button>
    </div>
  );
};

export default SearchBar;
