import React, { useEffect, useState } from 'react'
import { writteLocalStorageHome } from '../../services/readLocalStorage.services'
import Maps from '../../components/Map/Maps'

const Home = () => {
    const [dataReturn, setDataReturn] = useState<any | any[] | undefined>()

    useEffect(() => {
        const funtionAsync = async () => {
            const pattern = '-nico-contigliani-memoIts';
            const dataLocalStorage: any | any[] | undefined = writteLocalStorageHome(pattern)
            if (dataLocalStorage) await setDataReturn(dataLocalStorage)
        }
        funtionAsync()
        // 2024-07-12-18:57:23-nico-contigliani-memoIts
    }, [])

    console.log("🚀 ~ Home ~ dataReturn:", dataReturn)
    return (
        <div className='container'>
            Home
            <br />
            <strong>save:</strong>
            <span>
                {dataReturn && dataReturn.length}
            </span>
            <div className='mapsAll'>
                {dataReturn && (
                    <Maps
                        dataMapAll={dataReturn}
                        getTodo={dataReturn?.length}
                        tecnoData={dataReturn[0].tecnology||'react'}
                        levelData={dataReturn[0].levelData||'basic'}
                    />
                )}
            </div>
        </div>
    )
}

export default Home
