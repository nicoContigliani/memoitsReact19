import { useEffect, useState } from "react"

const Asnwers = (props: any) => {
    const { Asnwers } = props

    const [answers, setAnswers] = useState<any[] | any | undefined>()
    useEffect(() => {
        setAnswers(Asnwers)
    }, [Asnwers])


    return (
        <div>
            {answers ?
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