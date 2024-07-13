import React, { useEffect, useState } from 'react';
import { Flex, Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rates = (props: any) => {
    const { levelData } = props
    console.log("🚀 ~ Rates ~ levelData:", levelData)
    const [value, setValue] = useState(3);

    useEffect(() => {
        todo()
    }, [props])

    const todo = () => {
        switch (levelData) {
            case 'basic':
                setValue(1);
                break;
            case 'middel':
                setValue(2);
                break;
            case 'expert':
                setValue(3);
                break;
            case 'god':
                setValue(4);
                break;
            default:
                setValue(5);
                break;
        }
    }

    return (
        <Flex gap="small" >
            <Rate tooltips={desc}
            //  onChange={setValue} 
             value={value} />
            {/* {value ? <span>{desc[value - 1]}</span> : null} */}
        </Flex>
    )
}

export default Rates