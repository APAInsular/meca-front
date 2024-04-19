import { useState } from "react";


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
    // State to track selected options
    const [selectedOptions, setSelectedOptions] = useState({
      option1: false,
      option2: false,
      option3: false,
    });
  
    // Function to handle checkbox change
    const handleCheckboxChange = (option) => {
      setSelectedOptions({
        ...selectedOptions,
        [option]: !selectedOptions[option],
      });
    };
  
    return (
      <div className="flex flex-col items-center">
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
              Option 1
            </label>
            <label htmlFor="option2">
              <input
                type="checkbox"
                id="option2"
                checked={selectedOptions.option2}
                onChange={() => handleCheckboxChange('option2')}
              />
              Option 2
            </label>
            <label htmlFor="option3">
              <input
                type="checkbox"
                id="option3"
                checked={selectedOptions.option3}
                onChange={() => handleCheckboxChange('option3')}
              />
              Option 3
            </label>
          </div>
          <div className="flex-grow-1 flex flex-wrap">
            {selectedOptions.option1 && (
              <div className="bg-gray-500 p-3 m-2">
                Content for Option 1
              </div>
            )}
            {selectedOptions.option2 && (
              <div className="bg-gray-500 p-3 m-2">
                Content for Option 2
              </div>
            )}
            {selectedOptions.option3 && (
              <div className="bg-gray-500 p-3 m2">
                Content for Option 3
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  

  export default TickOptions;