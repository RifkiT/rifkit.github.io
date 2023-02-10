(self["webpackChunkmovies_detail_app"] = self["webpackChunkmovies_detail_app"] || []).push([[513],{

/***/ 52637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Prefixer = __webpack_require__(37363)

class AtRule extends Prefixer {
  /**
   * Clone and add prefixes for at-rule
   */
  add(rule, prefix) {
    let prefixed = prefix + rule.name

    let already = rule.parent.some(
      i => i.name === prefixed && i.params === rule.params
    )
    if (already) {
      return undefined
    }

    let cloned = this.clone(rule, { name: prefixed })
    return rule.parent.insertBefore(rule, cloned)
  }

  /**
   * Clone node with prefixes
   */
  process(node) {
    let parent = this.parentPrefix(node)

    for (let prefix of this.prefixes) {
      if (!parent || parent === prefix) {
        this.add(node, prefix)
      }
    }
  }
}

module.exports = AtRule


/***/ }),

/***/ 19806:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let browserslist = __webpack_require__(31000)
let { agents } = __webpack_require__(90614)
let pico = __webpack_require__(74241)

let Browsers = __webpack_require__(81045)
let Prefixes = __webpack_require__(95417)
let dataPrefixes = __webpack_require__(85169)
let getInfo = __webpack_require__(55536)

let autoprefixerData = { browsers: agents, prefixes: dataPrefixes }

const WARNING =
  '\n' +
  '  Replace Autoprefixer `browsers` option to Browserslist config.\n' +
  '  Use `browserslist` key in `package.json` or `.browserslistrc` file.\n' +
  '\n' +
  '  Using `browsers` option can cause errors. Browserslist config can\n' +
  '  be used for Babel, Autoprefixer, postcss-normalize and other tools.\n' +
  '\n' +
  '  If you really need to use option, rename it to `overrideBrowserslist`.\n' +
  '\n' +
  '  Learn more at:\n' +
  '  https://github.com/browserslist/browserslist#readme\n' +
  '  https://twitter.com/browserslist\n' +
  '\n'

function isPlainObject(obj) {
  return Object.prototype.toString.apply(obj) === '[object Object]'
}

let cache = new Map()

function timeCapsule(result, prefixes) {
  if (prefixes.browsers.selected.length === 0) {
    return
  }
  if (prefixes.add.selectors.length > 0) {
    return
  }
  if (Object.keys(prefixes.add).length > 2) {
    return
  }
  /* c8 ignore next 11 */
  result.warn(
    'Autoprefixer target browsers do not need any prefixes.' +
      'You do not need Autoprefixer anymore.\n' +
      'Check your Browserslist config to be sure that your targets ' +
      'are set up correctly.\n' +
      '\n' +
      '  Learn more at:\n' +
      '  https://github.com/postcss/autoprefixer#readme\n' +
      '  https://github.com/browserslist/browserslist#readme\n' +
      '\n'
  )
}

module.exports = plugin

function plugin(...reqs) {
  let options
  if (reqs.length === 1 && isPlainObject(reqs[0])) {
    options = reqs[0]
    reqs = undefined
  } else if (reqs.length === 0 || (reqs.length === 1 && !reqs[0])) {
    reqs = undefined
  } else if (reqs.length <= 2 && (Array.isArray(reqs[0]) || !reqs[0])) {
    options = reqs[1]
    reqs = reqs[0]
  } else if (typeof reqs[reqs.length - 1] === 'object') {
    options = reqs.pop()
  }

  if (!options) {
    options = {}
  }

  if (options.browser) {
    throw new Error(
      'Change `browser` option to `overrideBrowserslist` in Autoprefixer'
    )
  } else if (options.browserslist) {
    throw new Error(
      'Change `browserslist` option to `overrideBrowserslist` in Autoprefixer'
    )
  }

  if (options.overrideBrowserslist) {
    reqs = options.overrideBrowserslist
  } else if (options.browsers) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn(
        pico.red(WARNING.replace(/`[^`]+`/g, i => pico.yellow(i.slice(1, -1))))
      )
    }
    reqs = options.browsers
  }

  let brwlstOpts = {
    ignoreUnknownVersions: options.ignoreUnknownVersions,
    stats: options.stats,
    env: options.env
  }

  function loadPrefixes(opts) {
    let d = autoprefixerData
    let browsers = new Browsers(d.browsers, reqs, opts, brwlstOpts)
    let key = browsers.selected.join(', ') + JSON.stringify(options)

    if (!cache.has(key)) {
      cache.set(key, new Prefixes(d.prefixes, browsers, options))
    }

    return cache.get(key)
  }

  return {
    postcssPlugin: 'autoprefixer',

    prepare(result) {
      let prefixes = loadPrefixes({
        from: result.opts.from,
        env: options.env
      })

      return {
        OnceExit(root) {
          timeCapsule(result, prefixes)
          if (options.remove !== false) {
            prefixes.processor.remove(root, result)
          }
          if (options.add !== false) {
            prefixes.processor.add(root, result)
          }
        }
      }
    },

    info(opts) {
      opts = opts || {}
      opts.from = opts.from || process.cwd()
      return getInfo(loadPrefixes(opts))
    },

    options,
    browsers: reqs
  }
}

plugin.postcss = true

/**
 * Autoprefixer data
 */
plugin.data = autoprefixerData

/**
 * Autoprefixer default browsers
 */
plugin.defaults = browserslist.defaults

/**
 * Inspect with default Autoprefixer
 */
plugin.info = () => plugin().info()


/***/ }),

/***/ 23882:
/***/ ((module) => {

function last(array) {
  return array[array.length - 1]
}

let brackets = {
  /**
   * Parse string to nodes tree
   */
  parse(str) {
    let current = ['']
    let stack = [current]

    for (let sym of str) {
      if (sym === '(') {
        current = ['']
        last(stack).push(current)
        stack.push(current)
        continue
      }

      if (sym === ')') {
        stack.pop()
        current = last(stack)
        current.push('')
        continue
      }

      current[current.length - 1] += sym
    }

    return stack[0]
  },

  /**
   * Generate output string by nodes tree
   */
  stringify(ast) {
    let result = ''
    for (let i of ast) {
      if (typeof i === 'object') {
        result += `(${brackets.stringify(i)})`
        continue
      }

      result += i
    }
    return result
  }
}

module.exports = brackets


/***/ }),

/***/ 81045:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let browserslist = __webpack_require__(31000)
let agents = (__webpack_require__(90614).agents)

let utils = __webpack_require__(6767)

class Browsers {
  /**
   * Return all prefixes for default browser data
   */
  static prefixes() {
    if (this.prefixesCache) {
      return this.prefixesCache
    }

    this.prefixesCache = []
    for (let name in agents) {
      this.prefixesCache.push(`-${agents[name].prefix}-`)
    }

    this.prefixesCache = utils
      .uniq(this.prefixesCache)
      .sort((a, b) => b.length - a.length)

    return this.prefixesCache
  }

  /**
   * Check is value contain any possible prefix
   */
  static withPrefix(value) {
    if (!this.prefixesRegexp) {
      this.prefixesRegexp = new RegExp(this.prefixes().join('|'))
    }

    return this.prefixesRegexp.test(value)
  }

  constructor(data, requirements, options, browserslistOpts) {
    this.data = data
    this.options = options || {}
    this.browserslistOpts = browserslistOpts || {}
    this.selected = this.parse(requirements)
  }

  /**
   * Return browsers selected by requirements
   */
  parse(requirements) {
    let opts = {}
    for (let i in this.browserslistOpts) {
      opts[i] = this.browserslistOpts[i]
    }
    opts.path = this.options.from
    return browserslist(requirements, opts)
  }

  /**
   * Return prefix for selected browser
   */
  prefix(browser) {
    let [name, version] = browser.split(' ')
    let data = this.data[name]

    let prefix = data.prefix_exceptions && data.prefix_exceptions[version]
    if (!prefix) {
      prefix = data.prefix
    }
    return `-${prefix}-`
  }

  /**
   * Is browser is selected by requirements
   */
  isSelected(browser) {
    return this.selected.includes(browser)
  }
}

module.exports = Browsers


/***/ }),

/***/ 68740:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Prefixer = __webpack_require__(37363)
let Browsers = __webpack_require__(81045)
let utils = __webpack_require__(6767)

class Declaration extends Prefixer {
  /**
   * Always true, because we already get prefixer by property name
   */
  check(/* decl */) {
    return true
  }

  /**
   * Return prefixed version of property
   */
  prefixed(prop, prefix) {
    return prefix + prop
  }

  /**
   * Return unprefixed version of property
   */
  normalize(prop) {
    return prop
  }

  /**
   * Check `value`, that it contain other prefixes, rather than `prefix`
   */
  otherPrefixes(value, prefix) {
    for (let other of Browsers.prefixes()) {
      if (other === prefix) {
        continue
      }
      if (value.includes(other)) {
        return value.replace(/var\([^)]+\)/, '').includes(other)
      }
    }
    return false
  }

  /**
   * Set prefix to declaration
   */
  set(decl, prefix) {
    decl.prop = this.prefixed(decl.prop, prefix)
    return decl
  }

  /**
   * Should we use visual cascade for prefixes
   */
  needCascade(decl) {
    if (!decl._autoprefixerCascade) {
      decl._autoprefixerCascade =
        this.all.options.cascade !== false && decl.raw('before').includes('\n')
    }
    return decl._autoprefixerCascade
  }

  /**
   * Return maximum length of possible prefixed property
   */
  maxPrefixed(prefixes, decl) {
    if (decl._autoprefixerMax) {
      return decl._autoprefixerMax
    }

    let max = 0
    for (let prefix of prefixes) {
      prefix = utils.removeNote(prefix)
      if (prefix.length > max) {
        max = prefix.length
      }
    }
    decl._autoprefixerMax = max

    return decl._autoprefixerMax
  }

  /**
   * Calculate indentation to create visual cascade
   */
  calcBefore(prefixes, decl, prefix = '') {
    let max = this.maxPrefixed(prefixes, decl)
    let diff = max - utils.removeNote(prefix).length

    let before = decl.raw('before')
    if (diff > 0) {
      before += Array(diff).fill(' ').join('')
    }

    return before
  }

  /**
   * Remove visual cascade
   */
  restoreBefore(decl) {
    let lines = decl.raw('before').split('\n')
    let min = lines[lines.length - 1]

    this.all.group(decl).up(prefixed => {
      let array = prefixed.raw('before').split('\n')
      let last = array[array.length - 1]
      if (last.length < min.length) {
        min = last
      }
    })

    lines[lines.length - 1] = min
    decl.raws.before = lines.join('\n')
  }

  /**
   * Clone and insert new declaration
   */
  insert(decl, prefix, prefixes) {
    let cloned = this.set(this.clone(decl), prefix)
    if (!cloned) return undefined

    let already = decl.parent.some(
      i => i.prop === cloned.prop && i.value === cloned.value
    )
    if (already) {
      return undefined
    }

    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, cloned)
  }

  /**
   * Did this declaration has this prefix above
   */
  isAlready(decl, prefixed) {
    let already = this.all.group(decl).up(i => i.prop === prefixed)
    if (!already) {
      already = this.all.group(decl).down(i => i.prop === prefixed)
    }
    return already
  }

  /**
   * Clone and add prefixes for declaration
   */
  add(decl, prefix, prefixes, result) {
    let prefixed = this.prefixed(decl.prop, prefix)
    if (
      this.isAlready(decl, prefixed) ||
      this.otherPrefixes(decl.value, prefix)
    ) {
      return undefined
    }
    return this.insert(decl, prefix, prefixes, result)
  }

  /**
   * Add spaces for visual cascade
   */
  process(decl, result) {
    if (!this.needCascade(decl)) {
      super.process(decl, result)
      return
    }

    let prefixes = super.process(decl, result)

    if (!prefixes || !prefixes.length) {
      return
    }

    this.restoreBefore(decl)
    decl.raws.before = this.calcBefore(prefixes, decl)
  }

  /**
   * Return list of prefixed properties to clean old prefixes
   */
  old(prop, prefix) {
    return [this.prefixed(prop, prefix)]
  }
}

module.exports = Declaration


/***/ }),

/***/ 40787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class AlignContent extends Declaration {
  /**
   * Change property name for 2012 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-line-pack'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'align-content'
  }

  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2012) {
      decl.value = AlignContent.oldValues[decl.value] || decl.value
      return super.set(decl, prefix)
    }
    if (spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

AlignContent.names = ['align-content', 'flex-line-pack']

AlignContent.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start',
  'space-between': 'justify',
  'space-around': 'distribute'
}

module.exports = AlignContent


/***/ }),

/***/ 90953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class AlignItems extends Declaration {
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-align'
    }
    if (spec === 2012) {
      return prefix + 'flex-align'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'align-items'
  }

  /**
   * Change value for 2009 and 2012 specs
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009 || spec === 2012) {
      decl.value = AlignItems.oldValues[decl.value] || decl.value
    }
    return super.set(decl, prefix)
  }
}

AlignItems.names = ['align-items', 'flex-align', 'box-align']

AlignItems.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start'
}

module.exports = AlignItems


/***/ }),

/***/ 53610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class AlignSelf extends Declaration {
  check(decl) {
    return (
      decl.parent &&
      !decl.parent.some(i => {
        return i.prop && i.prop.startsWith('grid-')
      })
    )
  }

  /**
   * Change property name for 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-item-align'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'align-self'
  }

  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2012) {
      decl.value = AlignSelf.oldValues[decl.value] || decl.value
      return super.set(decl, prefix)
    }
    if (spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

AlignSelf.names = ['align-self', 'flex-item-align']

AlignSelf.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start'
}

module.exports = AlignSelf


/***/ }),

/***/ 2369:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class Animation extends Declaration {
  /**
   * Don’t add prefixes for modern values.
   */
  check(decl) {
    return !decl.value.split(/\s+/).some(i => {
      let lower = i.toLowerCase()
      return lower === 'reverse' || lower === 'alternate-reverse'
    })
  }
}

Animation.names = ['animation', 'animation-direction']

module.exports = Animation


/***/ }),

/***/ 81682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let utils = __webpack_require__(6767)

class Appearance extends Declaration {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(
        this.prefixes.map(i => {
          if (i === '-ms-') {
            return '-webkit-'
          }
          return i
        })
      )
    }
  }
}

Appearance.names = ['appearance']

module.exports = Appearance


/***/ }),

/***/ 42025:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(36971)
let utils = __webpack_require__(6767)

class Autofill extends Selector {
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
      return ':-webkit-autofill'
    }
    return `:${prefix}autofill`
  }
}

Autofill.names = [':autofill']

module.exports = Autofill


/***/ }),

/***/ 80372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let utils = __webpack_require__(6767)

class BackdropFilter extends Declaration {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(
        this.prefixes.map(i => {
          return i === '-ms-' ? '-webkit-' : i
        })
      )
    }
  }
}

BackdropFilter.names = ['backdrop-filter']

module.exports = BackdropFilter


/***/ }),

/***/ 15933:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let utils = __webpack_require__(6767)

class BackgroundClip extends Declaration {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(
        this.prefixes.map(i => {
          return i === '-ms-' ? '-webkit-' : i
        })
      )
    }
  }

  check(decl) {
    return decl.value.toLowerCase() === 'text'
  }
}

BackgroundClip.names = ['background-clip']

module.exports = BackgroundClip


/***/ }),

/***/ 86397:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class BackgroundSize extends Declaration {
  /**
   * Duplication parameter for -webkit- browsers
   */
  set(decl, prefix) {
    let value = decl.value.toLowerCase()
    if (
      prefix === '-webkit-' &&
      !value.includes(' ') &&
      value !== 'contain' &&
      value !== 'cover'
    ) {
      decl.value = decl.value + ' ' + decl.value
    }
    return super.set(decl, prefix)
  }
}

BackgroundSize.names = ['background-size']

module.exports = BackgroundSize


/***/ }),

/***/ 86970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class BlockLogical extends Declaration {
  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(prop, prefix) {
    if (prop.includes('-start')) {
      return prefix + prop.replace('-block-start', '-before')
    }
    return prefix + prop.replace('-block-end', '-after')
  }

  /**
   * Return property name by spec
   */
  normalize(prop) {
    if (prop.includes('-before')) {
      return prop.replace('-before', '-block-start')
    }
    return prop.replace('-after', '-block-end')
  }
}

BlockLogical.names = [
  'border-block-start',
  'border-block-end',
  'margin-block-start',
  'margin-block-end',
  'padding-block-start',
  'padding-block-end',
  'border-before',
  'border-after',
  'margin-before',
  'margin-after',
  'padding-before',
  'padding-after'
]

module.exports = BlockLogical


/***/ }),

/***/ 58304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class BorderImage extends Declaration {
  /**
   * Remove fill parameter for prefixed declarations
   */
  set(decl, prefix) {
    decl.value = decl.value.replace(/\s+fill(\s)/, '$1')
    return super.set(decl, prefix)
  }
}

BorderImage.names = ['border-image']

module.exports = BorderImage


/***/ }),

/***/ 54472:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class BorderRadius extends Declaration {
  /**
   * Change syntax, when add Mozilla prefix
   */
  prefixed(prop, prefix) {
    if (prefix === '-moz-') {
      return prefix + (BorderRadius.toMozilla[prop] || prop)
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Return unprefixed version of property
   */
  normalize(prop) {
    return BorderRadius.toNormal[prop] || prop
  }
}

BorderRadius.names = ['border-radius']

BorderRadius.toMozilla = {}
BorderRadius.toNormal = {}

for (let ver of ['top', 'bottom']) {
  for (let hor of ['left', 'right']) {
    let normal = `border-${ver}-${hor}-radius`
    let mozilla = `border-radius-${ver}${hor}`

    BorderRadius.names.push(normal)
    BorderRadius.names.push(mozilla)

    BorderRadius.toMozilla[normal] = mozilla
    BorderRadius.toNormal[mozilla] = normal
  }
}

module.exports = BorderRadius


/***/ }),

/***/ 59271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class BreakProps extends Declaration {
  /**
   * Change name for -webkit- and -moz- prefix
   */
  prefixed(prop, prefix) {
    return `${prefix}column-${prop}`
  }

  /**
   * Return property name by final spec
   */
  normalize(prop) {
    if (prop.includes('inside')) {
      return 'break-inside'
    }
    if (prop.includes('before')) {
      return 'break-before'
    }
    return 'break-after'
  }

  /**
   * Change prefixed value for avoid-column and avoid-page
   */
  set(decl, prefix) {
    if (
      (decl.prop === 'break-inside' && decl.value === 'avoid-column') ||
      decl.value === 'avoid-page'
    ) {
      decl.value = 'avoid'
    }
    return super.set(decl, prefix)
  }

  /**
   * Don’t prefix some values
   */
  insert(decl, prefix, prefixes) {
    if (decl.prop !== 'break-inside') {
      return super.insert(decl, prefix, prefixes)
    }
    if (/region/i.test(decl.value) || /page/i.test(decl.value)) {
      return undefined
    }
    return super.insert(decl, prefix, prefixes)
  }
}

BreakProps.names = [
  'break-inside',
  'page-break-inside',
  'column-break-inside',
  'break-before',
  'page-break-before',
  'column-break-before',
  'break-after',
  'page-break-after',
  'column-break-after'
]

module.exports = BreakProps


/***/ }),

/***/ 92315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let list = (__webpack_require__(50020).list)

let Value = __webpack_require__(58149)

class CrossFade extends Value {
  replace(string, prefix) {
    return list
      .space(string)
      .map(value => {
        if (value.slice(0, +this.name.length + 1) !== this.name + '(') {
          return value
        }

        let close = value.lastIndexOf(')')
        let after = value.slice(close + 1)
        let args = value.slice(this.name.length + 1, close)

        if (prefix === '-webkit-') {
          let match = args.match(/\d*.?\d+%?/)
          if (match) {
            args = args.slice(match[0].length).trim()
            args += `, ${match[0]}`
          } else {
            args += ', 0.5'
          }
        }
        return prefix + this.name + '(' + args + ')' + after
      })
      .join(' ')
  }
}

CrossFade.names = ['cross-fade']

module.exports = CrossFade


/***/ }),

/***/ 37349:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let OldValue = __webpack_require__(49135)
let Value = __webpack_require__(58149)

class DisplayFlex extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'display-flex') {
      this.name = 'flex'
    }
  }

  /**
   * Faster check for flex value
   */
  check(decl) {
    return decl.prop === 'display' && decl.value === this.name
  }

  /**
   * Return value by spec
   */
  prefixed(prefix) {
    let spec, value
    ;[spec, prefix] = flexSpec(prefix)

    if (spec === 2009) {
      if (this.name === 'flex') {
        value = 'box'
      } else {
        value = 'inline-box'
      }
    } else if (spec === 2012) {
      if (this.name === 'flex') {
        value = 'flexbox'
      } else {
        value = 'inline-flexbox'
      }
    } else if (spec === 'final') {
      value = this.name
    }

    return prefix + value
  }

  /**
   * Add prefix to value depend on flebox spec version
   */
  replace(string, prefix) {
    return this.prefixed(prefix)
  }

  /**
   * Change value for old specs
   */
  old(prefix) {
    let prefixed = this.prefixed(prefix)
    if (!prefixed) return undefined
    return new OldValue(this.name, prefixed)
  }
}

DisplayFlex.names = ['display-flex', 'inline-flex']

module.exports = DisplayFlex


/***/ }),

/***/ 17676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Value = __webpack_require__(58149)

class DisplayGrid extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'display-grid') {
      this.name = 'grid'
    }
  }

  /**
   * Faster check for flex value
   */
  check(decl) {
    return decl.prop === 'display' && decl.value === this.name
  }
}

DisplayGrid.names = ['display-grid', 'inline-grid']

module.exports = DisplayGrid


/***/ })

}]);
//# sourceMappingURL=513.bundle.js.map