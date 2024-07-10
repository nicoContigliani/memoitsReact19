import { Row, Col, Statistic, Card } from 'antd';

// const data = {
//     react: {
//         basic: {
//             totalQuestions: 40,
//             totalAnswers: 120
//         },
//         middel: {
//             totalQuestions: 45,
//             totalAnswers: 135
//         },
//         expert: {
//             totalQuestions: 26,
//             totalAnswers: 78
//         },
//         god: {
//             totalQuestions: 30,
//             totalAnswers: 90
//         }
//     },
//     node: {
//         basic: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         middel: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         expert: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         god: {
//             totalQuestions: 1,
//             totalAnswers: null
//         }
//     },
//     next: {
//         basic: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         middel: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         expert: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         god: {
//             totalQuestions: 1,
//             totalAnswers: null
//         }
//     },
//     sequelize: {
//         basic: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         middel: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         expert: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         god: {
//             totalQuestions: 1,
//             totalAnswers: null
//         }
//     },
//     sql: {
//         basic: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         middel: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         expert: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         god: {
//             totalQuestions: 1,
//             totalAnswers: null
//         }
//     },
//     html: {
//         basic: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         middel: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         expert: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         god: {
//             totalQuestions: 1,
//             totalAnswers: null
//         }
//     },
//     typescript: {
//         basic: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         middel: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         expert: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         god: {
//             totalQuestions: 1,
//             totalAnswers: null
//         }
//     },
//     graphql: {
//         basic: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         middel: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         expert: {
//             totalQuestions: 1,
//             totalAnswers: null
//         },
//         god: {
//             totalQuestions: 1,
//             totalAnswers: null
//         }
//     }
// };

const MapStatistic = (props: any) => {
    const { results:data } = props
    return (
        <Row gutter={16} className='container'
        // style={{fontSize:'16px',width:'70%'}}
        >
            {Object?.keys(data)?.map(tech => (
                <Col span={3} key={tech}>
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
