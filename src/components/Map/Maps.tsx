

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


const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
};



const Maps = (props: any | undefined) => {
    const { dataMapAll, getTodo, tecnoData, levelData } = props;

    const [dataMapReturn, setDataMapReturn] = useState<any | undefined | any[]>();
    const [selectedValues, setSelectedValues] = useState<{ [key: string]: any }>({});

    if (!dataMapAll || !Array.isArray(dataMapAll)) {
        return <div>No data available</div>;
    }

    useEffect(() => {

        const todo: any | any[] | undefined = Array?.from({ length: getTodo }, () => {
            try {
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


    const resetButton = () => {
        const todo: any | any[] | undefined = Array?.from({ length: getTodo }, () => {
            try {
                const dataReturn = generateNumbersRandom(0, dataMapAll?.length ?? 0);
                return dataMapAll[dataReturn];
            } catch (error) {
                console.log("🚀 ~ consttodo:any|any[]|undefined=Array?.from ~ error:", error)
            }

        });

        setDataMapReturn(todo);
    }




    const saveAsk = (props: any) => {
        let element: any = { ...props }
        element.tecnology = tecnoData || undefined
        element.levelData = levelData || undefined

        const now = moment();
        const formattedDateTime = formaterDataAndTime(now, 'middel')
        console.log("🚀 ~ saveAsk ~ formattedDateTime:", formattedDateTime)
        // const formattedDateTime = now.format('YYYY-MM-DD_HH:mm:ss');
        // const formattedDateTime:any = writteLocalStorage(element, "middle")
        // console.log("🚀 ~ saveAsk ~ formattedDateTime:", formattedDateTime)
        const forma:any = writteLocalStorage(element, formattedDateTime)

        // localStorage.setItem(`${formattedDateTime}-memoIts`, JSON.stringify(element));
    }
    const getItDelete = () => {

    }

    return (
        <div className='checkClass'>
            {dataMapReturn && dataMapReturn?.map((item: any, index: any) => (
                <div key={index} className='todo'>
                    <div className='ask'>
                        <h3>
                            <Asks dataItem={item?.ask} />
                        </h3>
                    </div>
                    <div className='chekboxDiv'>
                        {
                            <div>
                                <Checkboxs
                                    name={`radio-${index + 1}`}
                                    classN={""}
                                    optionsTecnology={item?.options}
                                    selectedValue={selectedValues[`radio-${index + 1}`] || ''}
                                    setSelectedValue={(value: any) => handleRadioChange(`radio-${index + 1}`, value)}
                                />
                            </div>
                        }
                    </div>
                    <div className='answer'>
                        {
                            item?.answer &&
                            <Asnwers
                                Asnwers={selectedValues[`radio-${index + 1}`] === item.answer ? true : false}
                            />
                        }
                    </div>
                    <div className='buttonGroup'>

                        <Buttons
                            actions={() => saveAsk(
                                {
                                    ask: item?.ask,
                                    option: item?.options,
                                    answer: item?.answer,
                                    myanswer: selectedValues[`radio-${index + 1}`] || undefined
                                }
                            )}
                            type="primary"
                        >
                            Save Ask
                        </Buttons>
                        <Buttons
                            actions={getItDelete}
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
                    actions={resetButton}
                    type=""
                >
                    Reset
                </Buttons>
            </div>
            <div className='data'>

            </div>
            <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
        </div>
    );
};

export default Maps;


