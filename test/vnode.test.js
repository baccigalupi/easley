import assert from 'assert'

import vnode from '../src/vnode'

describe("Easley.vnode", () => {
  it("when no data is given, returns an empty vnode", () => {
    const ast = vnode(null, null)
    assert.deepEqual(ast, {
      nodeName: null,
      attributes: {},
      children: []
    })
  })

  it("when given only a tagname, creates a vnode of that type", () => {
    const ast = vnode("div", null)
    assert.deepEqual(ast, {
      nodeName: "div",
      attributes: {},
      children: []
    })
  })
})