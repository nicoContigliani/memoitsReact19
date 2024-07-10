import { useEffect, useMemo, useState } from 'react';
import '../src/App.scss';
import Button from './components/Buttons/Button';
import json from './virtualDb/virtualJSON.json';
console.log("🚀 ~ json:", json)
import Checkboxs from './components/checkbox/Checkbox';
import Inputs from './components/inputs/Inputs';
import Maps from './components/Map/Maps';

import { CommentOutlined, CustomerServiceOutlined, FieldNumberOutlined, LinuxOutlined, WifiOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import useProcessTecnologyData from './hooks/useProcessTecnologyData';
import MapStatistic from './components/Map/mapStatistic/MapStatistic';

function App() {
  const [count, setCount] = useState<number>(0);
  const [todo, setTodo] = useState<any>(json);
  const [data, setData] = useState<any | any[] | undefined>();

  const [selectTecnology, setSelectTecnology] = useState<any | any[] | undefined>();
  const [selectLevel, setSelectLevel] = useState<any | any[] | undefined>();
  const [dataAll, setDataAll] = useState<any | any[] | undefined>();

  const [optionsTecnology, setOptionsTecnology] = useState<any | any[] | undefined>();

  const [selectValueLevel, setSelectValueLevel] = useState<any | any[] | undefined>(0);
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const { tecnology } = todo;



















  const dataTodo = useMemo(() => {
    const result: string[] = [];
    for (const key in tecnology) {
      if (Object?.prototype?.hasOwnProperty.call(tecnology, key)) {
        const element: any = tecnology[key];
        if (typeof element === 'object' && element !== null) {
          const todoE = Object?.keys(element);
          result.push(todoE[0]);
        }
      }
    }
    return result;
  }, [tecnology]);



  useEffect(() => {
    try {
      setOptionsTecnology(dataTodo);
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error);
    }
  }, [todo]);

  useEffect(() => {
    try {
      if (selectedValue !== undefined) setSelectTecnology(dataTodo[selectedValue]);
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error);
    }
  }, [selectedValue, selectValueLevel]);

  useEffect(() => {
    try {
      const level = ['basic', 'middel', 'expert', 'god'][selectValueLevel]
      if (selectValueLevel !== undefined) setSelectLevel(['basic', 'middel', 'expert', 'god'][selectValueLevel]);
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error);
    }
  }, [selectValueLevel, selectedValue]);

  useEffect(() => {
    try {
      if (selectTecnology !== undefined && selectLevel !== undefined) {
        const filteredTechnology = tecnology.filter((item: any) => item[selectTecnology] !== undefined);
        if (filteredTechnology.length > 0) {
          try {
            const arrayData = filteredTechnology[0][selectTecnology];
            const dataS: any[] | undefined | any = arrayData[selectLevel];
            setDataAll(dataS);
          } catch (error) {
            console.log("🚀 ~ useEffect ~ error:", error);
          }
        }
      }
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error);
    }
  }, [selectTecnology, selectLevel, tecnology]);



    // useEffect(() => {
    //   const functionAsync = async () => {
    //     const tecnosData = json.tecnology;
    //     const results = {};
    
    //     tecnosData.forEach((element) => {
    //       Object.keys(element).forEach((techKey) => {
    //         const levels = element[techKey];
    //         Object.keys(levels).forEach((levelKey) => {
    //           const levelArray = levels[levelKey];
    
    //           const totalQuestions = levelArray.length;
    //           const totalAnswers = levelArray.reduce((sum, question) => sum + question.options.length, 0);
    
    //           if (!results[techKey]) {
    //             results[techKey] = {};
    //           }
    
    //           results[techKey][levelKey] = {
    //             totalQuestions,
    //             totalAnswers,
    //           };
    //         });
    //       });
    //     });
    
    //     console.log("Results:", results);
    //   };
    
    //   functionAsync();
    // }, [json]);

    const results = useProcessTecnologyData(json);
    console.log("🚀 ~ App ~ results:", results)


  return (
    <>
      <div className='header'>
        <h2> Que comience el juego</h2>

      </div>
      <MapStatistic
      results={results}
      />
      <div className=''>


        <FloatButton.Group
          trigger="hover"
          type="primary"
          style={{ right: 185 }}
          icon={<FieldNumberOutlined />}
        >
          <div className='level'>
            <span>
              Count Answer
            </span>
            <Inputs
              type={'number'}
              data={data}
              setData={setData}
              placeholder={"cuantas consultas"}
              name={"ask"}
            />
          </div>
        </FloatButton.Group>
        --

        <FloatButton.Group
          trigger="hover"
          type="primary"
          style={{ right: 135 }}
          icon={<LinuxOutlined />}
        >

          <Checkboxs
            name={`checkbox-tecnology`}
            optionsTecnology={optionsTecnology}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          {/* <FloatButton icon={<CommentOutlined />}
        /> */}
        </FloatButton.Group>

        <FloatButton.Group
          trigger="hover"
          type="primary"
          style={{ right: 85 }}
          icon={<WifiOutlined />}
        >
          <Checkboxs
            name={`checkbox-level`}
            optionsTecnology={['basic', 'middel', 'expert', 'god']}
            selectedValue={selectValueLevel}
            setSelectedValue={setSelectValueLevel}
          />

        </FloatButton.Group>


      </div>

      {/* <div className='bodySetting'>
        <div className='tecnology'>
          <Checkboxs
            name={`checkbox-tecnology`}
            optionsTecnology={optionsTecnology}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </div>
        <div className='level'>
          <Checkboxs
            name={`checkbox-level`}
            optionsTecnology={['basic', 'middel', 'expert', 'god']}
            selectedValue={selectValueLevel}
            setSelectedValue={setSelectValueLevel}
          />
        </div>
        <div className='inputAsk'>
          <Inputs
            type={'number'}
            data={data}
            setData={setData}
            placeholder={"cuantas consultas"}
            name={"ask"}
          />
        </div>
      </div> */}

      <div className='container'>
        {
          data &&
          dataAll &&
          <Maps
            dataMapAll={dataAll}
            getTodo={data?.ask}
          />
        }
      </div>

      total {data?.ask}

    </>
  );
}

export default App;
