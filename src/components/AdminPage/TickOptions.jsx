import { useState } from "react";
import ListedObra from "../ListedObra";
import Author from "../AuthorPage/Author";



// const TickOptions = () => {
//     // State to track selected options
//     const [selectedOptions, setSelectedOptions] = useState({
//         option1: false,
//         option2: false,
//         option3: false,
//     });

//     // Function to handle checkbox change
//     const handleCheckboxChange = (option) => {
//         setSelectedOptions({
//             ...selectedOptions,
//             [option]: !selectedOptions[option],
//         });
//     };
//     return (
//         <div className="flex">
//             <h2>Roles</h2>
//             <div className='flex flex-col'>
//                 <label htmlFor="option1">
//                     <input
//                         type="checkbox"
//                         id="option1"
//                         checked={selectedOptions.option1}
//                         onChange={() => handleCheckboxChange('option1')}
//                     />
//                     Option 1
//                 </label>
//                 <label htmlFor="option2">
//                     <input
//                         type="checkbox"
//                         id="option2"
//                         checked={selectedOptions.option2}
//                         onChange={() => handleCheckboxChange('option2')}
//                     />
//                     Option 2
//                 </label>
//                 <label htmlFor="option3">
//                     <input
//                         type="checkbox"
//                         id="option3"
//                         checked={selectedOptions.option3}
//                         onChange={() => handleCheckboxChange('option3')}
//                     />
//                     Option 3
//                 </label>
//             </div>

//             <div className="content-container">
//                 {selectedOptions.option1 && (
//                     <div className="content">
//                         Content for Option 1
//                     </div>
//                 )}
//                 {selectedOptions.option2 && (
//                     <div className="content">
//                         Content for Option 2
//                     </div>
//                 )}
//                 {selectedOptions.option3 && (
//                     <div className="content">
//                         Content for Option 3
//                     </div>
//                 )}
//             </div>

//         </div>

//     );
// }



const TickOptions = () => {
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
    <div className="flex flex-col items-center ml-5">
      <div className="flex justify-between w-full">
        <div className="mr-[20px] flex flex-nowrap flex-col">
          <p className="text-xl">Roles</p>
          <label htmlFor="option1">
            <input
              type="checkbox"
              id="option1"
              checked={selectedOptions.option1}
              onChange={() => handleCheckboxChange('option1')}
            />
            Usuario Publico
          </label>
          <label htmlFor="option2">
            <input
              type="checkbox"
              id="option2"
              checked={selectedOptions.option2}
              onChange={() => handleCheckboxChange('option2')}
            />
            Usuario Privado
          </label>
          <label htmlFor="option3">
            <input
              type="checkbox"
              id="option3"
              checked={selectedOptions.option3}
              onChange={() => handleCheckboxChange('option3')}
            />
            Moderador
          </label>
          <label htmlFor="option4">
            <input
              type="checkbox"
              id="option4"
              checked={selectedOptions.option4}
              onChange={() => handleCheckboxChange('option4')}
            />
            Admin de Evento
          </label>
          <label htmlFor="option5">
            <input
              type="checkbox"
              id="option5"
              checked={selectedOptions.option5}
              onChange={() => handleCheckboxChange('option5')}
            />
            Admin Total
          </label>
        </div>
        <div className=" flex flex-wrap flex-col border-solid border-8 w-[80%] mr-auto">
          <div className="flex"><div className="ml-16">ID</div><div className="ml-[110px]">Titulo</div><div className="ml-[200px]">Autor</div><div className="ml-[110px]">Estilo</div><div className="ml-[60px]">Ubicacion</div><div className="ml-[60px]">Discurso</div><div className="ml-[110px]">Edicion</div></div>
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
      <div className="flex border-solid border-blue-950 border-2 w-[78%] ml-3 mt-4 justify-center">Obras Totales : {obraAmmount}</div>
      <button className="flex mb-[150px] mt-[20px] bg-blue-950 text-white w-[200px] justify-center">Anadir Obra</button>
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