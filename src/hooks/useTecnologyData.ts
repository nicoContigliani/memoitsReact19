import { useEffect, useMemo, useState } from 'react';
import useProcessTecnologyData from './useProcessTecnologyData';

const useTecnologyData = (tecnology: any, selectedValue: number, selectValueLevel: number, json: any) => {
    const [optionsTecnology, setOptionsTecnology] = useState<string[]>([]);
    const [selectTecnology, setSelectTecnology] = useState<any | any[] | undefined>();
    const [selectLevel, setSelectLevel] = useState<any | any[] | undefined>();
    const [dataAll, setDataAll] = useState<any | any[] | undefined>();

    const getJsonData = useMemo(() => {
        const result: string[] = [];
        for (const key in tecnology) {
            if (Object?.prototype?.hasOwnProperty.call(tecnology, key)) {
                const element = tecnology[key];
                if (typeof element === 'object' && element !== null) {
                    const keyArray = Object?.keys(element);
                    result.push(keyArray[0]);
                }
            }
        }
        return result;
    }, [tecnology]);

    useEffect(() => {
        setOptionsTecnology(getJsonData);
    }, [getJsonData]);

    useEffect(() => {
        if (selectedValue !== undefined) {
            setSelectTecnology(getJsonData[selectedValue]);
        }
    }, [selectedValue, getJsonData]);

    useEffect(() => {
        const levels = ['basic', 'middel', 'expert', 'god'];
        if (selectValueLevel !== undefined) {
            setSelectLevel(levels[selectValueLevel]);
        }
    }, [selectValueLevel]);

    useEffect(() => {
        if (selectTecnology !== undefined && selectLevel !== undefined) {
            const filteredTechnology = tecnology.filter((item: any) => item[selectTecnology] !== undefined);
            if (filteredTechnology.length > 0) {
                const dataArray = filteredTechnology[0][selectTecnology];
                setDataAll(dataArray[selectLevel]);
            }
        }
    }, [selectTecnology, selectLevel, tecnology]);

    const results = useProcessTecnologyData(json);

    return {
        optionsTecnology,
        selectTecnology,
        selectLevel,
        dataAll,
        results
    };
};

export default useTecnologyData;