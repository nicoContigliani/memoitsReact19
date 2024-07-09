import React from 'react'

const Asks = (props: any) => {
    const { dataItem } = props


    return (
        <div>
           <h5>
             {dataItem}
            </h5>
        </div>
    )
}

export default Asks