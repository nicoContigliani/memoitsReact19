import { Row, Col, Statistic, Card } from 'antd';



const MapStatistic = (props: any) => {
    const { results:data } = props
    return (
        <Row gutter={16} className='container'
        // style={{fontSize:'16px',width:'70%'}}
        >
            {Object?.keys(data)?.map(tech => (
                <Col span={8} key={tech}>
                    <Card bordered={true}>


                        <h3>{tech}</h3>
                        <Statistic
                            title="Basic Ask"
                            value={data[tech]['basic'].totalQuestions}
                        //suffix=" preguntas"
                        />
                        {/* <Statistic
            title="Respuestas"
            value={data[tech]['basic'].totalAnswers || 0}
            suffix=" respuestas"
          /> */}

                        <Statistic
                            title="Middel Ask"
                            value={data[tech]['middel'].totalQuestions}
                        //suffix=" preguntas"
                        />
                        {/* <Statistic
            title="Respuestas"
            value={data[tech]['middel'].totalAnswers || 0}
            suffix=" respuestas"
          /> */}

                        <Statistic
                            title="Expert Ask"
                            value={data[tech]['expert'].totalQuestions}
                        //suffix=" preguntas"
                        />
                        {/* <Statistic
            title="Respuestas"
            value={data[tech]['expert'].totalAnswers || 0}
            suffix=" respuestas"
          /> */}

                        <Statistic
                            title="God Ask"
                            value={data[tech]['god'].totalQuestions}
                        //suffix=" preguntas"
                        />
                        {/* <Statistic
            title="Respuestas"
            value={data[tech]['god'].totalAnswers || 0}
            suffix=" respuestas"
          /> */}
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default MapStatistic;
