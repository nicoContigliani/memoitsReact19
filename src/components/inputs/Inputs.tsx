import { Input } from 'antd';


const Inputs = (props: any) => {
    const { data, setData, type } = props
    console.log("🚀 ~ Inputs ~ type:", type)
    const handlechange = (event: any) => {
        try {
            const funtionReuire = () => {
                const trimmedValue = event?.target?.value?.trim(); // Trim leading and trailing spaces
                setData({
                    ...data,
                    [event?.target?.name]: trimmedValue,
                });

            }
            funtionReuire()

        } catch (error) {
            console.log("🚀 ~ Inputs ~ error:", error)
        }
    };


    return (
        <div>
            <Input placeholder="Total de preguntas"
                style={{ marginBottom: 20 }}
                onChange={handlechange}
                {...props}
                type={props.type}
            />
        </div>
    )
}

export default Inputs