

// import React from 'react';
// import { Checkbox } from 'antd';

// const Checkboxs = (props: any) => {
//     const { name, classN, optionsTecnology, selectedValue, setSelectedValue } = props

//     const handleChange = (checkedValues: any) => {
//         setSelectedValue(checkedValues);
//     };

//     return (
//         <Checkbox.Group
//             className={classN}
//             options={optionsTecnology}
//             value={selectedValue}
//             onChange={handleChange}
//         />
//     );
// };

// export default Checkboxs;
import React from 'react';
import { Radio } from 'antd';

const RadioGroup = (props: any) => {
    const { name, classN, optionsTecnology, selectedValue, setSelectedValue } = props;

    const handleChange = (e: any) => {
        setSelectedValue(e.target.value);
    };

    return (
        <Radio.Group
            className={classN}
            options={optionsTecnology}
            value={selectedValue}
            onChange={handleChange}
        />
    );
};

export default RadioGroup;
