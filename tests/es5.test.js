require('../es5')

test("Testing polyfill", () => {
  expect(String([...10])).toBe(String([0,1,2,3,4,5,6,7,8,9])) // Array === Array is false in JS
  expect([...55].length).toBe(55)
})