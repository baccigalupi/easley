const vnode = (nodeName, attributes, ...args) => {
  attributes = attributes || {}
  const children = [].concat(...args)
  return {
    nodeName,
    attributes,
    children,
  }
}

export default vnode