(self["webpackChunkmovies_detail_app"] = self["webpackChunkmovies_detail_app"] || []).push([[358],{

/***/ 48238:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(36971)
let utils = __webpack_require__(6767)

class FileSelectorButton extends Selector {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(this.prefixes.map(() => '-webkit-'))
    }
  }

  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return '::-webkit-file-upload-button'
    }
    return `::${prefix}file-selector-button`
  }
}

FileSelectorButton.names = ['::file-selector-button']

module.exports = FileSelectorButton


/***/ }),

/***/ 8846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Value = __webpack_require__(58149)

class FilterValue extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'filter-function') {
      this.name = 'filter'
    }
  }
}

FilterValue.names = ['filter', 'filter-function']

module.exports = FilterValue


/***/ }),

/***/ 71309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class Filter extends Declaration {
  /**
   * Check is it Internet Explorer filter
   */
  check(decl) {
    let v = decl.value
    return (
      !v.toLowerCase().includes('alpha(') &&
      !v.includes('DXImageTransform.Microsoft') &&
      !v.includes('data:image/svg+xml')
    )
  }
}

Filter.names = ['filter']

module.exports = Filter


/***/ }),

/***/ 31853:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class FlexBasis extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex-basis'
  }

  /**
   * Return flex property for 2012 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-preferred-size'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(decl, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012 || spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

FlexBasis.names = ['flex-basis', 'flex-preferred-size']

module.exports = FlexBasis


/***/ }),

/***/ 87185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class FlexDirection extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex-direction'
  }

  /**
   * Use two properties for 2009 spec
   */
  insert(decl, prefix, prefixes) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec !== 2009) {
      return super.insert(decl, prefix, prefixes)
    }
    let already = decl.parent.some(
      i =>
        i.prop === prefix + 'box-orient' || i.prop === prefix + 'box-direction'
    )
    if (already) {
      return undefined
    }

    let v = decl.value
    let orient, dir
    if (v === 'inherit' || v === 'initial' || v === 'unset') {
      orient = v
      dir = v
    } else {
      orient = v.includes('row') ? 'horizontal' : 'vertical'
      dir = v.includes('reverse') ? 'reverse' : 'normal'
    }

    let cloned = this.clone(decl)
    cloned.prop = prefix + 'box-orient'
    cloned.value = orient
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    decl.parent.insertBefore(decl, cloned)

    cloned = this.clone(decl)
    cloned.prop = prefix + 'box-direction'
    cloned.value = dir
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, cloned)
  }

  /**
   * Clean two properties for 2009 spec
   */
  old(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return [prefix + 'box-orient', prefix + 'box-direction']
    } else {
      return super.old(prop, prefix)
    }
  }
}

FlexDirection.names = ['flex-direction', 'box-direction', 'box-orient']

module.exports = FlexDirection


/***/ }),

/***/ 42294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class FlexFlow extends Declaration {
  /**
   * Use two properties for 2009 spec
   */
  insert(decl, prefix, prefixes) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec !== 2009) {
      return super.insert(decl, prefix, prefixes)
    }
    let values = decl.value
      .split(/\s+/)
      .filter(i => i !== 'wrap' && i !== 'nowrap' && 'wrap-reverse')
    if (values.length === 0) {
      return undefined
    }

    let already = decl.parent.some(
      i =>
        i.prop === prefix + 'box-orient' || i.prop === prefix + 'box-direction'
    )
    if (already) {
      return undefined
    }

    let value = values[0]
    let orient = value.includes('row') ? 'horizontal' : 'vertical'
    let dir = value.includes('reverse') ? 'reverse' : 'normal'

    let cloned = this.clone(decl)
    cloned.prop = prefix + 'box-orient'
    cloned.value = orient
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    decl.parent.insertBefore(decl, cloned)

    cloned = this.clone(decl)
    cloned.prop = prefix + 'box-direction'
    cloned.value = dir
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, cloned)
  }
}

FlexFlow.names = ['flex-flow', 'box-direction', 'box-orient']

module.exports = FlexFlow


/***/ }),

/***/ 420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class Flex extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex'
  }

  /**
   * Return flex property for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-flex'
    }
    if (spec === 2012) {
      return prefix + 'flex-positive'
    }
    return super.prefixed(prop, prefix)
  }
}

Flex.names = ['flex-grow', 'flex-positive']

module.exports = Flex


/***/ }),

/***/ 64347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class FlexShrink extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex-shrink'
  }

  /**
   * Return flex property for 2012 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-negative'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(decl, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012 || spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

FlexShrink.names = ['flex-shrink', 'flex-negative']

module.exports = FlexShrink


/***/ }),

/***/ 21213:
/***/ ((module) => {

/**
 * Return flexbox spec versions by prefix
 */
module.exports = function (prefix) {
  let spec
  if (prefix === '-webkit- 2009' || prefix === '-moz-') {
    spec = 2009
  } else if (prefix === '-ms-') {
    spec = 2012
  } else if (prefix === '-webkit-') {
    spec = 'final'
  }

  if (prefix === '-webkit- 2009') {
    prefix = '-webkit-'
  }

  return [spec, prefix]
}


/***/ }),

/***/ 8368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class FlexWrap extends Declaration {
  /**
   * Don't add prefix for 2009 spec
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec !== 2009) {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

FlexWrap.names = ['flex-wrap']

module.exports = FlexWrap


/***/ }),

/***/ 14402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let list = (__webpack_require__(50020).list)

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class Flex extends Declaration {
  /**
   * Change property name for 2009 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-flex'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex'
  }

  /**
   * Spec 2009 supports only first argument
   * Spec 2012 disallows unitless basis
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009) {
      decl.value = list.space(decl.value)[0]
      decl.value = Flex.oldValues[decl.value] || decl.value
      return super.set(decl, prefix)
    }
    if (spec === 2012) {
      let components = list.space(decl.value)
      if (components.length === 3 && components[2] === '0') {
        decl.value = components.slice(0, 2).concat('0px').join(' ')
      }
    }
    return super.set(decl, prefix)
  }
}

Flex.names = ['flex', 'box-flex']

Flex.oldValues = {
  auto: '1',
  none: '0'
}

module.exports = Flex


/***/ }),

/***/ 86487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(36971)

class Fullscreen extends Selector {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return ':-webkit-full-screen'
    }
    if (prefix === '-moz-') {
      return ':-moz-full-screen'
    }
    return `:${prefix}fullscreen`
  }
}

Fullscreen.names = [':fullscreen']

module.exports = Fullscreen


/***/ }),

/***/ 65810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let parser = __webpack_require__(9254)
let range = __webpack_require__(51794)

let OldValue = __webpack_require__(49135)
let Value = __webpack_require__(58149)
let utils = __webpack_require__(6767)

let IS_DIRECTION = /top|left|right|bottom/gi

class Gradient extends Value {
  /**
   * Change degrees for webkit prefix
   */
  replace(string, prefix) {
    let ast = parser(string)
    for (let node of ast.nodes) {
      let gradientName = this.name // gradient name
      if (node.type === 'function' && node.value === gradientName) {
        node.nodes = this.newDirection(node.nodes)
        node.nodes = this.normalize(node.nodes, gradientName)
        if (prefix === '-webkit- old') {
          let changes = this.oldWebkit(node)
          if (!changes) {
            return false
          }
        } else {
          node.nodes = this.convertDirection(node.nodes)
          node.value = prefix + node.value
        }
      }
    }
    return ast.toString()
  }

  /**
   * Replace first token
   */
  replaceFirst(params, ...words) {
    let prefix = words.map(i => {
      if (i === ' ') {
        return { type: 'space', value: i }
      }
      return { type: 'word', value: i }
    })
    return prefix.concat(params.slice(1))
  }

  /**
   * Convert angle unit to deg
   */
  normalizeUnit(str, full) {
    let num = parseFloat(str)
    let deg = (num / full) * 360
    return `${deg}deg`
  }

  /**
   * Normalize angle
   */
  normalize(nodes, gradientName) {
    if (!nodes[0]) return nodes

    if (/-?\d+(.\d+)?grad/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 400)
    } else if (/-?\d+(.\d+)?rad/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 2 * Math.PI)
    } else if (/-?\d+(.\d+)?turn/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 1)
    } else if (nodes[0].value.includes('deg')) {
      let num = parseFloat(nodes[0].value)
      num = range.wrap(0, 360, num)
      nodes[0].value = `${num}deg`
    }

    if (
      gradientName === 'linear-gradient' ||
      gradientName === 'repeating-linear-gradient'
    ) {
      let direction = nodes[0].value

      // Unitless zero for `<angle>` values are allowed in CSS gradients and transforms.
      // Spec: https://github.com/w3c/csswg-drafts/commit/602789171429b2231223ab1e5acf8f7f11652eb3
      if (direction === '0deg' || direction === '0') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'top')
      } else if (direction === '90deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'right')
      } else if (direction === '180deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'bottom') // default value
      } else if (direction === '270deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'left')
      }
    }

    return nodes
  }

  /**
   * Replace old direction to new
   */
  newDirection(params) {
    if (params[0].value === 'to') {
      return params
    }
    IS_DIRECTION.lastIndex = 0 // reset search index of global regexp
    if (!IS_DIRECTION.test(params[0].value)) {
      return params
    }

    params.unshift(
      {
        type: 'word',
        value: 'to'
      },
      {
        type: 'space',
        value: ' '
      }
    )

    for (let i = 2; i < params.length; i++) {
      if (params[i].type === 'div') {
        break
      }
      if (params[i].type === 'word') {
        params[i].value = this.revertDirection(params[i].value)
      }
    }

    return params
  }

  /**
   * Look for at word
   */
  isRadial(params) {
    let state = 'before'
    for (let param of params) {
      if (state === 'before' && param.type === 'space') {
        state = 'at'
      } else if (state === 'at' && param.value === 'at') {
        state = 'after'
      } else if (state === 'after' && param.type === 'space') {
        return true
      } else if (param.type === 'div') {
        break
      } else {
        state = 'before'
      }
    }
    return false
  }

  /**
   * Change new direction to old
   */
  convertDirection(params) {
    if (params.length > 0) {
      if (params[0].value === 'to') {
        this.fixDirection(params)
      } else if (params[0].value.includes('deg')) {
        this.fixAngle(params)
      } else if (this.isRadial(params)) {
        this.fixRadial(params)
      }
    }
    return params
  }

  /**
   * Replace `to top left` to `bottom right`
   */
  fixDirection(params) {
    params.splice(0, 2)

    for (let param of params) {
      if (param.type === 'div') {
        break
      }
      if (param.type === 'word') {
        param.value = this.revertDirection(param.value)
      }
    }
  }

  /**
   * Add 90 degrees
   */
  fixAngle(params) {
    let first = params[0].value
    first = parseFloat(first)
    first = Math.abs(450 - first) % 360
    first = this.roundFloat(first, 3)
    params[0].value = `${first}deg`
  }

  /**
   * Fix radial direction syntax
   */
  fixRadial(params) {
    let first = []
    let second = []
    let a, b, c, i, next

    for (i = 0; i < params.length - 2; i++) {
      a = params[i]
      b = params[i + 1]
      c = params[i + 2]
      if (a.type === 'space' && b.value === 'at' && c.type === 'space') {
        next = i + 3
        break
      } else {
        first.push(a)
      }
    }

    let div
    for (i = next; i < params.length; i++) {
      if (params[i].type === 'div') {
        div = params[i]
        break
      } else {
        second.push(params[i])
      }
    }

    params.splice(0, i, ...second, div, ...first)
  }

  revertDirection(word) {
    return Gradient.directions[word.toLowerCase()] || word
  }

  /**
   * Round float and save digits under dot
   */
  roundFloat(float, digits) {
    return parseFloat(float.toFixed(digits))
  }

  /**
   * Convert to old webkit syntax
   */
  oldWebkit(node) {
    let { nodes } = node
    let string = parser.stringify(node.nodes)

    if (this.name !== 'linear-gradient') {
      return false
    }
    if (nodes[0] && nodes[0].value.includes('deg')) {
      return false
    }
    if (
      string.includes('px') ||
      string.includes('-corner') ||
      string.includes('-side')
    ) {
      return false
    }

    let params = [[]]
    for (let i of nodes) {
      params[params.length - 1].push(i)
      if (i.type === 'div' && i.value === ',') {
        params.push([])
      }
    }

    this.oldDirection(params)
    this.colorStops(params)

    node.nodes = []
    for (let param of params) {
      node.nodes = node.nodes.concat(param)
    }

    node.nodes.unshift(
      { type: 'word', value: 'linear' },
      this.cloneDiv(node.nodes)
    )
    node.value = '-webkit-gradient'

    return true
  }

  /**
   * Change direction syntax to old webkit
   */
  oldDirection(params) {
    let div = this.cloneDiv(params[0])

    if (params[0][0].value !== 'to') {
      return params.unshift([
        { type: 'word', value: Gradient.oldDirections.bottom },
        div
      ])
    } else {
      let words = []
      for (let node of params[0].slice(2)) {
        if (node.type === 'word') {
          words.push(node.value.toLowerCase())
        }
      }

      words = words.join(' ')
      let old = Gradient.oldDirections[words] || words

      params[0] = [{ type: 'word', value: old }, div]
      return params[0]
    }
  }

  /**
   * Get div token from exists parameters
   */
  cloneDiv(params) {
    for (let i of params) {
      if (i.type === 'div' && i.value === ',') {
        return i
      }
    }
    return { type: 'div', value: ',', after: ' ' }
  }

  /**
   * Change colors syntax to old webkit
   */
  colorStops(params) {
    let result = []
    for (let i = 0; i < params.length; i++) {
      let pos
      let param = params[i]
      let item
      if (i === 0) {
        continue
      }

      let color = parser.stringify(param[0])
      if (param[1] && param[1].type === 'word') {
        pos = param[1].value
      } else if (param[2] && param[2].type === 'word') {
        pos = param[2].value
      }

      let stop
      if (i === 1 && (!pos || pos === '0%')) {
        stop = `from(${color})`
      } else if (i === params.length - 1 && (!pos || pos === '100%')) {
        stop = `to(${color})`
      } else if (pos) {
        stop = `color-stop(${pos}, ${color})`
      } else {
        stop = `color-stop(${color})`
      }

      let div = param[param.length - 1]
      params[i] = [{ type: 'word', value: stop }]
      if (div.type === 'div' && div.value === ',') {
        item = params[i].push(div)
      }
      result.push(item)
    }
    return result
  }

  /**
   * Remove old WebKit gradient too
   */
  old(prefix) {
    if (prefix === '-webkit-') {
      let type
      if (this.name === 'linear-gradient') {
        type = 'linear'
      } else if (this.name === 'repeating-linear-gradient') {
        type = 'repeating-linear'
      } else if (this.name === 'repeating-radial-gradient') {
        type = 'repeating-radial'
      } else {
        type = 'radial'
      }
      let string = '-gradient'
      let regexp = utils.regexp(
        `-webkit-(${type}-gradient|gradient\\(\\s*${type})`,
        false
      )

      return new OldValue(this.name, prefix + this.name, string, regexp)
    } else {
      return super.old(prefix)
    }
  }

  /**
   * Do not add non-webkit prefixes for list-style and object
   */
  add(decl, prefix) {
    let p = decl.prop
    if (p.includes('mask')) {
      if (prefix === '-webkit-' || prefix === '-webkit- old') {
        return super.add(decl, prefix)
      }
    } else if (
      p === 'list-style' ||
      p === 'list-style-image' ||
      p === 'content'
    ) {
      if (prefix === '-webkit-' || prefix === '-webkit- old') {
        return super.add(decl, prefix)
      }
    } else {
      return super.add(decl, prefix)
    }
    return undefined
  }
}

Gradient.names = [
  'linear-gradient',
  'repeating-linear-gradient',
  'radial-gradient',
  'repeating-radial-gradient'
]

Gradient.directions = {
  top: 'bottom', // default value
  left: 'right',
  bottom: 'top',
  right: 'left'
}

// Direction to replace
Gradient.oldDirections = {
  'top': 'left bottom, left top',
  'left': 'right top, left top',
  'bottom': 'left top, left bottom',
  'right': 'left top, right top',

  'top right': 'left bottom, right top',
  'top left': 'right bottom, left top',
  'right top': 'left bottom, right top',
  'right bottom': 'left top, right bottom',
  'bottom right': 'left top, right bottom',
  'bottom left': 'right top, left bottom',
  'left top': 'right bottom, left top',
  'left bottom': 'right top, left bottom'
}

module.exports = Gradient


/***/ }),

/***/ 82271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let utils = __webpack_require__(84519)

class GridArea extends Declaration {
  /**
   * Translate grid-area to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let values = utils.parse(decl)

    let [rowStart, rowSpan] = utils.translate(values, 0, 2)
    let [columnStart, columnSpan] = utils.translate(values, 1, 3)

    ;[
      ['grid-row', rowStart],
      ['grid-row-span', rowSpan],
      ['grid-column', columnStart],
      ['grid-column-span', columnSpan]
    ].forEach(([prop, value]) => {
      utils.insertDecl(decl, prop, value)
    })

    utils.warnTemplateSelectorNotFound(decl, result)
    utils.warnIfGridRowColumnExists(decl, result)

    return undefined
  }
}

GridArea.names = ['grid-area']

module.exports = GridArea


/***/ }),

/***/ 28575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class GridColumnAlign extends Declaration {
  /**
   * Do not prefix flexbox values
   */
  check(decl) {
    return !decl.value.includes('flex-') && decl.value !== 'baseline'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    return prefix + 'grid-column-align'
  }

  /**
   * Change IE property back
   */
  normalize() {
    return 'justify-self'
  }
}

GridColumnAlign.names = ['grid-column-align']

module.exports = GridColumnAlign


/***/ }),

/***/ 68570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let { isPureNumber } = __webpack_require__(6767)

class GridEnd extends Declaration {
  /**
   * Change repeating syntax for IE
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let clonedDecl = this.clone(decl)

    let startProp = decl.prop.replace(/end$/, 'start')
    let spanProp = prefix + decl.prop.replace(/end$/, 'span')

    if (decl.parent.some(i => i.prop === spanProp)) {
      return undefined
    }

    clonedDecl.prop = spanProp

    if (decl.value.includes('span')) {
      clonedDecl.value = decl.value.replace(/span\s/i, '')
    } else {
      let startDecl
      decl.parent.walkDecls(startProp, d => {
        startDecl = d
      })
      if (startDecl) {
        if (isPureNumber(startDecl.value)) {
          let value = Number(decl.value) - Number(startDecl.value) + ''
          clonedDecl.value = value
        } else {
          return undefined
        }
      } else {
        decl.warn(
          result,
          `Can not prefix ${decl.prop} (${startProp} is not found)`
        )
      }
    }

    decl.cloneBefore(clonedDecl)

    return undefined
  }
}

GridEnd.names = ['grid-row-end', 'grid-column-end']

module.exports = GridEnd


/***/ })

}]);
//# sourceMappingURL=358.bundle.js.map