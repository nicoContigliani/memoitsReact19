import { Radio } from 'antd'
import React, { useState } from 'react'
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';



import '../../assets/styles/main.scss'; // Importar estilos SASS




const Checkboxs = (props: any) => {
    const { optionsTecnology, selectedValue, setSelectedValue } = props;
    // const [selectedValue, setSelectedValue] = useState<number>(1); // Estado para almacenar el valor seleccionado, inicializado en 1

    const handleChange = (e: any) => {
        setSelectedValue(e.target.value); // Actualizar el estado con el valor seleccionado
    };

    const radioOptions = optionsTecnology?.map((option: any, index: any) => (
        <Radio key={index} value={index}>
            {option}
        </Radio>
    ));

    // Componente Radio.Group con los Radio buttons dinámicos
    const RadioGroupComponent = (
        <div>

            <Radio.Group name="radiogroup" defaultValue={1} onChange={handleChange} value={selectedValue}>
                {radioOptions}
            </Radio.Group>
        </div>
    );

    const classs = props?.checkClass ? props.checkClass : 'checkbox-wrapper';


    return (
    <div className={classs}>
            {RadioGroupComponent}
        </div>
    );
}

export default Checkboxs