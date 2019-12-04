import React from "react"

const Circle = props => {
  const { dimensions, backgroundColor } = props
  return (
    <div
      style={{
        width: dimensions.diameter,
        height: dimensions.diameter,
        backgroundColor,
        borderRadius: dimensions.diameter
      }}
    />
  )
}

Circle.defaultProps = {
  backgroundColor: "blue"
}

export default Circle
