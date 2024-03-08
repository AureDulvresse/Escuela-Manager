import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import SubTitleLayout from "../Layout/SubTitleLayout";
import TableList from "../TableList";

import ListLoader from "../ListLoader";
import ErrorRequest from "../ErrorRequest";

const Notes = () => {
  const queryKey = [["getStudent"], ["getPromotion"]];
  const { isLoading, data, error } = useQuery({
    queryKey: queryKey[0],
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/student/")
        .then((res) => res.data),
  });

  const { data: dataPromo } = useQuery({
    queryKey: queryKey[1],
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/promo/")
        .then((res) => res.data),
  });

  const listStudent = data || [],
    promotions = dataPromo || [];

  if (isLoading) return <ListLoader />;

  if (error) return <ErrorRequest error={error.message} />;

  return (
    <div>
      <SubTitleLayout
        text={"Gestion des notes"}
        className={"flex items-center justify-between mt-4"}
      >
        <div className="flex gap-4 items-center justify-center mr-2">
          <Link
            to={""}
            className="h-[40px] px-2 rounded-md border-[1.4px] border-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center text-indigo-600 hover:text-white transition-colors"
          >
            Imprimer résultats
          </Link>
        </div>
      </SubTitleLayout>
      <div className="mt-6 mr-2 py-4 px-2 rounded-md shadow-sm bg-white">
        <TableList
          title={"Liste des étudiants"}
          listdata={listStudent}
          dataPromo={promotions}
        />
      </div>
    </div>
  );
};

export default Notes;
