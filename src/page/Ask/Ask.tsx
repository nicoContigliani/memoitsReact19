import React, { useState } from 'react'
import useTecnologyData from '../../hooks/useTecnologyData';
import MapStatistic from '../../components/Map/mapStatistic/MapStatistic';
import { FloatButton } from 'antd';
import { FieldNumberOutlined, InfoCircleOutlined, LinuxOutlined, WifiOutlined } from '@ant-design/icons';
import Checkboxs from '../../components/checkbox/Checkbox';
import Inputs from '../../components/inputs/Inputs';
import Maps from '../../components/Map/Maps';
import json from '../../virtualDb/virtualJSON.json';





const Ask = () => {
    const [JsonGetData, setJsonGetData] = useState<any | undefined>(json);
    const [data, setData] = useState<any | any[] | undefined>();
    const [selectValueLevel, setSelectValueLevel] = useState<number>(0);
    const [selectedValue, setSelectedValue] = useState<number>(0);
    const [showInfoComponent, setShowInfoComponent] = useState<boolean>(false);
    const { tecnology } = JsonGetData;

    const {
        optionsTecnology,
        selectTecnology,
        selectLevel,
        dataAll,
        results
    } = useTecnologyData(tecnology, selectedValue, selectValueLevel, json);
        console.log("🚀 ~ Ask ~ selectTecnology:", selectTecnology)



    return (
        <div>
            {
                showInfoComponent &&
                <MapStatistic results={results} />
            }
            <div className='appBody'>

                <FloatButton
                    onClick={() => setShowInfoComponent(!showInfoComponent)}
                    // description="info"
                    shape="circle"
                    type='primary'
                    style={{ right: 235 }}
                    icon={<InfoCircleOutlined />}
                />

                <FloatButton.Group
                    trigger="hover"
                    type="primary"
                    style={{ right: 135 }}
                    icon={<LinuxOutlined />}
                >
                    <Checkboxs
                        name="checkbox-tecnology"
                        optionsTecnology={optionsTecnology}
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                    />
                </FloatButton.Group>

                <FloatButton.Group
                    trigger="hover"
                    type="primary"
                    style={{ right: 85 }}
                    icon={<WifiOutlined />}
                >
                    <Checkboxs
                        name="checkbox-level"
                        optionsTecnology={['basic', 'middel', 'expert', 'god']}
                        selectedValue={selectValueLevel}
                        setSelectedValue={setSelectValueLevel}
                    />
                </FloatButton.Group>

                <FloatButton.Group
                    trigger="hover"
                    type="primary"
                    style={{ right: 185 }}
                    icon={<FieldNumberOutlined />}
                >
                    <div className='level'>
                        <span>Count Answer</span>
                        <Inputs
                            type="number"
                            data={data}
                            setData={setData}
                            placeholder="cuantas consultas"
                            name="ask"
                        />
                    </div>
                </FloatButton.Group>
            </div>

            <div className='mapsAll'>
                {data && dataAll && (
                    <Maps
                        dataMapAll={dataAll}
                        getTodo={data?.ask}
                        tecnoData={selectTecnology||'react'}
                        levelData={selectLevel||'basic'}

                    />
                )}
            </div>

            total {data?.ask}

        </div>
    )
}

export default Ask