const ListLoader = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 h-64 w-full bg-slate-200 rounded-md shadow-sm">
      <h4 className="text-indigo-600 text-[30px] leading-3 font-medium">
        Chargement...
      </h4>
      <div className="rounded-full h-8 w-8 border-4 bg-slate-500 border-slate-500 animate-spin relative">
        <div className="absolute bg-indigo-600 animate-spin"></div>
      </div>
    </div>
  );
};

export default ListLoader;
