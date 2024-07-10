// import React from 'react'
import { Button, Flex } from 'antd';

const Buttons = (props: any) => {
  return (
    <Flex gap="small" wrap>
      <Button
        onClick={props?.actions}
        {...props}
      >{props?.children}
      </Button>
    </Flex>
  )
}

export default Buttons