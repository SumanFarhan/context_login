import React from 'react'
import 'antd/dist/antd.css'
import Left_side from './Left_side'
import Right_side from './Right_side'

const App = () => {
  return (
    <>
      <div className="flex-container">
        <div className="left_side"><Left_side/></div>
        <div className="right_side"><Right_side/></div>
      </div>
    </>
  )
}

export default App