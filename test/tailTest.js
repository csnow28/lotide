const tail = require("../tail")
const assert = require("chai").assert

// tests to ensure original array is not modified with code via tail function
describe("#tail", () => {
  it("returns '[Lighthouse, Labs]' for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [])
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), [])
  });
})