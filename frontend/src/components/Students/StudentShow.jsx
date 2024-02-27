import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const StudentShow = () => {

  const pk = useParams('pk');

  const queryKey = ['showStudent'];
  const { isLoading, data, error } = useQuery({
    queryKey: queryKey,
    queryFn: async () => await axios.get()
  })

  return (
    <div className="flex flex-col">
      <h4 className="bg-indigo-600 text-white rounded-t-md w-full h-[50px] px-1 py-3 font-semibold">
        Liste des étudiants inscrits
      </h4>
      <div>

      </div>
    </div>
  );
};

export default StudentShow;
