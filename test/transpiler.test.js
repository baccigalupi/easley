import assert from 'assert'

import Transpiler from '../src/transpiler'

describe("Transpiler", () => {
  it("converts an empty string to an empty array", () => {
    assert.deepEqual(new Transpiler("").convert(), [])
  })
})
