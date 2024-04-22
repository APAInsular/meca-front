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
      title: 'SomethingSomething2222',
      id: '2',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
    {
      title: 'SomethingSomething33333',
      id: '3',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
    {
      title: 'SomethingSomething444444',
      id: '4',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
    {
      title: 'SomethingSomething55555',
      id: '5',
      author: {
        name: 'Caesar Manrique'
      },
      style: 'Barroco'
    },
  ]
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
          <div className="flex-grow-1 flex flex-wrap flex-col">
            
          {selectedOptions.option1 && obrasInfo.map((obra) =>(
            <ListedObra key={obra.id} obra={obra} />
          )

          )}


            {selectedOptions.option5 && (
              <div className="bg-gray-500 p-3 m-2">
               <ListedObra />
              </div>
            )}
          </div>
        </div>
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