const ListLoader = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 h-64 w-full bg-slate-200 rounded-md shadow-sm">
      <h4 className="text-indigo-600 text-[30px] leading-3 font-medium">
        Chargement...
      </h4>
      <div className="rounded-full bg-slate-50 h-4 w-2/3 border border-indigo-500"></div>
    </div>
  );
};

export default ListLoader;
