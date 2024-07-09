
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
