import React, { useState } from 'react';
import { Flex, Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rates = () => {
    const [value, setValue] = useState(3);

    return (
        <Flex gap="small" >
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {/* {value ? <span>{desc[value - 1]}</span> : null} */}
        </Flex>
    )
}

export default Rates