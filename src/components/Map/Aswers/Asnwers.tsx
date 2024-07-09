import React from 'react'

const Asnwers = (props: any) => {
    const { Asnwers } = props
    console.log("🚀 ~ Asnwers ~ Asnwers:", Asnwers)

    return (
        <div>
            {Asnwers ?
                <div className='answersSussses'>
                    si
                </div>
                :
                <div className='answersError'>
                    no
                </div>
            }
        </div>
    )
}

export default Asnwers