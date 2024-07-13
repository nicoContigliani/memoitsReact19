// import { useEffect, useState } from 'react';
// import { generateNumbersRandom } from '../../utils/generateNumberRandom.utils';
// import Asks from './Asks/Asks';
// import '../../assets/styles/main.scss';
// import Checkboxs from '../checkboxmaps/Checkbox';
// import Asnwers from './Aswers/Asnwers';
// import { Card, Col, Row } from 'antd';
// import Buttons from '../Buttons/Button';
// import Rates from '../Rates/Rates';
// import moment from 'moment';
// import { writteLocalStorage } from '../../services/writteLocalStorage.services';
// import { formaterDataAndTime } from '../../utils/formaterDataAndTime.utils';

// const Maps = (props: any | undefined) => {
//     const { dataMapAll, getTodo, tecnoData, levelData } = props;
//     console.log("🚀 ~ Maps ~ dataMapAll:", dataMapAll)

//     const [dataMapReturn, setDataMapReturn] = useState<any | undefined | any[]>();
//     const [selectedValues, setSelectedValues] = useState<{ [key: string]: any }>({});

//     const [resetMap, setResetMap] = useState<boolean>(false)

//     if (!dataMapAll || !Array.isArray(dataMapAll)) {
//         return <div>No data available</div>;
//     }

//     useEffect(() => {
//         const todo: any | any[] | undefined = Array.from({ length: getTodo }, () => {
//             try {
//                 const dataReturn = generateNumbersRandom(0, dataMapAll.length ?? 0);
//                 return dataMapAll[dataReturn];
//             } catch (error) {
//                 console.log("🚀 ~ const todo ~ error:", error)
//             }
//         });

//         setDataMapReturn(todo);
//     }, [dataMapAll, getTodo]);

//     const handleRadioChange = (name: string, value: any) => {
//         setSelectedValues((prevValues) => ({
//             ...prevValues,
//             [name]: value,
//         }));
//     };

//     const resetButton = () => {
//         const todo: any | any[] | undefined = Array.from({ length: getTodo }, () => {
//             try {
//                 const dataReturn = generateNumbersRandom(0, dataMapAll.length ?? 0);
//                 return dataMapAll[dataReturn];
//             } catch (error) {
//                 console.log("🚀 ~ const todo ~ error:", error)
//             }
//         });

//         setDataMapReturn(todo);
//     }

//     const saveAsk = (props: any) => {
//         let element: any = { ...props }
//         element.tecnology = tecnoData || undefined
//         element.levelData = levelData || undefined
//         console.log("🚀 ~ saveAsk ~ element:", element)

//         const now = moment();
//         const formattedDateTime = formaterDataAndTime(now, 'middel')
//         writteLocalStorage(element, formattedDateTime)
//     }

//     const getItDelete = () => {
//         // Función para manejar la eliminación
//     }

//     const todoS = (dataR: any) => {
//         console.log("🚀 ~ todoS ~ dataR:", dataR)
//         // if (dataR === undefined) setResetMap(true)
//         if(dataR) resetButton()

//         return true
//     }


//     useEffect(() => {

//     }, [])




//     return (
//         <div className='checkClass'>
//             {
//                 (dataMapReturn !== undefined) ? dataMapReturn.map((item: any, index: any) => (
//                     <div key={index} className='todo'>
//                         {todoS(item)}
//                         <div className='ask'>
//                             <h3>
//                                 <Asks dataItem={item?.ask} />
//                             </h3>
//                         </div>
//                         <div className='chekboxDiv'>
//                             {item?.options ?
//                                 <div>
//                                     <Checkboxs
//                                         name={`radio-${index + 1}`}
//                                         classN={""}
//                                         optionsTecnology={item.options}
//                                         selectedValue={selectedValues[`radio-${index + 1}`] || ''}
//                                         setSelectedValue={(value: any) => handleRadioChange(`radio-${index + 1}`, value)}
//                                     />
//                                 </div>
//                                 : "no"
//                             }
//                         </div>
//                         <div className='answer'>
//                             {item?.answer &&
//                                 <Asnwers
//                                     Asnwers={selectedValues[`radio-${index + 1}`] === item.answer}
//                                 />
//                             }
//                         </div>
//                         <div className='buttonGroup'>
//                             <Buttons
//                                 actionsData={() => saveAsk({
//                                     ask: item.ask,
//                                     options: item?.options,
//                                     answer: item?.answer,
//                                     myanswer: selectedValues[`radio-${index + 1}`] || undefined
//                                 })}
//                                 type="primary"
//                             >
//                                 Save Ask
//                             </Buttons>
//                             <Buttons
//                                 actionsData={getItDelete}
//                                 type="primary"
//                                 ghost
//                             >
//                                 I get It delete
//                             </Buttons>
//                             <div className='rates'>
//                                 <Rates />
//                             </div>
//                         </div>
//                     </div>
//                 )
//                 ) : ""
//             }
//             <div className='buttonReset'>
//                 <Buttons
//                     actionsData={resetButton}
//                     type=""
//                 >
//                     Reset
//                 </Buttons>
//             </div>
//             <div className='data'></div>
//             <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
//         </div>
//     );
// };

// export default Maps;

import { useEffect, useState } from 'react';
import { generateNumbersRandom } from '../../utils/generateNumberRandom.utils';
import Asks from './Asks/Asks';
import '../../assets/styles/main.scss';
import Checkboxs from '../checkboxmaps/Checkbox';
import Asnwers from './Aswers/Asnwers';
import { Card, Col, Row } from 'antd';
import Buttons from '../Buttons/Button';
import Rates from '../Rates/Rates';
import moment from 'moment';
import { writteLocalStorage } from '../../services/writteLocalStorage.services';
import { formaterDataAndTime } from '../../utils/formaterDataAndTime.utils';

const Maps = (props: any | undefined) => {
    const { dataMapAll, getTodo, tecnoData, levelData } = props;
    console.log("🚀 ~ Maps ~ dataMapAll:", dataMapAll)

    const [dataMapReturn, setDataMapReturn] = useState<any | undefined | any[]>();
    const [selectedValues, setSelectedValues] = useState<{ [key: string]: any }>({});

    if (!dataMapAll || !Array.isArray(dataMapAll)) {
        return <div>No data available</div>;
    }

    useEffect(() => {
        const todo: any | any[] | undefined = Array.from({ length: getTodo }, () => {
            try {
                const dataReturn = generateNumbersRandom(0, dataMapAll.length ?? 0);
                return dataMapAll[dataReturn];
            } catch (error) {
                console.log("🚀 ~ const todo ~ error:", error)
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

    const resetButton = () => {
        const todo: any | any[] | undefined = Array.from({ length: getTodo }, () => {
            try {
                const dataReturn = generateNumbersRandom(0, dataMapAll.length ?? 0);
                return dataMapAll[dataReturn];
            } catch (error) {
                console.log("🚀 ~ const todo ~ error:", error)
            }
        });

        setDataMapReturn(todo);
    }

    const saveAsk = (props: any) => {
        let element: any = { ...props }
        element.tecnology = tecnoData || undefined
        element.levelData = levelData || undefined
        console.log("🚀 ~ saveAsk ~ element:", element)

        const now = moment();
        const formattedDateTime = formaterDataAndTime(now, 'middel')
        writteLocalStorage(element, formattedDateTime)
    }

    const getItDelete = () => {
        // Función para manejar la eliminación
    }

    useEffect(() => {
        if (dataMapReturn === undefined) {
            resetButton();
        }

    }, [dataMapReturn]);


    const ResetMap = (item: any | undefined | any[]) => {
        resetButton();
        return true
    }

    return (
        <div className='checkClass'>
            {dataMapReturn && dataMapReturn.map((item: any, index: any) => (
                <div key={index} className='todo'>
                    {/* {item?.options ?? ResetMap(item)} */}

                    {((item?.options) === undefined) ? ResetMap(item) : null}

                    <div className='ask'>
                        <h3>
                            <Asks dataItem={item?.ask} />
                        </h3>
                    </div>
                    <div className='chekboxDiv'>
                        {item?.options ?
                            <div>
                                <Checkboxs
                                    name={`radio-${index + 1}`}
                                    classN={""}
                                    optionsTecnology={item.options}
                                    selectedValue={selectedValues[`radio-${index + 1}`] || ''}
                                    setSelectedValue={(value: any) => handleRadioChange(`radio-${index + 1}`, value)}
                                />
                            </div>
                            : "no"
                        }
                    </div>
                    <div className='answer'>
                        {item?.answer &&
                            <Asnwers
                                Asnwers={selectedValues[`radio-${index + 1}`] === item.answer}
                            />
                        }
                    </div>
                    <div className='buttonGroup'>
                        <Buttons
                            actionsData={() => saveAsk({
                                ask: item.ask,
                                options: item?.options,
                                answer: item?.answer,
                                myanswer: selectedValues[`radio-${index + 1}`] || undefined
                            })}
                            type="primary"
                        >
                            Save Ask
                        </Buttons>
                        <Buttons
                            actionsData={getItDelete}
                            type="primary"
                            ghost
                        >
                            I get It delete
                        </Buttons>
                        <div className='rates'>
                            <Rates />
                        </div>
                    </div>
                </div>
            ))}
            <div className='buttonReset'>
                <Buttons
                    actionsData={resetButton}
                    type=""
                >
                    Reset
                </Buttons>
            </div>
            <div className='data'></div>
            <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
        </div>
    );
};

export default Maps;
