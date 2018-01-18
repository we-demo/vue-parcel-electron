import svd from 'simple-virtual-dom'

export function h (tag, attrs, children) {
  if (!tag) return null
  if (arguments.length === 2) {
    if (!isObject(attrs)) {
      children = attrs
      attrs = {}
    }
  }
  if (!Array.isArray(children)) {
    children = [children]
  }
  attrs = attrs || {}
  children = children || []
  return svd.el(tag, attrs, children)
}

function isObject (v) {
  let { toString } = Object.prototype
  return toString.call(v) === '[object Object]'
}
