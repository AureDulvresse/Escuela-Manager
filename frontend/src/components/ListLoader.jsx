const ListLoader = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <div className="w-4/5">
          <div className="shadow-sm px-4 flex-wrap py-2 bg-slate-300 dark:bg-slate-600 rounded-md h-[100px] animate-pulse"></div>
          <div className="bg-white dark:bg-slate-700 rounded-full h-[20px] w-4/5 mb-2 animate-pulse"></div>
          <div className="bg-white dark:bg-slate-700 rounded-full h-[10px] w-4/5 mb-1 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ListLoader;
