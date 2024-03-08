import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import SubTitleLayout from "../Layout/SubTitleLayout";
import TableList from "../TableList";

import ListLoader from "../ListLoader";
import ErrorRequest from "../ErrorRequest";

const Notes = () => {
  const queryKey = [["getStudent"]];
  const { isLoading, data, error } = useQuery({
    queryKey: queryKey[0],
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/student/")
        .then((res) => res.data),
  });

  const listStudent = data || [];

  if (isLoading) return <ListLoader />;

  if (error) return <ErrorRequest error={error.message} />;

  return (
    <div>
      <SubTitleLayout
        text={"Gestion des notes"}
        className={"flex items-center justify-between mt-4"}
      ></SubTitleLayout>
      <TableList title={"Liste des étudiants"} data={listStudent} />
    </div>
  );
};

export default Notes;
