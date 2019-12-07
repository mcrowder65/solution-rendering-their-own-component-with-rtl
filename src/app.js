import React from "react"
import Circle from "./circle"

function App() {
  return (
    <div>
      <Circle dimensions={{ diameter: 50 }} backgroundColor="red" />
      <Circle dimensions={{ diameter: 150 }} />
    </div>
  )
}

export default App
