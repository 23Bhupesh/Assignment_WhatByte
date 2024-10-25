"use client";
import { useState } from "react";
import UpdateModal from "../app/components/UpdateModal";
import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";
import Image from "next/image";
import SyllabusAnalysis from "../app/components/SyllabusAnalysis";
import ComparisonGraph from "../app/components/ComparisonGraph";
import QuestionAnalysis from "../app/components/QuestionAnalysis";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({
    rank: 4,
    percentile: 90,
    score: 12,
  });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSave = (updatedData: any) => {
    setData(updatedData);
  };

  return (
    <div className="">
      {/* Header Component */}
      <Header />
      <div className="flex">
        <div>
          {/* Sidebar Component */}
          <Sidebar />
        </div>
        {/* Center Content */}
        <div>
          <p className="text-gray-600 w-auto lg:mx-12 md:mx-12 mx-2 my-7 text-sm font-semibold">
            Skill Test
          </p>
          <div className="lg:flex md:flex">
            {/* 1st */}
            {/* Skill Test Card */}
            <div className=" h-auto lg:w-[60%] md:w-[60%] w-full">
              <main className="lg:pl-12 md:pl-12 pl-2 flex gap-4 flex-col">
                <div className="border h-auto w-full lg:flex md:flex p-4 rounded-lg">
                  <Image
                    src="/images/html_logo.png"
                    alt="HTML"
                    width={50}
                    height={100}
                    className="mx-1"
                  />
                  <div className="flex flex-col px-2">
                    <h2 className="font-bold">Hyper Text Markup Language</h2>
                    <p className="text-sm font-semibold text-gray-600">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June
                      2021
                    </p>
                  </div>
                  <div className="">
                    <button
                      className="bg-[#132277] border-2 border-black text-white px-5 py-2 font-bold text-sm rounded "
                      onClick={handleOpenModal}
                    >
                      Update
                    </button>
                  </div>
                </div>

                {/* Quick Stats and other Components */}
                <div className="border rounded-lg p-4 h-auto w-auto flex flex-col">
                  <div>
                    <p className="font-bold">Quick Statistics</p>
                  </div>
                  <div className="lg:flex md:flex justify-between">
                    <div className="flex m-2">
                      <Image
                        src="/images/trophy_logo.jpg"
                        alt=""
                        height={10}
                        width={30}
                        className="h-10 w-10 p-1 border rounded-full"
                      />
                      <div className="px-3">
                        <p className="font-bold">{data.rank}</p>
                        <p className="text-xs font-semibold text-gray-500">
                          YOUR RANK
                        </p>
                      </div>
                    </div>
                    <hr className="lg:h-14 md:h-14 h-0 lg:w-0 md:w-0 w-full border border-gray-200" />
                    <div className="flex m-2">
                      <Image
                        src="/images/calender_logo.png"
                        alt=""
                        height={5}
                        width={20}
                        className="h-10 w-10 p-2 border rounded-full"
                      />
                      <div className="px-3">
                        <p className="font-bold">{data.percentile}%</p>
                        <p className="text-xs font-semibold text-gray-500">
                          PERCENTILE
                        </p>
                      </div>
                    </div>
                    <hr className="lg:h-14 md:h-14 h-0 lg:w-0 md:w-0 w-full border border-gray-200" />
                    <div className="flex m-2">
                      <Image
                        src="/images/green_checkbox_logo.jpg"
                        alt=""
                        height={10}
                        width={30}
                        className="h-10 w-10 p-2 border rounded-full"
                      />
                      <div className="px-3">
                        <p className="font-bold">{data.score}/15</p>
                        <p className="text-xs font-semibold text-gray-500">
                          CORRECT ANSWERS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* comparison Graph */}
                <div className="border rounded-lg">
                  <ComparisonGraph />
                </div>
              </main>
            </div>

            {/* 2nd */}
            <div className="flex flex-col gap-4 lg:w-[40%] md:w-[40%] w-full mx-4">
              {/* Syllabus Analysis Component */}
              <div>
                <SyllabusAnalysis />
              </div>
              {/* Question Analysis Component */}
              <div>
              <QuestionAnalysis correctAnswers={10} totalQuestions={15} />
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <UpdateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        initialData={data}
      />
    </div>
  );
}
