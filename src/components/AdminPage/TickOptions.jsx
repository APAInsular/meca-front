import { useState } from "react";
import ListedObra from "../ListedObra";
import Author from "../AuthorPage/Author";
import { useTranslation } from 'react-i18next';



const TickOptions = () => {
  const [t, i18n] = useTranslation("global");
  const obrasInfo = [
    {
      title: 'SomethingSomething',
      id: '1',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
    {
      title: 'SomethingSomething2',
      id: '2',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
    {
      title: 'SomethingSomething3',
      id: '3',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
    {
      title: 'SomethingSomething4',
      id: '4',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
    {
      title: 'SomethingSomething5',
      id: '5',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
  ]

  

  const obraAmmount = obrasInfo.length;
  // State to track selected options
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false
  });

  // Function to handle checkbox change
  const handleCheckboxChange = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    });
  };

  return (
    <div className="flex flex-col items-center ml-3 sm:ml-3 lg:ml-5">
      <div className="flex justify-between w-full">
        <div className="ml-[20px] flex flex-nowrap flex-col">
          <p className="text-4xl text-blue-950 mt-[150px]">{t("adminPage.adminRoles")}</p>
          <label htmlFor="option1">
            <input
            className="drop-shadow-lg"
              type="checkbox"
              id="option1"
              checked={selectedOptions.option1}
              onChange={() => handleCheckboxChange('option1')}
            />
            {t("adminPage.adminUser")}
          </label>
          <label htmlFor="option2">
            <input
              type="checkbox"
              id="option2"
              checked={selectedOptions.option2}
              onChange={() => handleCheckboxChange('option2')}
            />
            {t("adminPage.adminUserPrivate")}
          </label>
          <label htmlFor="option3">
            <input
              type="checkbox"
              id="option3"
              checked={selectedOptions.option3}
              onChange={() => handleCheckboxChange('option3')}
            />
            {t("adminPage.adminModerator")}
          </label>
          <label htmlFor="option4">
            <input
              type="checkbox"
              id="option4"
              checked={selectedOptions.option4}
              onChange={() => handleCheckboxChange('option4')}
            />
            {t("adminPage.adminEvent")}
          </label>
          <label htmlFor="option5">
            <input
              type="checkbox"
              id="option5"
              checked={selectedOptions.option5}
              onChange={() => handleCheckboxChange('option5')}
            />
            {t("adminPage.adminTotal")}
          </label>
        </div>
        <div className=" flex flex-col border-solid border-8 flex-wrap w-[75%] sm:mr-5 mr-5 lg:mr-auto">
          <div className="flex flex-wrap"><div className="sm:ml-0 lg:ml-16">{t("adminPage.adminID")}</div><div className="sm:ml-0 lg:ml-[110px]">{t("adminPage.adminTitle")}</div><div className="sm:ml-0 lg:ml-[200px]">{t("adminPage.adminAuthor")}</div><div className="sm:ml-0 lg:ml-[110px]">{t("adminPage.adminStyle")}</div><div className="sm:ml-0 lg:ml-[60px]">{t("adminPage.adminLocation")}</div><div className="sm:ml-0 lg:ml-[60px]">{t("adminPage.adminSpeech")}</div><div className="sm:ml-0 lg:ml-[110px]">{t("adminPage.adminEdition")}</div></div>
          {selectedOptions.option1 && obrasInfo.map((obra) => (
            <ListedObra key={obra.id} obra={obra} id={obra.id} />
          )
          )}
          {selectedOptions.option2 && obrasInfo.map((obra) => (
            <ListedObra key={obra.id} obra={obra} id={obra.id} />
          )
          )}
          {selectedOptions.option3 && obrasInfo.map((obra) => (
            <ListedObra key={obra.id} obra={obra} id={obra.id} />
          )
          )}
          {selectedOptions.option4 && obrasInfo.map((obra) => (
            <ListedObra key={obra.id} obra={obra} id={obra.id} />
          )
          )}
        </div>
      </div>
      <div className="flex border-solid border-blue-950 border-2 w-[78%] ml-[15%] mt-4 justify-center">{t("adminPage.adminTotalPlays")} {obraAmmount}</div>
      <button className="flex mb-[150px] mt-[20px] bg-blue-950 text-white w-[200px] justify-center ml-[15%]">{t("adminPage.adminAdd")}</button>
    </div>
  );
};


export default TickOptions;

// {selectedOptions.option1 && (
//   <div className="bg-gray-500 p-3 m-2">
//     Content for Option 1
//   </div>
// )}
// {selectedOptions.option2 && (
//   <div className="bg-gray-500 p-3 m-2">
//     Content for Option 2
//   </div>
// )}
// {selectedOptions.option3 && (
//   <div className="bg-gray-500 p-3 m-2">
//     Content for Option 3
//   </div>
// )}
// {selectedOptions.option4 && (
//   <div className="bg-gray-500 p-3 m-2">
//     Content for Option 4
//   </div>
// )}