// 渲染器函数
function renderer(vnode, container) {
  if (typeof vnode.tag === 'string') {
    mountElement(vnode, container)
  } else if (typeof vnode.tag === 'object') {
    mountComponent(vnode, container)
  }
}

// 挂载元素类型的 vnode
function mountElement(vnode, container) {
  const el = document.createElement(vnode.tag)

  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      el.addEventListener(key.substr(2).toLowerCase(), vnode.props[key])
      el.addEventListener
    }
  }

  if (typeof vnode.children === 'string') {
    el.appendChild(document.createTextNode(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach((child) => mountElement(child, el))
  }

  container.appendChild(el)
}

// 挂载组件类型的 vnode
function mountComponent(vnode, container) {
  const subtree = vnode.tag.render()
  renderer(subtree, container)
}
