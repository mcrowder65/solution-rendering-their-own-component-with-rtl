import React from "react"
import Circle from "./circle"

function App() {
  return (
    <div>
      <Circle dimensions={{ diameter: 200 }} backgroundColor="red" />
      <Circle dimensions={{ diameter: 400 }} />
    </div>
  )
}

export default App
