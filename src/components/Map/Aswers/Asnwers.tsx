import { useEffect, useState } from "react"

const Asnwers = (props: any) => {
    const { Asnwers } = props

    const [answers, setAnswers] = useState<any[] | any | undefined>()
    useEffect(() => {
        setAnswers(Asnwers)
    }, [Asnwers])


    return (
        <div>
            <hr />
            {answers ?
                <div className='answersSussses'>
                    si
                </div>
                :
                <div className='answersError'>
                    no
                </div>
            }
            <hr />
        </div>
    )
}

export default Asnwers