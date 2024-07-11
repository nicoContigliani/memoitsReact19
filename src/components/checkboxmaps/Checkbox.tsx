
import { Radio } from 'antd';
import { useEffect, useState } from 'react';

const RadioGroup = (props: any) => {
    const { name, classN, optionsTecnology, selectedValue, setSelectedValue } = props;

    const [todoDataOptions, setTodoDataOptions] = useState<any | any[] | undefined>([])
    useEffect(() => {

        if (optionsTecnology !== undefined) {
            const alternarArray = array =>
                array.reduce((acc, _, index, arr) => {
                    index % 2 === 0
                        ? acc.push(arr[Math.floor(index / 2)])
                        : acc.push(arr[arr.length - 1 - Math.floor(index / 2)]);
                    return acc;
                }, []);
            let arrayAlternado = alternarArray(optionsTecnology);
            setTodoDataOptions(arrayAlternado)
        }
    }, [optionsTecnology])







    const handleChange = (e: any) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div>
            {
                todoDataOptions &&
                <Radio.Group
                    className={classN}
                    options={todoDataOptions}
                    value={selectedValue}
                    onChange={handleChange}
                />
            }
        </div>
    );
};

export default RadioGroup;
