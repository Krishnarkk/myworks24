import React from 'react'
import Counter from './Counter'
import Products from './Products'
import Parent from './Parent'
import Api from './Api'
import New from './New'

const App = () => {
  return (
    <div>
      <Counter/>
      {/* <Products/> */}
      <Parent/>

      <Api/>

      <New/>
.    </div>
  )
}

export default App