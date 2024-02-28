import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import SubTitleLayout from "../components/Layout/SubTitleLayout";
import StatBox from "../components/Dashboard/StatBox";
import BarChart from "../components/Dashboard/BarChart";
import LineChart from "../components/Dashboard/LineChart";

import { BiFile, BiSolidGraduation } from "react-icons/bi";

import ListLoader from "../components/ListLoader";
import ErrorRequest from "../components/ErrorRequest";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      gain: 8498,
      lose: 4567,
      year: 2021,
    },
    {
      id: 2,
      gain: 4567,
      lose: 1233,
      year: 2022,
    },
    {
      id: 3,
      gain: 6789,
      lose: 367,
      year: 2023,
    },
    {
      id: 4,
      gain: 5899,
      lose: 5948,
      year: 2024,
    },
  ];

  const [userData, setUserData] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: data.map((data) => data.gain),
        backgroundColor: [
          "rgb(79,70, 229)",
          "rgb(34, 224, 38)",
          "rgb(288, 20, 69)",
          "rgb(147, 230, 280)",
        ],
      },
    ],
  });
  const [userData2, setUserData2] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "User Losed",
        data: data.map((data) => data.lose),
        backgroundColor: [
          "rgb(79,70, 229)",
          "rgb(34, 224, 38)",
          "rgb(288, 20, 69)",
          "rgb(147, 230, 280)",
        ],
      },
    ],
  });

  useEffect(() => {
    prepare_data1(data);
    prepare_data2(data);
  }, []);

  const queryKey = ["stats"];
  const {
    isLoading,
    data: stats,
    error,
  } = useQuery({
    queryKey: queryKey,
    queryFn: async () =>
      await axios
        .get("http://128.0.0.1:8000/api/stats/")
        .then((res) => res.data),
  });

  const prepare_data1 = (d) => {
    const prep = {
      labels: d.map((data) => data.year),
      datasets: [
        {
          label: "User Gained",
          data: d.map((data) => data.gain),
          backgroundColor: [
            "rgb(79,70, 229)",
            "rgb(34, 224, 38)",
            "rgb(288, 20, 69)",
            "rgb(147, 230, 280)",
          ],
        },
      ],
    };

    setUserData(prep);
  };

  const prepare_data2 = (d) => {
    const prep = {
      labels: d.map((data) => data.year),
      datasets: [
        {
          label: "User Losed",
          data: d.map((data) => data.lose),
          backgroundColor: [
            "rgb(79,70, 229)",
            "rgb(34, 224, 38)",
            "rgb(288, 20, 69)",
            "rgb(147, 230, 280)",
          ],
        },
      ],
    };

    setUserData2(prep);

    if (isLoading) return <ListLoader />;

    if (error) return <ErrorRequest error={error.message} />;
  };

  return (
    <>
      <div className="py-3 px-3 bg-[#f6f6f6] rounded-sm">
        <SubTitleLayout
          text={"Dashboard"}
          className={"flex items-center justify-between"}
        >
          <button className="h-[38px] px-2.5 rounded-md bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center text-white">
            {"Generer Rapport"}
            <BiFile className="text-white text-[28px] font-extrabold leading-3 pl-2" />
          </button>
        </SubTitleLayout>

        <div className="grid grid-cols-4 gap-[30px] mt-5 pb-3">
          <StatBox libelle={"Inscription de cette année"} value={120}>
            <BiSolidGraduation className="text-indigo-600 text-[48px] leading-3" />
          </StatBox>
          <StatBox libelle={"Personnel"} value={20}>
            <BiSolidGraduation className="text-indigo-600 text-[48px] leading-3" />
          </StatBox>
          <StatBox libelle={"Admis"} value={90}>
            <BiSolidGraduation className="text-indigo-600 text-[48px] leading-3" />
          </StatBox>
          <StatBox libelle={"Total Etudiant"} value={stats.total_student}>
            <BiSolidGraduation className="text-indigo-600 text-[48px] leading-3" />
          </StatBox>
        </div>
        <div className="grid grid-cols-2 gap-1 mt-5 pb-3">
          <div className="h-[280px] rounded-md shadow-sm py-1 px-2 bg-white">
            <h2 className="text-indigo-600 leading-[17px] text-[28px] py-2 font-normal">
              Taux de reussite
            </h2>
            <div className="h-[87%] py-1">
              <BarChart data={userData} />
            </div>
          </div>
          <div className="h-[280px] rounded-md shadow-sm py-1 px-2 bg-white">
            <h2 className="text-indigo-600 leading-[17px] text-[28px] py-2 font-normal">
              Moyenne Paiement
            </h2>
            <div className="h-[87%] py-1">
              <LineChart data={userData2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
