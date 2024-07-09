// // import React, { useEffect, useState } from 'react'
// // import { generateNumbersRandom } from '../../utils/generateNumberRandom.utils'
// // import Asks from './Asks/Asks'
// // import Checkboxs from '../checkbox/Checkbox'
// // import '../../assets/styles/main.scss'

// // const Maps = (props: any | undefined) => {
// //     const { dataMapAll, getTodo } = props
// //     console.log("🚀 ~ Maps ~ getTodo:", getTodo)


// //     // const [dataMapAlls, setDataMapAlls] = useState<any | undefined | any[]>()
// //     // const [getTodos, setGetTodos] = useState<any | undefined>()
// //     const [dataMapReturn, setDataMapReturn] = useState<any | undefined | any[]>()
// //     const [selectedValueLevelsG, setSelectedValueLevelsG] = useState<any | undefined | any[]>(0);



// //     // useEffect(() => {
// //     //     setDataMapAlls(dataMapAll)
// //     //     setGetTodos(getTodo)
// //     // }, [dataMapAll, getTodo])



// //     useEffect(() => {
// //         const todo = Array.from({ length: getTodo }, () => {
// //             const dataReturn = generateNumbersRandom(0, dataMapAll?.length ?? 0);
// //             return dataMapAll[dataReturn];
// //         });

// //         setDataMapReturn(todo);
// //     }, [dataMapAll, getTodo])


// //     console.log("🚀 ~ Maps ~ dataMapReturn:", dataMapReturn)


// //     const [selectedValues, setSelectedValues] = useState<any | undefined | any[]>(0);

// //     // Función para manejar el cambio en los checkboxes
// //     const handleCheckboxChange = (name: any, value: any) => {
// //         setSelectedValues((prevValues:any) => ({
// //             ...prevValues,
// //             [name]: value,
// //         }));
// //     };
// //     return (


// //         <div className='checkClass'>
// //             {dataMapReturn && dataMapReturn.map((item:any, index:any) => (
// //                 <div key={index}>
// //                     <Asks dataItem={item?.ask} />
// //                     <div>
// //                         <Checkboxs
// //                             name={`checkbox-${index + 1}`}
// //                             classN={"checkClass"}
// //                             optionsTecnology={item?.options}
// //                             selectedValue={selectedValues[`checkbox-${index + 1}`] || []}
// //                             setSelectedValue={(value:any) => handleCheckboxChange(`checkbox-${index + 1}`, value)}
// //                         />
// //                     </div>
// //                 </div>
// //             ))}
// //             {/* Para ver los valores seleccionados */}
// //             <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
// //         </div>
// //     )
// // }

// // export default Maps


// import React, { useEffect, useState } from 'react'
// import { generateNumbersRandom } from '../../utils/generateNumberRandom.utils'
// import Asks from './Asks/Asks'
// import Checkboxs from '../checkboxmaps/Checkbox'
// import '../../assets/styles/main.scss'

// const Maps = (props: any | undefined) => {
//     const { dataMapAll, getTodo } = props
//     console.log("🚀 ~ Maps ~ getTodo:", getTodo)

//     const [dataMapReturn, setDataMapReturn] = useState<any | undefined | any[]>()
//     const [selectedValues, setSelectedValues] = useState<{ [key: string]: any }>({});

//     useEffect(() => {
//         const todo = Array.from({ length: getTodo }, () => {
//             const dataReturn = generateNumbersRandom(0, dataMapAll?.length ?? 0);
//             return dataMapAll[dataReturn];
//         });

//         setDataMapReturn(todo);
//     }, [dataMapAll, getTodo])

//     console.log("🚀 ~ Maps ~ dataMapReturn:", dataMapReturn)

//     const handleCheckboxChange = (name: string, value: any) => {
//         setSelectedValues((prevValues) => ({
//             ...prevValues,
//             [name]: value,
//         }));
//     };

//     return (
//         <div className='checkClass'>
//             {dataMapReturn && dataMapReturn.map((item: any, index: any) => (
//                 <div key={index}>
//                     <Asks dataItem={item?.ask} />
//                     <div>
//                         <Checkboxs
//                             name={`checkbox-${index + 1}`}
//                             classN={"checkClass"}
//                             optionsTecnology={item?.options}
//                             selectedValue={selectedValues[`checkbox-${index + 1}`] || []}
//                             setSelectedValue={(value: any) => handleCheckboxChange(`checkbox-${index + 1}`, value)}
//                         />
//                     </div>
//                 </div>
//             ))}
//             <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
//         </div>
//     )
// }

// export default Maps

import React, { useEffect, useState } from 'react';
import { generateNumbersRandom } from '../../utils/generateNumberRandom.utils';
import Asks from './Asks/Asks';
import '../../assets/styles/main.scss';
import Checkboxs from '../checkboxmaps/Checkbox';

const Maps = (props: any | undefined) => {
    const { dataMapAll, getTodo } = props;
    console.log("🚀 ~ Maps ~ getTodo:", getTodo);

    const [dataMapReturn, setDataMapReturn] = useState<any | undefined | any[]>();
    const [selectedValues, setSelectedValues] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        const todo: any | any[] | undefined = Array?.from({ length: getTodo }, () => {
            try {
                console.log("🚀 ~ consttodo:any|any[]|undefined=Array?.from ~ dataMapAll:", dataMapAll)
                const dataReturn = generateNumbersRandom(0, dataMapAll?.length ?? 0);
                return dataMapAll[dataReturn];
            } catch (error) {
                console.log("🚀 ~ consttodo:any|any[]|undefined=Array?.from ~ error:", error)
            }

        });

        setDataMapReturn(todo);
    }, [dataMapAll, getTodo]);


    const handleRadioChange = (name: string, value: any) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div className='checkClass'>
            {dataMapReturn && dataMapReturn.map((item: any, index: any) => (
                <div key={index}>
                    <div>
                        <Asks dataItem={item?.ask} />
                    </div>
                    <div className='chekboxDiv'>
                        <Checkboxs
                            name={`radio-${index + 1}`}
                            classN={"checkClass"}
                            optionsTecnology={item?.options}
                            selectedValue={selectedValues[`radio-${index + 1}`] || ''}
                            setSelectedValue={(value: any) => handleRadioChange(`radio-${index + 1}`, value)}
                        />
                    </div>
                </div>
            ))}
            <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
        </div>
    );
};

export default Maps;


