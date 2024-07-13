import React from 'react'
import { Button, Flex } from 'antd';

const Buttons = ({ actionsData, children, ...restProps }) => {
  return (
    <Flex gap="small" wrap>
      <Button
        onClick={actionsData}
        {...restProps}
      >
        {children}
      </Button>
    </Flex>
  )
}

export default Buttons;
