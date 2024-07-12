import { useState } from 'react';
import '../src/App.scss';
import Button from './components/Buttons/Button';
import json from './virtualDb/virtualJSON.json';
import Checkboxs from './components/checkbox/Checkbox';
import Inputs from './components/inputs/Inputs';
import Maps from './components/Map/Maps';
import { FieldNumberOutlined, InfoCircleOutlined, LinuxOutlined, WifiOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import MapStatistic from './components/Map/mapStatistic/MapStatistic';
import useTecnologyData from './hooks/useTecnologyData';

function App() {
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


  const showInfo = () => {
    setShowInfoComponent(!showInfoComponent);
  };

  return (
    <div className='app'>
      <div className='header'>
        <h2>Que comience el juego</h2>
      </div>
      {
        showInfoComponent &&
        <MapStatistic results={results} />
      }
      <div className='appBody'>
        {/* <FloatButton.Group
          trigger="hover"
          type="primary"
          style={{ right: 235 }}
          icon={<InfoCircleOutlined />}
        >
          <div className='level'>
            <span>Show info</span>
            <Button actions={showInfo} type="primary">Show</Button>
          </div>
        </FloatButton.Group> */}


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
            tecnoData={selectTecnology}
            levelData={selectLevel}

          />
        )}
      </div>

      total {data?.ask}
    </div>
  );
}

export default App;
