

import { useEffect, useState } from 'react';
import { generateNumbersRandom } from '../../utils/generateNumberRandom.utils';
import Asks from './Asks/Asks';
import '../../assets/styles/main.scss';
import Checkboxs from '../checkboxmaps/Checkbox';
import Asnwers from './Aswers/Asnwers';
import { Card, Col, Row } from 'antd';
import Buttons from '../Buttons/Button';


const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
};



const Maps = (props: any | undefined) => {
    const { dataMapAll, getTodo } = props;

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

    const saveAsk = () => {

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
                            actions={saveAsk}
                            type="primary"
                        >
                            Save
                        </Buttons>
                        {/* <Buttons
                            actions={saveAsk}
                            type="primary"
                            ghost
                        >
                            Save
                        </Buttons> */}

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


