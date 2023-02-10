(self["webpackChunkmovies_detail_app"] = self["webpackChunkmovies_detail_app"] || []).push([[703],{

/***/ 41354:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class GridRowAlign extends Declaration {
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
    return prefix + 'grid-row-align'
  }

  /**
   * Change IE property back
   */
  normalize() {
    return 'align-self'
  }
}

GridRowAlign.names = ['grid-row-align']

module.exports = GridRowAlign


/***/ }),

/***/ 9483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let utils = __webpack_require__(84519)

class GridRowColumn extends Declaration {
  /**
   * Translate grid-row / grid-column to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let values = utils.parse(decl)
    let [start, span] = utils.translate(values, 0, 1)

    let hasStartValueSpan = values[0] && values[0].includes('span')

    if (hasStartValueSpan) {
      span = values[0].join('').replace(/\D/g, '')
    }

    ;[
      [decl.prop, start],
      [`${decl.prop}-span`, span]
    ].forEach(([prop, value]) => {
      utils.insertDecl(decl, prop, value)
    })

    return undefined
  }
}

GridRowColumn.names = ['grid-row', 'grid-column']

module.exports = GridRowColumn


/***/ }),

/***/ 19014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let {
  prefixTrackProp,
  prefixTrackValue,
  autoplaceGridItems,
  getGridGap,
  inheritGridGap
} = __webpack_require__(84519)
let Processor = __webpack_require__(92198)

class GridRowsColumns extends Declaration {
  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    if (prefix === '-ms-') {
      return prefixTrackProp({ prop, prefix })
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Change IE property back
   */
  normalize(prop) {
    return prop.replace(/^grid-(rows|columns)/, 'grid-template-$1')
  }

  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let { parent, prop, value } = decl
    let isRowProp = prop.includes('rows')
    let isColumnProp = prop.includes('columns')

    let hasGridTemplate = parent.some(
      i => i.prop === 'grid-template' || i.prop === 'grid-template-areas'
    )

    /**
     * Not to prefix rows declaration if grid-template(-areas) is present
     */
    if (hasGridTemplate && isRowProp) {
      return false
    }

    let processor = new Processor({ options: {} })
    let status = processor.gridStatus(parent, result)
    let gap = getGridGap(decl)
    gap = inheritGridGap(decl, gap) || gap

    let gapValue = isRowProp ? gap.row : gap.column

    if ((status === 'no-autoplace' || status === true) && !hasGridTemplate) {
      gapValue = null
    }

    let prefixValue = prefixTrackValue({
      value,
      gap: gapValue
    })

    /**
     * Insert prefixes
     */
    decl.cloneBefore({
      prop: prefixTrackProp({ prop, prefix }),
      value: prefixValue
    })

    let autoflow = parent.nodes.find(i => i.prop === 'grid-auto-flow')
    let autoflowValue = 'row'

    if (autoflow && !processor.disabled(autoflow, result)) {
      autoflowValue = autoflow.value.trim()
    }
    if (status === 'autoplace') {
      /**
       * Show warning if grid-template-rows decl is not found
       */
      let rowDecl = parent.nodes.find(i => i.prop === 'grid-template-rows')

      if (!rowDecl && hasGridTemplate) {
        return undefined
      } else if (!rowDecl && !hasGridTemplate) {
        decl.warn(
          result,
          'Autoplacement does not work without grid-template-rows property'
        )
        return undefined
      }

      /**
       * Show warning if grid-template-columns decl is not found
       */
      let columnDecl = parent.nodes.find(i => {
        return i.prop === 'grid-template-columns'
      })
      if (!columnDecl && !hasGridTemplate) {
        decl.warn(
          result,
          'Autoplacement does not work without grid-template-columns property'
        )
      }

      /**
       * Autoplace grid items
       */
      if (isColumnProp && !hasGridTemplate) {
        autoplaceGridItems(decl, result, gap, autoflowValue)
      }
    }

    return undefined
  }
}

GridRowsColumns.names = [
  'grid-template-rows',
  'grid-template-columns',
  'grid-rows',
  'grid-columns'
]

module.exports = GridRowsColumns


/***/ }),

/***/ 22755:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class GridStart extends Declaration {
  /**
   * Do not add prefix for unsupported value in IE
   */
  check(decl) {
    let value = decl.value
    return !value.includes('/') && !value.includes('span')
  }

  /**
   * Return a final spec property
   */
  normalize(prop) {
    return prop.replace('-start', '')
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    let result = super.prefixed(prop, prefix)
    if (prefix === '-ms-') {
      result = result.replace('-start', '')
    }
    return result
  }
}

GridStart.names = ['grid-row-start', 'grid-column-start']

module.exports = GridStart


/***/ }),

/***/ 22602:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let {
  parseGridAreas,
  warnMissedAreas,
  prefixTrackProp,
  prefixTrackValue,
  getGridGap,
  warnGridGap,
  inheritGridGap
} = __webpack_require__(84519)

function getGridRows(tpl) {
  return tpl
    .trim()
    .slice(1, -1)
    .split(/["']\s*["']?/g)
}

class GridTemplateAreas extends Declaration {
  /**
   * Translate grid-template-areas to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let hasColumns = false
    let hasRows = false
    let parent = decl.parent
    let gap = getGridGap(decl)
    gap = inheritGridGap(decl, gap) || gap

    // remove already prefixed rows
    // to prevent doubling prefixes
    parent.walkDecls(/-ms-grid-rows/, i => i.remove())

    // add empty tracks to rows
    parent.walkDecls(/grid-template-(rows|columns)/, trackDecl => {
      if (trackDecl.prop === 'grid-template-rows') {
        hasRows = true
        let { prop, value } = trackDecl
        trackDecl.cloneBefore({
          prop: prefixTrackProp({ prop, prefix }),
          value: prefixTrackValue({ value, gap: gap.row })
        })
      } else {
        hasColumns = true
      }
    })

    let gridRows = getGridRows(decl.value)

    if (hasColumns && !hasRows && gap.row && gridRows.length > 1) {
      decl.cloneBefore({
        prop: '-ms-grid-rows',
        value: prefixTrackValue({
          value: `repeat(${gridRows.length}, auto)`,
          gap: gap.row
        }),
        raws: {}
      })
    }

    // warnings
    warnGridGap({
      gap,
      hasColumns,
      decl,
      result
    })

    let areas = parseGridAreas({
      rows: gridRows,
      gap
    })

    warnMissedAreas(areas, decl, result)

    return decl
  }
}

GridTemplateAreas.names = ['grid-template-areas']

module.exports = GridTemplateAreas


/***/ }),

/***/ 11198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let {
  parseTemplate,
  warnMissedAreas,
  getGridGap,
  warnGridGap,
  inheritGridGap
} = __webpack_require__(84519)

class GridTemplate extends Declaration {
  /**
   * Translate grid-template to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    if (decl.parent.some(i => i.prop === '-ms-grid-rows')) {
      return undefined
    }

    let gap = getGridGap(decl)

    /**
     * we must insert inherited gap values in some cases:
     * if we are inside media query && if we have no grid-gap value
     */
    let inheritedGap = inheritGridGap(decl, gap)

    let { rows, columns, areas } = parseTemplate({
      decl,
      gap: inheritedGap || gap
    })

    let hasAreas = Object.keys(areas).length > 0
    let hasRows = Boolean(rows)
    let hasColumns = Boolean(columns)

    warnGridGap({
      gap,
      hasColumns,
      decl,
      result
    })

    warnMissedAreas(areas, decl, result)

    if ((hasRows && hasColumns) || hasAreas) {
      decl.cloneBefore({
        prop: '-ms-grid-rows',
        value: rows,
        raws: {}
      })
    }

    if (hasColumns) {
      decl.cloneBefore({
        prop: '-ms-grid-columns',
        value: columns,
        raws: {}
      })
    }

    return decl
  }
}

GridTemplate.names = ['grid-template']

module.exports = GridTemplate


/***/ }),

/***/ 84519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

let parser = __webpack_require__(9254)
let list = (__webpack_require__(50020).list)

let uniq = (__webpack_require__(6767).uniq)
let escapeRegexp = (__webpack_require__(6767).escapeRegexp)
let splitSelector = (__webpack_require__(6767).splitSelector)

function convert(value) {
  if (
    value &&
    value.length === 2 &&
    value[0] === 'span' &&
    parseInt(value[1], 10) > 0
  ) {
    return [false, parseInt(value[1], 10)]
  }

  if (value && value.length === 1 && parseInt(value[0], 10) > 0) {
    return [parseInt(value[0], 10), false]
  }

  return [false, false]
}

exports.translate = translate

function translate(values, startIndex, endIndex) {
  let startValue = values[startIndex]
  let endValue = values[endIndex]

  if (!startValue) {
    return [false, false]
  }

  let [start, spanStart] = convert(startValue)
  let [end, spanEnd] = convert(endValue)

  if (start && !endValue) {
    return [start, false]
  }

  if (spanStart && end) {
    return [end - spanStart, spanStart]
  }

  if (start && spanEnd) {
    return [start, spanEnd]
  }

  if (start && end) {
    return [start, end - start]
  }

  return [false, false]
}

exports.parse = parse

function parse(decl) {
  let node = parser(decl.value)

  let values = []
  let current = 0
  values[current] = []

  for (let i of node.nodes) {
    if (i.type === 'div') {
      current += 1
      values[current] = []
    } else if (i.type === 'word') {
      values[current].push(i.value)
    }
  }

  return values
}

exports.insertDecl = insertDecl

function insertDecl(decl, prop, value) {
  if (value && !decl.parent.some(i => i.prop === `-ms-${prop}`)) {
    decl.cloneBefore({
      prop: `-ms-${prop}`,
      value: value.toString()
    })
  }
}

// Track transforms

exports.prefixTrackProp = prefixTrackProp

function prefixTrackProp({ prop, prefix }) {
  return prefix + prop.replace('template-', '')
}

function transformRepeat({ nodes }, { gap }) {
  let { count, size } = nodes.reduce(
    (result, node) => {
      if (node.type === 'div' && node.value === ',') {
        result.key = 'size'
      } else {
        result[result.key].push(parser.stringify(node))
      }
      return result
    },
    {
      key: 'count',
      size: [],
      count: []
    }
  )

  // insert gap values
  if (gap) {
    size = size.filter(i => i.trim())
    let val = []
    for (let i = 1; i <= count; i++) {
      size.forEach((item, index) => {
        if (index > 0 || i > 1) {
          val.push(gap)
        }
        val.push(item)
      })
    }

    return val.join(' ')
  }

  return `(${size.join('')})[${count.join('')}]`
}

exports.prefixTrackValue = prefixTrackValue

function prefixTrackValue({ value, gap }) {
  let result = parser(value).nodes.reduce((nodes, node) => {
    if (node.type === 'function' && node.value === 'repeat') {
      return nodes.concat({
        type: 'word',
        value: transformRepeat(node, { gap })
      })
    }
    if (gap && node.type === 'space') {
      return nodes.concat(
        {
          type: 'space',
          value: ' '
        },
        {
          type: 'word',
          value: gap
        },
        node
      )
    }
    return nodes.concat(node)
  }, [])

  return parser.stringify(result)
}

// Parse grid-template-areas

let DOTS = /^\.+$/

function track(start, end) {
  return { start, end, span: end - start }
}

function getColumns(line) {
  return line.trim().split(/\s+/g)
}

exports.parseGridAreas = parseGridAreas

function parseGridAreas({ rows, gap }) {
  return rows.reduce((areas, line, rowIndex) => {
    if (gap.row) rowIndex *= 2

    if (line.trim() === '') return areas

    getColumns(line).forEach((area, columnIndex) => {
      if (DOTS.test(area)) return

      if (gap.column) columnIndex *= 2

      if (typeof areas[area] === 'undefined') {
        areas[area] = {
          column: track(columnIndex + 1, columnIndex + 2),
          row: track(rowIndex + 1, rowIndex + 2)
        }
      } else {
        let { column, row } = areas[area]

        column.start = Math.min(column.start, columnIndex + 1)
        column.end = Math.max(column.end, columnIndex + 2)
        column.span = column.end - column.start

        row.start = Math.min(row.start, rowIndex + 1)
        row.end = Math.max(row.end, rowIndex + 2)
        row.span = row.end - row.start
      }
    })

    return areas
  }, {})
}

// Parse grid-template

function testTrack(node) {
  return node.type === 'word' && /^\[.+]$/.test(node.value)
}

function verifyRowSize(result) {
  if (result.areas.length > result.rows.length) {
    result.rows.push('auto')
  }
  return result
}

exports.parseTemplate = parseTemplate

function parseTemplate({ decl, gap }) {
  let gridTemplate = parser(decl.value).nodes.reduce(
    (result, node) => {
      let { type, value } = node

      if (testTrack(node) || type === 'space') return result

      // area
      if (type === 'string') {
        result = verifyRowSize(result)
        result.areas.push(value)
      }

      // values and function
      if (type === 'word' || type === 'function') {
        result[result.key].push(parser.stringify(node))
      }

      // divider(/)
      if (type === 'div' && value === '/') {
        result.key = 'columns'
        result = verifyRowSize(result)
      }

      return result
    },
    {
      key: 'rows',
      columns: [],
      rows: [],
      areas: []
    }
  )

  return {
    areas: parseGridAreas({
      rows: gridTemplate.areas,
      gap
    }),
    columns: prefixTrackValue({
      value: gridTemplate.columns.join(' '),
      gap: gap.column
    }),
    rows: prefixTrackValue({
      value: gridTemplate.rows.join(' '),
      gap: gap.row
    })
  }
}

// Insert parsed grid areas

/**
 * Get an array of -ms- prefixed props and values
 * @param  {Object} [area] area object with column and row data
 * @param  {Boolean} [addRowSpan] should we add grid-column-row value?
 * @param  {Boolean} [addColumnSpan] should we add grid-column-span value?
 * @return {Array<Object>}
 */
function getMSDecls(area, addRowSpan = false, addColumnSpan = false) {
  let result = [
    {
      prop: '-ms-grid-row',
      value: String(area.row.start)
    }
  ]
  if (area.row.span > 1 || addRowSpan) {
    result.push({
      prop: '-ms-grid-row-span',
      value: String(area.row.span)
    })
  }
  result.push({
    prop: '-ms-grid-column',
    value: String(area.column.start)
  })
  if (area.column.span > 1 || addColumnSpan) {
    result.push({
      prop: '-ms-grid-column-span',
      value: String(area.column.span)
    })
  }
  return result
}

function getParentMedia(parent) {
  if (parent.type === 'atrule' && parent.name === 'media') {
    return parent
  }
  if (!parent.parent) {
    return false
  }
  return getParentMedia(parent.parent)
}

/**
 * change selectors for rules with duplicate grid-areas.
 * @param  {Array<Rule>} rules
 * @param  {Array<String>} templateSelectors
 * @return {Array<Rule>} rules with changed selectors
 */
function changeDuplicateAreaSelectors(ruleSelectors, templateSelectors) {
  ruleSelectors = ruleSelectors.map(selector => {
    let selectorBySpace = list.space(selector)
    let selectorByComma = list.comma(selector)

    if (selectorBySpace.length > selectorByComma.length) {
      selector = selectorBySpace.slice(-1).join('')
    }
    return selector
  })

  return ruleSelectors.map(ruleSelector => {
    let newSelector = templateSelectors.map((tplSelector, index) => {
      let space = index === 0 ? '' : ' '
      return `${space}${tplSelector} > ${ruleSelector}`
    })

    return newSelector
  })
}

/**
 * check if selector of rules are equal
 * @param  {Rule} ruleA
 * @param  {Rule} ruleB
 * @return {Boolean}
 */
function selectorsEqual(ruleA, ruleB) {
  return ruleA.selectors.some(sel => {
    return ruleB.selectors.includes(sel)
  })
}

/**
 * Parse data from all grid-template(-areas) declarations
 * @param  {Root} css css root
 * @return {Object} parsed data
 */
function parseGridTemplatesData(css) {
  let parsed = []

  // we walk through every grid-template(-areas) declaration and store
  // data with the same area names inside the item
  css.walkDecls(/grid-template(-areas)?$/, d => {
    let rule = d.parent
    let media = getParentMedia(rule)
    let gap = getGridGap(d)
    let inheritedGap = inheritGridGap(d, gap)
    let { areas } = parseTemplate({ decl: d, gap: inheritedGap || gap })
    let areaNames = Object.keys(areas)

    // skip node if it doesn't have areas
    if (areaNames.length === 0) {
      return true
    }

    // check parsed array for item that include the same area names
    // return index of that item
    let index = parsed.reduce((acc, { allAreas }, idx) => {
      let hasAreas = allAreas && areaNames.some(area => allAreas.includes(area))
      return hasAreas ? idx : acc
    }, null)

    if (index !== null) {
      // index is found, add the grid-template data to that item
      let { allAreas, rules } = parsed[index]

      // check if rule has no duplicate area names
      let hasNoDuplicates = rules.some(r => {
        return r.hasDuplicates === false && selectorsEqual(r, rule)
      })

      let duplicatesFound = false

      // check need to gather all duplicate area names
      let duplicateAreaNames = rules.reduce((acc, r) => {
        if (!r.params && selectorsEqual(r, rule)) {
          duplicatesFound = true
          return r.duplicateAreaNames
        }
        if (!duplicatesFound) {
          areaNames.forEach(name => {
            if (r.areas[name]) {
              acc.push(name)
            }
          })
        }
        return uniq(acc)
      }, [])

      // update grid-row/column-span values for areas with duplicate
      // area names. @see #1084 and #1146
      rules.forEach(r => {
        areaNames.forEach(name => {
          let area = r.areas[name]
          if (area && area.row.span !== areas[name].row.span) {
            areas[name].row.updateSpan = true
          }

          if (area && area.column.span !== areas[name].column.span) {
            areas[name].column.updateSpan = true
          }
        })
      })

      parsed[index].allAreas = uniq([...allAreas, ...areaNames])
      parsed[index].rules.push({
        hasDuplicates: !hasNoDuplicates,
        params: media.params,
        selectors: rule.selectors,
        node: rule,
        duplicateAreaNames,
        areas
      })
    } else {
      // index is NOT found, push the new item to the parsed array
      parsed.push({
        allAreas: areaNames,
        areasCount: 0,
        rules: [
          {
            hasDuplicates: false,
            duplicateRules: [],
            params: media.params,
            selectors: rule.selectors,
            node: rule,
            duplicateAreaNames: [],
            areas
          }
        ]
      })
    }

    return undefined
  })

  return parsed
}

/**
 * insert prefixed grid-area declarations
 * @param  {Root}  css css root
 * @param  {Function} isDisabled check if the rule is disabled
 * @return {void}
 */
exports.insertAreas = insertAreas

function insertAreas(css, isDisabled) {
  // parse grid-template declarations
  let gridTemplatesData = parseGridTemplatesData(css)

  // return undefined if no declarations found
  if (gridTemplatesData.length === 0) {
    return undefined
  }

  // we need to store the rules that we will insert later
  let rulesToInsert = {}

  css.walkDecls('grid-area', gridArea => {
    let gridAreaRule = gridArea.parent
    let hasPrefixedRow = gridAreaRule.first.prop === '-ms-grid-row'
    let gridAreaMedia = getParentMedia(gridAreaRule)

    if (isDisabled(gridArea)) {
      return undefined
    }

    let gridAreaRuleIndex = css.index(gridAreaMedia || gridAreaRule)

    let value = gridArea.value
    // found the data that matches grid-area identifier
    let data = gridTemplatesData.filter(d => d.allAreas.includes(value))[0]

    if (!data) {
      return true
    }

    let lastArea = data.allAreas[data.allAreas.length - 1]
    let selectorBySpace = list.space(gridAreaRule.selector)
    let selectorByComma = list.comma(gridAreaRule.selector)
    let selectorIsComplex =
      selectorBySpace.length > 1 &&
      selectorBySpace.length > selectorByComma.length

    // prevent doubling of prefixes
    if (hasPrefixedRow) {
      return false
    }

    // create the empty object with the key as the last area name
    // e.g if we have templates with "a b c" values, "c" will be the last area
    if (!rulesToInsert[lastArea]) {
      rulesToInsert[lastArea] = {}
    }

    let lastRuleIsSet = false

    // walk through every grid-template rule data
    for (let rule of data.rules) {
      let area = rule.areas[value]
      let hasDuplicateName = rule.duplicateAreaNames.includes(value)

      // if we can't find the area name, update lastRule and continue
      if (!area) {
        let lastRule = rulesToInsert[lastArea].lastRule
        let lastRuleIndex
        if (lastRule) {
          lastRuleIndex = css.index(lastRule)
        } else {
          /* c8 ignore next 2 */
          lastRuleIndex = -1
        }

        if (gridAreaRuleIndex > lastRuleIndex) {
          rulesToInsert[lastArea].lastRule = gridAreaMedia || gridAreaRule
        }
        continue
      }

      // for grid-templates inside media rule we need to create empty
      // array to push prefixed grid-area rules later
      if (rule.params && !rulesToInsert[lastArea][rule.params]) {
        rulesToInsert[lastArea][rule.params] = []
      }

      if ((!rule.hasDuplicates || !hasDuplicateName) && !rule.params) {
        // grid-template has no duplicates and not inside media rule

        getMSDecls(area, false, false)
          .reverse()
          .forEach(i =>
            gridAreaRule.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        rulesToInsert[lastArea].lastRule = gridAreaRule
        lastRuleIsSet = true
      } else if (rule.hasDuplicates && !rule.params && !selectorIsComplex) {
        // grid-template has duplicates and not inside media rule
        let cloned = gridAreaRule.clone()
        cloned.removeAll()

        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            cloned.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        cloned.selectors = changeDuplicateAreaSelectors(
          cloned.selectors,
          rule.selectors
        )

        if (rulesToInsert[lastArea].lastRule) {
          rulesToInsert[lastArea].lastRule.after(cloned)
        }
        rulesToInsert[lastArea].lastRule = cloned
        lastRuleIsSet = true
      } else if (
        rule.hasDuplicates &&
        !rule.params &&
        selectorIsComplex &&
        gridAreaRule.selector.includes(rule.selectors[0])
      ) {
        // grid-template has duplicates and not inside media rule
        // and the selector is complex
        gridAreaRule.walkDecls(/-ms-grid-(row|column)/, d => d.remove())
        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            gridAreaRule.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )
      } else if (rule.params) {
        // grid-template is inside media rule
        // if we're inside media rule, we need to store prefixed rules
        // inside rulesToInsert object to be able to preserve the order of media
        // rules and merge them easily
        let cloned = gridAreaRule.clone()
        cloned.removeAll()

        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            cloned.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        if (rule.hasDuplicates && hasDuplicateName) {
          cloned.selectors = changeDuplicateAreaSelectors(
            cloned.selectors,
            rule.selectors
          )
        }

        cloned.raws = rule.node.raws

        if (css.index(rule.node.parent) > gridAreaRuleIndex) {
          // append the prefixed rules right inside media rule
          // with grid-template
          rule.node.parent.append(cloned)
        } else {
          // store the rule to insert later
          rulesToInsert[lastArea][rule.params].push(cloned)
        }

        // set new rule as last rule ONLY if we didn't set lastRule for
        // this grid-area before
        if (!lastRuleIsSet) {
          rulesToInsert[lastArea].lastRule = gridAreaMedia || gridAreaRule
        }
      }
    }

    return undefined
  })

  // append stored rules inside the media rules
  Object.keys(rulesToInsert).forEach(area => {
    let data = rulesToInsert[area]
    let lastRule = data.lastRule
    Object.keys(data)
      .reverse()
      .filter(p => p !== 'lastRule')
      .forEach(params => {
        if (data[params].length > 0 && lastRule) {
          lastRule.after({ name: 'media', params })
          lastRule.next().append(data[params])
        }
      })
  })

  return undefined
}

/**
 * Warn user if grid area identifiers are not found
 * @param  {Object} areas
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnMissedAreas = warnMissedAreas

function warnMissedAreas(areas, decl, result) {
  let missed = Object.keys(areas)

  decl.root().walkDecls('grid-area', gridArea => {
    missed = missed.filter(e => e !== gridArea.value)
  })

  if (missed.length > 0) {
    decl.warn(result, 'Can not find grid areas: ' + missed.join(', '))
  }

  return undefined
}

/**
 * compare selectors with grid-area rule and grid-template rule
 * show warning if grid-template selector is not found
 * (this function used for grid-area rule)
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnTemplateSelectorNotFound = warnTemplateSelectorNotFound

function warnTemplateSelectorNotFound(decl, result) {
  let rule = decl.parent
  let root = decl.root()
  let duplicatesFound = false

  // slice selector array. Remove the last part (for comparison)
  let slicedSelectorArr = list
    .space(rule.selector)
    .filter(str => str !== '>')
    .slice(0, -1)

  // we need to compare only if selector is complex.
  // e.g '.grid-cell' is simple, but '.parent > .grid-cell' is complex
  if (slicedSelectorArr.length > 0) {
    let gridTemplateFound = false
    let foundAreaSelector = null

    root.walkDecls(/grid-template(-areas)?$/, d => {
      let parent = d.parent
      let templateSelectors = parent.selectors

      let { areas } = parseTemplate({ decl: d, gap: getGridGap(d) })
      let hasArea = areas[decl.value]

      // find the the matching selectors
      for (let tplSelector of templateSelectors) {
        if (gridTemplateFound) {
          break
        }
        let tplSelectorArr = list.space(tplSelector).filter(str => str !== '>')

        gridTemplateFound = tplSelectorArr.every(
          (item, idx) => item === slicedSelectorArr[idx]
        )
      }

      if (gridTemplateFound || !hasArea) {
        return true
      }

      if (!foundAreaSelector) {
        foundAreaSelector = parent.selector
      }

      // if we found the duplicate area with different selector
      if (foundAreaSelector && foundAreaSelector !== parent.selector) {
        duplicatesFound = true
      }

      return undefined
    })

    // warn user if we didn't find template
    if (!gridTemplateFound && duplicatesFound) {
      decl.warn(
        result,
        'Autoprefixer cannot find a grid-template ' +
          `containing the duplicate grid-area "${decl.value}" ` +
          `with full selector matching: ${slicedSelectorArr.join(' ')}`
      )
    }
  }
}

/**
 * warn user if both grid-area and grid-(row|column)
 * declarations are present in the same rule
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnIfGridRowColumnExists = warnIfGridRowColumnExists

function warnIfGridRowColumnExists(decl, result) {
  let rule = decl.parent
  let decls = []
  rule.walkDecls(/^grid-(row|column)/, d => {
    if (
      !d.prop.endsWith('-end') &&
      !d.value.startsWith('span') &&
      !d.prop.endsWith('-gap')
    ) {
      decls.push(d)
    }
  })
  if (decls.length > 0) {
    decls.forEach(d => {
      d.warn(
        result,
        'You already have a grid-area declaration present in the rule. ' +
          `You should use either grid-area or ${d.prop}, not both`
      )
    })
  }

  return undefined
}

// Gap utils

exports.getGridGap = getGridGap

function getGridGap(decl) {
  let gap = {}

  // try to find gap
  let testGap = /^(grid-)?((row|column)-)?gap$/
  decl.parent.walkDecls(testGap, ({ prop, value }) => {
    if (/^(grid-)?gap$/.test(prop)) {
      let [row, , column] = parser(value).nodes

      gap.row = row && parser.stringify(row)
      gap.column = column ? parser.stringify(column) : gap.row
    }
    if (/^(grid-)?row-gap$/.test(prop)) gap.row = value
    if (/^(grid-)?column-gap$/.test(prop)) gap.column = value
  })

  return gap
}

/**
 * parse media parameters (for example 'min-width: 500px')
 * @param  {String} params parameter to parse
 * @return {}
 */
function parseMediaParams(params) {
  if (!params) {
    return []
  }
  let parsed = parser(params)
  let prop
  let value

  parsed.walk(node => {
    if (node.type === 'word' && /min|max/g.test(node.value)) {
      prop = node.value
    } else if (node.value.includes('px')) {
      value = parseInt(node.value.replace(/\D/g, ''))
    }
  })

  return [prop, value]
}

/**
 * Compare the selectors and decide if we
 * need to inherit gap from compared selector or not.
 * @type {String} selA
 * @type {String} selB
 * @return {Boolean}
 */
function shouldInheritGap(selA, selB) {
  let result

  // get arrays of selector split in 3-deep array
  let splitSelectorArrA = splitSelector(selA)
  let splitSelectorArrB = splitSelector(selB)

  if (splitSelectorArrA[0].length < splitSelectorArrB[0].length) {
    // abort if selectorA has lower descendant specificity then selectorB
    // (e.g '.grid' and '.hello .world .grid')
    return false
  } else if (splitSelectorArrA[0].length > splitSelectorArrB[0].length) {
    // if selectorA has higher descendant specificity then selectorB
    // (e.g '.foo .bar .grid' and '.grid')

    let idx = splitSelectorArrA[0].reduce((res, [item], index) => {
      let firstSelectorPart = splitSelectorArrB[0][0][0]
      if (item === firstSelectorPart) {
        return index
      }
      return false
    }, false)

    if (idx) {
      result = splitSelectorArrB[0].every((arr, index) => {
        return arr.every(
          (part, innerIndex) =>
            // because selectorA has more space elements, we need to slice
            // selectorA array by 'idx' number to compare them
            splitSelectorArrA[0].slice(idx)[index][innerIndex] === part
        )
      })
    }
  } else {
    // if selectorA has the same descendant specificity as selectorB
    // this condition covers cases such as: '.grid.foo.bar' and '.grid'
    result = splitSelectorArrB.some(byCommaArr => {
      return byCommaArr.every((bySpaceArr, index) => {
        return bySpaceArr.every(
          (part, innerIndex) => splitSelectorArrA[0][index][innerIndex] === part
        )
      })
    })
  }

  return result
}
/**
 * inherit grid gap values from the closest rule above
 * with the same selector
 * @param  {Declaration} decl
 * @param  {Object} gap gap values
 * @return {Object | Boolean} return gap values or false (if not found)
 */
exports.inheritGridGap = inheritGridGap

function inheritGridGap(decl, gap) {
  let rule = decl.parent
  let mediaRule = getParentMedia(rule)
  let root = rule.root()

  // get an array of selector split in 3-deep array
  let splitSelectorArr = splitSelector(rule.selector)

  // abort if the rule already has gaps
  if (Object.keys(gap).length > 0) {
    return false
  }

  // e.g ['min-width']
  let [prop] = parseMediaParams(mediaRule.params)

  let lastBySpace = splitSelectorArr[0]

  // get escaped value from the selector
  // if we have '.grid-2.foo.bar' selector, will be '\.grid\-2'
  let escaped = escapeRegexp(lastBySpace[lastBySpace.length - 1][0])

  let regexp = new RegExp(`(${escaped}$)|(${escaped}[,.])`)

  // find the closest rule with the same selector
  let closestRuleGap
  root.walkRules(regexp, r => {
    let gridGap

    // abort if are checking the same rule
    if (rule.toString() === r.toString()) {
      return false
    }

    // find grid-gap values
    r.walkDecls('grid-gap', d => (gridGap = getGridGap(d)))

    // skip rule without gaps
    if (!gridGap || Object.keys(gridGap).length === 0) {
      return true
    }

    // skip rules that should not be inherited from
    if (!shouldInheritGap(rule.selector, r.selector)) {
      return true
    }

    let media = getParentMedia(r)
    if (media) {
      // if we are inside media, we need to check that media props match
      // e.g ('min-width' === 'min-width')
      let propToCompare = parseMediaParams(media.params)[0]
      if (propToCompare === prop) {
        closestRuleGap = gridGap
        return true
      }
    } else {
      closestRuleGap = gridGap
      return true
    }

    return undefined
  })

  // if we find the closest gap object
  if (closestRuleGap && Object.keys(closestRuleGap).length > 0) {
    return closestRuleGap
  }
  return false
}

exports.warnGridGap = warnGridGap

function warnGridGap({ gap, hasColumns, decl, result }) {
  let hasBothGaps = gap.row && gap.column
  if (!hasColumns && (hasBothGaps || (gap.column && !gap.row))) {
    delete gap.column
    decl.warn(
      result,
      'Can not implement grid-gap without grid-template-columns'
    )
  }
}

/**
 * normalize the grid-template-rows/columns values
 * @param  {String} str grid-template-rows/columns value
 * @return {Array} normalized array with values
 * @example
 * let normalized = normalizeRowColumn('1fr repeat(2, 20px 50px) 1fr')
 * normalized // <= ['1fr', '20px', '50px', '20px', '50px', '1fr']
 */
function normalizeRowColumn(str) {
  let normalized = parser(str).nodes.reduce((result, node) => {
    if (node.type === 'function' && node.value === 'repeat') {
      let key = 'count'

      let [count, value] = node.nodes.reduce(
        (acc, n) => {
          if (n.type === 'word' && key === 'count') {
            acc[0] = Math.abs(parseInt(n.value))
            return acc
          }
          if (n.type === 'div' && n.value === ',') {
            key = 'value'
            return acc
          }
          if (key === 'value') {
            acc[1] += parser.stringify(n)
          }
          return acc
        },
        [0, '']
      )

      if (count) {
        for (let i = 0; i < count; i++) {
          result.push(value)
        }
      }

      return result
    }
    if (node.type === 'space') {
      return result
    }
    return result.concat(parser.stringify(node))
  }, [])

  return normalized
}

exports.autoplaceGridItems = autoplaceGridItems

/**
 * Autoplace grid items
 * @param {Declaration} decl
 * @param {Result} result
 * @param {Object} gap gap values
 * @param {String} autoflowValue grid-auto-flow value
 * @return {void}
 * @see https://github.com/postcss/autoprefixer/issues/1148
 */
function autoplaceGridItems(decl, result, gap, autoflowValue = 'row') {
  let { parent } = decl

  let rowDecl = parent.nodes.find(i => i.prop === 'grid-template-rows')
  let rows = normalizeRowColumn(rowDecl.value)
  let columns = normalizeRowColumn(decl.value)

  // Build array of area names with dummy values. If we have 3 columns and
  // 2 rows, filledRows will be equal to ['1 2 3', '4 5 6']
  let filledRows = rows.map((_, rowIndex) => {
    return Array.from(
      { length: columns.length },
      (v, k) => k + rowIndex * columns.length + 1
    ).join(' ')
  })

  let areas = parseGridAreas({ rows: filledRows, gap })
  let keys = Object.keys(areas)
  let items = keys.map(i => areas[i])

  // Change the order of cells if grid-auto-flow value is 'column'
  if (autoflowValue.includes('column')) {
    items = items.sort((a, b) => a.column.start - b.column.start)
  }

  // Insert new rules
  items.reverse().forEach((item, index) => {
    let { column, row } = item
    let nodeSelector = parent.selectors
      .map(sel => sel + ` > *:nth-child(${keys.length - index})`)
      .join(', ')

    // create new rule
    let node = parent.clone().removeAll()

    // change rule selector
    node.selector = nodeSelector

    // insert prefixed row/column values
    node.append({ prop: '-ms-grid-row', value: row.start })
    node.append({ prop: '-ms-grid-column', value: column.start })

    // insert rule
    parent.after(node)
  })

  return undefined
}


/***/ }),

/***/ 69014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class ImageRendering extends Declaration {
  /**
   * Add hack only for crisp-edges
   */
  check(decl) {
    return decl.value === 'pixelated'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    if (prefix === '-ms-') {
      return '-ms-interpolation-mode'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Change property and value for IE
   */
  set(decl, prefix) {
    if (prefix !== '-ms-') return super.set(decl, prefix)
    decl.prop = '-ms-interpolation-mode'
    decl.value = 'nearest-neighbor'
    return decl
  }

  /**
   * Return property name by spec
   */
  normalize() {
    return 'image-rendering'
  }

  /**
   * Warn on old value
   */
  process(node, result) {
    return super.process(node, result)
  }
}

ImageRendering.names = ['image-rendering', 'interpolation-mode']

module.exports = ImageRendering


/***/ }),

/***/ 92965:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Value = __webpack_require__(58149)

class ImageSet extends Value {
  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(string, prefix) {
    let fixed = super.replace(string, prefix)
    if (prefix === '-webkit-') {
      fixed = fixed.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, 'url($1)$2')
    }
    return fixed
  }
}

ImageSet.names = ['image-set']

module.exports = ImageSet


/***/ }),

/***/ 65945:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class InlineLogical extends Declaration {
  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(prop, prefix) {
    return prefix + prop.replace('-inline', '')
  }

  /**
   * Return property name by spec
   */
  normalize(prop) {
    return prop.replace(/(margin|padding|border)-(start|end)/, '$1-inline-$2')
  }
}

InlineLogical.names = [
  'border-inline-start',
  'border-inline-end',
  'margin-inline-start',
  'margin-inline-end',
  'padding-inline-start',
  'padding-inline-end',
  'border-start',
  'border-end',
  'margin-start',
  'margin-end',
  'padding-start',
  'padding-end'
]

module.exports = InlineLogical


/***/ }),

/***/ 322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let OldValue = __webpack_require__(49135)
let Value = __webpack_require__(58149)

function regexp(name) {
  return new RegExp(`(^|[\\s,(])(${name}($|[\\s),]))`, 'gi')
}

class Intrinsic extends Value {
  regexp() {
    if (!this.regexpCache) this.regexpCache = regexp(this.name)
    return this.regexpCache
  }

  isStretch() {
    return (
      this.name === 'stretch' ||
      this.name === 'fill' ||
      this.name === 'fill-available'
    )
  }

  replace(string, prefix) {
    if (prefix === '-moz-' && this.isStretch()) {
      return string.replace(this.regexp(), '$1-moz-available$3')
    }
    if (prefix === '-webkit-' && this.isStretch()) {
      return string.replace(this.regexp(), '$1-webkit-fill-available$3')
    }
    return super.replace(string, prefix)
  }

  old(prefix) {
    let prefixed = prefix + this.name
    if (this.isStretch()) {
      if (prefix === '-moz-') {
        prefixed = '-moz-available'
      } else if (prefix === '-webkit-') {
        prefixed = '-webkit-fill-available'
      }
    }
    return new OldValue(this.name, prefixed, prefixed, regexp(prefixed))
  }

  add(decl, prefix) {
    if (decl.prop.includes('grid') && prefix !== '-webkit-') {
      return undefined
    }
    return super.add(decl, prefix)
  }
}

Intrinsic.names = [
  'max-content',
  'min-content',
  'fit-content',
  'fill',
  'fill-available',
  'stretch'
]

module.exports = Intrinsic


/***/ }),

/***/ 84124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class JustifyContent extends Declaration {
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-pack'
    }
    if (spec === 2012) {
      return prefix + 'flex-pack'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'justify-content'
  }

  /**
   * Change value for 2009 and 2012 specs
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009 || spec === 2012) {
      let value = JustifyContent.oldValues[decl.value] || decl.value
      decl.value = value
      if (spec !== 2009 || value !== 'distribute') {
        return super.set(decl, prefix)
      }
    } else if (spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

JustifyContent.names = ['justify-content', 'flex-pack', 'box-pack']

JustifyContent.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start',
  'space-between': 'justify',
  'space-around': 'distribute'
}

module.exports = JustifyContent


/***/ }),

/***/ 84473:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class MaskBorder extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return this.name.replace('box-image', 'border')
  }

  /**
   * Return flex property for 2012 spec
   */
  prefixed(prop, prefix) {
    let result = super.prefixed(prop, prefix)
    if (prefix === '-webkit-') {
      result = result.replace('border', 'box-image')
    }
    return result
  }
}

MaskBorder.names = [
  'mask-border',
  'mask-border-source',
  'mask-border-slice',
  'mask-border-width',
  'mask-border-outset',
  'mask-border-repeat',
  'mask-box-image',
  'mask-box-image-source',
  'mask-box-image-slice',
  'mask-box-image-width',
  'mask-box-image-outset',
  'mask-box-image-repeat'
]

module.exports = MaskBorder


/***/ }),

/***/ 75630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class MaskComposite extends Declaration {
  /**
   * Prefix mask-composite for webkit
   */
  insert(decl, prefix, prefixes) {
    let isCompositeProp = decl.prop === 'mask-composite'

    let compositeValues

    if (isCompositeProp) {
      compositeValues = decl.value.split(',')
    } else {
      compositeValues = decl.value.match(MaskComposite.regexp) || []
    }

    compositeValues = compositeValues.map(el => el.trim()).filter(el => el)
    let hasCompositeValues = compositeValues.length

    let compositeDecl

    if (hasCompositeValues) {
      compositeDecl = this.clone(decl)
      compositeDecl.value = compositeValues
        .map(value => MaskComposite.oldValues[value] || value)
        .join(', ')

      if (compositeValues.includes('intersect')) {
        compositeDecl.value += ', xor'
      }

      compositeDecl.prop = prefix + 'mask-composite'
    }

    if (isCompositeProp) {
      if (!hasCompositeValues) {
        return undefined
      }

      if (this.needCascade(decl)) {
        compositeDecl.raws.before = this.calcBefore(prefixes, decl, prefix)
      }

      return decl.parent.insertBefore(decl, compositeDecl)
    }

    let cloned = this.clone(decl)
    cloned.prop = prefix + cloned.prop

    if (hasCompositeValues) {
      cloned.value = cloned.value.replace(MaskComposite.regexp, '')
    }

    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }

    decl.parent.insertBefore(decl, cloned)

    if (!hasCompositeValues) {
      return decl
    }

    if (this.needCascade(decl)) {
      compositeDecl.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, compositeDecl)
  }
}

MaskComposite.names = ['mask', 'mask-composite']

MaskComposite.oldValues = {
  add: 'source-over',
  subtract: 'source-out',
  intersect: 'source-in',
  exclude: 'xor'
}

MaskComposite.regexp = new RegExp(
  `\\s+(${Object.keys(MaskComposite.oldValues).join(
    '|'
  )})\\b(?!\\))\\s*(?=[,])`,
  'ig'
)

module.exports = MaskComposite


/***/ }),

/***/ 4231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(21213)
let Declaration = __webpack_require__(68740)

class Order extends Declaration {
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-ordinal-group'
    }
    if (spec === 2012) {
      return prefix + 'flex-order'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'order'
  }

  /**
   * Fix value for 2009 spec
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009 && /\d/.test(decl.value)) {
      decl.value = (parseInt(decl.value) + 1).toString()
      return super.set(decl, prefix)
    }
    return super.set(decl, prefix)
  }
}

Order.names = ['order', 'flex-order', 'box-ordinal-group']

module.exports = Order


/***/ }),

/***/ 44215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class OverscrollBehavior extends Declaration {
  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    return prefix + 'scroll-chaining'
  }

  /**
   * Return property name by spec
   */
  normalize() {
    return 'overscroll-behavior'
  }

  /**
   * Change value for IE
   */
  set(decl, prefix) {
    if (decl.value === 'auto') {
      decl.value = 'chained'
    } else if (decl.value === 'none' || decl.value === 'contain') {
      decl.value = 'none'
    }
    return super.set(decl, prefix)
  }
}

OverscrollBehavior.names = ['overscroll-behavior', 'scroll-chaining']

module.exports = OverscrollBehavior


/***/ }),

/***/ 64521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let OldValue = __webpack_require__(49135)
let Value = __webpack_require__(58149)

class Pixelated extends Value {
  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(string, prefix) {
    if (prefix === '-webkit-') {
      return string.replace(this.regexp(), '$1-webkit-optimize-contrast')
    }
    if (prefix === '-moz-') {
      return string.replace(this.regexp(), '$1-moz-crisp-edges')
    }
    return super.replace(string, prefix)
  }

  /**
   * Different name for WebKit and Firefox
   */
  old(prefix) {
    if (prefix === '-webkit-') {
      return new OldValue(this.name, '-webkit-optimize-contrast')
    }
    if (prefix === '-moz-') {
      return new OldValue(this.name, '-moz-crisp-edges')
    }
    return super.old(prefix)
  }
}

Pixelated.names = ['pixelated']

module.exports = Pixelated


/***/ }),

/***/ 80841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)
let utils = __webpack_require__(84519)

class PlaceSelf extends Declaration {
  /**
   * Translate place-self to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    // prevent doubling of prefixes
    if (decl.parent.some(i => i.prop === '-ms-grid-row-align')) {
      return undefined
    }

    let [[first, second]] = utils.parse(decl)

    if (second) {
      utils.insertDecl(decl, 'grid-row-align', first)
      utils.insertDecl(decl, 'grid-column-align', second)
    } else {
      utils.insertDecl(decl, 'grid-row-align', first)
      utils.insertDecl(decl, 'grid-column-align', first)
    }

    return undefined
  }
}

PlaceSelf.names = ['place-self']

module.exports = PlaceSelf


/***/ }),

/***/ 75590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(36971)

class PlaceholderShown extends Selector {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-ms-') {
      return ':-ms-input-placeholder'
    }
    return `:${prefix}placeholder-shown`
  }
}

PlaceholderShown.names = [':placeholder-shown']

module.exports = PlaceholderShown


/***/ }),

/***/ 16626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(36971)

class Placeholder extends Selector {
  /**
   * Add old mozilla to possible prefixes
   */
  possible() {
    return super.possible().concat(['-moz- old', '-ms- old'])
  }

  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return '::-webkit-input-placeholder'
    }
    if (prefix === '-ms-') {
      return '::-ms-input-placeholder'
    }
    if (prefix === '-ms- old') {
      return ':-ms-input-placeholder'
    }
    if (prefix === '-moz- old') {
      return ':-moz-placeholder'
    }
    return `::${prefix}placeholder`
  }
}

Placeholder.names = ['::placeholder']

module.exports = Placeholder


/***/ }),

/***/ 76788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class PrintColorAdjust extends Declaration {
  /**
   * Change property name for WebKit-based browsers
   */
  prefixed(prop, prefix) {
    if (prefix === '-moz-') {
      return 'color-adjust'
    } else {
      return prefix + 'print-color-adjust'
    }
  }

  /**
   * Return property name by spec
   */
  normalize() {
    return 'print-color-adjust'
  }
}

PrintColorAdjust.names = ['print-color-adjust', 'color-adjust']

module.exports = PrintColorAdjust


/***/ }),

/***/ 57202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class TextDecorationSkipInk extends Declaration {
  /**
   * Change prefix for ink value
   */
  set(decl, prefix) {
    if (decl.prop === 'text-decoration-skip-ink' && decl.value === 'auto') {
      decl.prop = prefix + 'text-decoration-skip'
      decl.value = 'ink'
      return decl
    } else {
      return super.set(decl, prefix)
    }
  }
}

TextDecorationSkipInk.names = [
  'text-decoration-skip-ink',
  'text-decoration-skip'
]

module.exports = TextDecorationSkipInk


/***/ }),

/***/ 89112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

const BASIC = [
  'none',
  'underline',
  'overline',
  'line-through',
  'blink',
  'inherit',
  'initial',
  'unset'
]

class TextDecoration extends Declaration {
  /**
   * Do not add prefixes for basic values.
   */
  check(decl) {
    return decl.value.split(/\s+/).some(i => !BASIC.includes(i))
  }
}

TextDecoration.names = ['text-decoration']

module.exports = TextDecoration


/***/ }),

/***/ 54252:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class TextEmphasisPosition extends Declaration {
  set(decl, prefix) {
    if (prefix === '-webkit-') {
      decl.value = decl.value.replace(/\s*(right|left)\s*/i, '')
    }
    return super.set(decl, prefix)
  }
}

TextEmphasisPosition.names = ['text-emphasis-position']

module.exports = TextEmphasisPosition


/***/ }),

/***/ 48128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class TransformDecl extends Declaration {
  /**
   * Recursively check all parents for @keyframes
   */
  keyframeParents(decl) {
    let { parent } = decl
    while (parent) {
      if (parent.type === 'atrule' && parent.name === 'keyframes') {
        return true
      }
      ;({ parent } = parent)
    }
    return false
  }

  /**
   * Is transform contain 3D commands
   */
  contain3d(decl) {
    if (decl.prop === 'transform-origin') {
      return false
    }

    for (let func of TransformDecl.functions3d) {
      if (decl.value.includes(`${func}(`)) {
        return true
      }
    }

    return false
  }

  /**
   * Replace rotateZ to rotate for IE 9
   */
  set(decl, prefix) {
    decl = super.set(decl, prefix)
    if (prefix === '-ms-') {
      decl.value = decl.value.replace(/rotatez/gi, 'rotate')
    }
    return decl
  }

  /**
   * Don't add prefix for IE in keyframes
   */
  insert(decl, prefix, prefixes) {
    if (prefix === '-ms-') {
      if (!this.contain3d(decl) && !this.keyframeParents(decl)) {
        return super.insert(decl, prefix, prefixes)
      }
    } else if (prefix === '-o-') {
      if (!this.contain3d(decl)) {
        return super.insert(decl, prefix, prefixes)
      }
    } else {
      return super.insert(decl, prefix, prefixes)
    }
    return undefined
  }
}

TransformDecl.names = ['transform', 'transform-origin']

TransformDecl.functions3d = [
  'matrix3d',
  'translate3d',
  'translateZ',
  'scale3d',
  'scaleZ',
  'rotate3d',
  'rotateX',
  'rotateY',
  'perspective'
]

module.exports = TransformDecl


/***/ }),

/***/ 43642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class UserSelect extends Declaration {
  /**
   * Change prefixed value for IE
   */
  set(decl, prefix) {
    if (prefix === '-ms-' && decl.value === 'contain') {
      decl.value = 'element'
    }
    return super.set(decl, prefix)
  }

  /**
   * Avoid prefixing all in IE
   */
  insert(decl, prefix, prefixes) {
    if (decl.value === 'all' && prefix === '-ms-') {
      return undefined
    } else {
      return super.insert(decl, prefix, prefixes)
    }
  }
}

UserSelect.names = ['user-select']

module.exports = UserSelect


/***/ }),

/***/ 97919:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(68740)

class WritingMode extends Declaration {
  insert(decl, prefix, prefixes) {
    if (prefix === '-ms-') {
      let cloned = this.set(this.clone(decl), prefix)

      if (this.needCascade(decl)) {
        cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
      }
      let direction = 'ltr'

      decl.parent.nodes.forEach(i => {
        if (i.prop === 'direction') {
          if (i.value === 'rtl' || i.value === 'ltr') direction = i.value
        }
      })

      cloned.value = WritingMode.msValues[direction][decl.value] || decl.value
      return decl.parent.insertBefore(decl, cloned)
    }

    return super.insert(decl, prefix, prefixes)
  }
}

WritingMode.names = ['writing-mode']

WritingMode.msValues = {
  ltr: {
    'horizontal-tb': 'lr-tb',
    'vertical-rl': 'tb-rl',
    'vertical-lr': 'tb-lr'
  },
  rtl: {
    'horizontal-tb': 'rl-tb',
    'vertical-rl': 'bt-rl',
    'vertical-lr': 'bt-lr'
  }
}

module.exports = WritingMode


/***/ })

}]);
//# sourceMappingURL=703.bundle.js.map