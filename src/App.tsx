// import React, { useEffect, useMemo, useState } from 'react';
// import '../src/App.scss';
// import Button from './components/Buttons/Button';
// import json from './virtualDb/virtualJSON.json'
// import Checkboxs from './components/checkbox/Checkbox';
// import { generateNumbersRandom } from './utils/generateNumberRandom.utils';
// import Inputs from './components/inputs/Inputs';
// import Maps from './components/Map/Maps';

// function App() {
//   const [count, setCount] = useState<number>(0);
//   const [levels, setLevels] = useState<any | any[] | undefined>()
//   const [todo, setTodo] = useState<any>(json)
//   const [data, setData] = useState<any | any[] | undefined>()



//   const [selectTecnology, setSelectTecnology] = useState<any | any[] | undefined>()
//   const [selectLevel, setSelectLevel] = useState<any | any[] | undefined>()
//   const [dataAll, setdataAll] = useState<any | any[] | undefined>()
//   const [dataMapAll, setDataMapAll] = useState<any | any[] | undefined>()


//   const [optionsTecnology, setOptionsTecnology] = useState<any | any[] | undefined>()


//   const [selectValueLevel, setSelectValueLevel] = useState<any | any[] | undefined>(0)
//   const [selectedValue, setSelectedValue] = useState<number>(0); // Estado para almacenar el valor seleccionado, inicializado en 1

//   const { tecnology } = todo
//   const dataTodo: string[] = []
//   for (const key in tecnology) {
//     if (Object?.prototype?.hasOwnProperty.call(tecnology, key)) {
//       const element: any = tecnology[key];
//       if (typeof element === 'object' && element !== null) {
//         const todoE = Object?.keys(element);
//         dataTodo.push(todoE[0])
//       }
//     }
//   }

//   useEffect(() => {
//     try {
//       setOptionsTecnology(dataTodo)
//     } catch (error) {
//       console.log("🚀 ~ useEffect ~ error:", error)

//     }
//   }, [todo])

//   useEffect(() => {
//     try {
//       if (selectedValue !== undefined) setSelectTecnology(dataTodo[selectedValue])
//     } catch (error) {
//       console.log("🚀 ~ useEffect ~ error:", error)

//     }
//   }, [selectedValue, selectValueLevel])

//   useEffect(() => {
//     try {
//       if (selectValueLevel !== undefined) setSelectLevel(['basic', 'midel', 'middel', 'expert', 'god'][selectValueLevel])
//     } catch (error) {
//       console.log("🚀 ~ useEffect ~ error:", error)

//     }
//   }, [selectValueLevel, selectedValue])


//   useEffect(() => {
//     try {
//       if (selectTecnology !== undefined && selectLevel !== undefined) {
//         const filteredTechnology = tecnology.filter((item: any) => item[selectTecnology] !== undefined);
//         if (filteredTechnology.length > 0) {
//           try {
//             const arrayData = filteredTechnology[0][selectTecnology];
//             const dataS: any[] | undefined | any = arrayData[selectLevel];
//             setdataAll(dataS)
//           } catch (error) {
//           console.log("🚀 ~ useEffect ~ error:", error)

//           }

//         }
//       }
//     } catch (error) {
//       console.log("🚀 ~ useEffect ~ error:", error)

//     }
//   }, [selectTecnology, selectLevel, tecnology]);


//   return (
//     <>
//       <div className='header'>
//         <h2> Que comience el juego</h2>
//       </div>
//       <div className='bodySetting'>
//         <div className='tecnology' >
//           <Checkboxs
//             name={`checkbox-tecnology`}
//             optionsTecnology={optionsTecnology}
//             selectedValue={selectedValue}
//             setSelectedValue={setSelectedValue}
//           />
//         </div>
//         <div className='level'>
//           <Checkboxs
//             name={`checkbox-level`}
//             optionsTecnology={['basic', 'middel', 'expert', 'god']}
//             selectedValue={selectValueLevel}
//             setSelectedValue={setSelectValueLevel}
//           />
//         </div>
//         <div className='inputAsk'>
//           <Inputs
//             type={'number'}
//             data={data}
//             setData={setData}
//             placeholder={"cuantas consultas"}
//             name={"ask"}
//           />
//         </div>
//       </div>

//       <div>
//         <Maps
//           dataMapAll={dataAll}
//           getTodo={data?.ask}
//         />
//       </div>

//       total {data?.ask}


//       <Button
//       />
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import '../src/App.scss';
import Button from './components/Buttons/Button';
import json from './virtualDb/virtualJSON.json';
import Checkboxs from './components/checkbox/Checkbox';
import Inputs from './components/inputs/Inputs';
import Maps from './components/Map/Maps';

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
  const dataTodo: string[] = [];

  for (const key in tecnology) {
    if (Object?.prototype?.hasOwnProperty.call(tecnology, key)) {
      const element: any = tecnology[key];
      if (typeof element === 'object' && element !== null) {
        const todoE = Object?.keys(element);
        dataTodo.push(todoE[0]);
      }
    }
  }

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
      console.log("🚀 ~ useEffect ~ level:", level)
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

  return (
    <>
      <div className='header'>
        <h2> Que comience el juego</h2>
      </div>
      <div className='bodySetting'>
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
      </div>

      <div className='container'>
        <Maps
          dataMapAll={dataAll}
          getTodo={data?.ask}
        />
      </div>

      total {data?.ask}

      <Button />
    </>
  );
}

export default App;
