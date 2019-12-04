Since we were tasked with created an individual test for circle.js, let's create that test file in our `__tests__` directory.

Create the file in codesandbox under `src/__tests__/circle.test.js`

Now let's open the file and write our test.

```js
import React from "react"
import { render } from "@testing-library/react"
import Circle from "../circle"

test("renders", () => {
  render(<Circle />)
})
```

Now you'll see that the test is actually failing, why is that? Maybe it's because Circle is expecting certain props to be provided but they weren't provided.

A way around this would be to include dimensions, and that will solve our problem.

```js
render(<Circle dimensions={{ diameter: 200 }} />)
```

In my opinion, it's best for React components to be able to render in isolation without providing any props through the use of defaultProps.

So I think it would be better to update our source code and add a default diameter.
Let's first delete the dimensions prop that was passed in our test

```js
render(<Circle />)
```

Now we can see that our tests are failing, now let's go to circle.js and fix these tests by adding dimensions as a default prop

```js
Circle.defaultProps = {
  backgroundColor: "blue",
  dimensions: { diameter: 200 }
}
```
