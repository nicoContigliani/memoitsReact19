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

    //levelData
    const ResetMap = (item: any | undefined | any[]) => {
        console.log("🚀 ~ ResetMap ~ item:", item)
        resetButton();
        return true
    }


    const getClassNameByLevel = (levelData:any) => {
        console.log("🚀 ~ getClassNameByLevel ~ levelData:", levelData)
        switch (levelData) {
            case 'basic':
                return 'todo-basic';
            case 'middel':
                return 'todo-middel';
            case 'expert':
                return 'todo-expert';
            case 'god':
                return 'todo-god';
            default:
                return 'todo-default';
        }
    }

    return (
        <div className='checkClass'>
            {dataMapReturn && dataMapReturn.map((item: any, index: any) => (
                <div key={index} className={`todo ${getClassNameByLevel(item?.levelData)}`}>
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
                            <Rates 
                            levelData={item?.levelData}
                            />
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
