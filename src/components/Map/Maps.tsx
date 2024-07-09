

import { useEffect, useState } from 'react';
import { generateNumbersRandom } from '../../utils/generateNumberRandom.utils';
import Asks from './Asks/Asks';
import '../../assets/styles/main.scss';
import Checkboxs from '../checkboxmaps/Checkbox';
import Asnwers from './Aswers/Asnwers';

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
            {dataMapReturn && dataMapReturn?.map((item: any, index: any) => (
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

                    <div className='answer'>
                        <Asnwers
                            Asnwers={selectedValues[`radio-${index + 1}`] === item.answer ? true : false}

                        />

                    </div>
                    {/* {selectedValues[`radio-${index + 1}`]===item.answer ?item.answer:"no" }<br/> */}
                    {/* {item.answer} */}
                </div>
            ))}
            <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
        </div>
    );
};

export default Maps;


