(self["webpackChunkmovies_detail_app"] = self["webpackChunkmovies_detail_app"] || []).push([[169],{

/***/ 85169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let unpack = (__webpack_require__(90614).feature)

function browsersSort(a, b) {
  a = a.split(' ')
  b = b.split(' ')
  if (a[0] > b[0]) {
    return 1
  } else if (a[0] < b[0]) {
    return -1
  } else {
    return Math.sign(parseFloat(a[1]) - parseFloat(b[1]))
  }
}

// Convert Can I Use data
function f(data, opts, callback) {
  data = unpack(data)

  if (!callback) {
    ;[callback, opts] = [opts, {}]
  }

  let match = opts.match || /\sx($|\s)/
  let need = []

  for (let browser in data.stats) {
    let versions = data.stats[browser]
    for (let version in versions) {
      let support = versions[version]
      if (support.match(match)) {
        need.push(browser + ' ' + version)
      }
    }
  }

  callback(need.sort(browsersSort))
}

// Add data for all properties
let result = {}

function prefix(names, data) {
  for (let name of names) {
    result[name] = Object.assign({}, data)
  }
}

function add(names, data) {
  for (let name of names) {
    result[name].browsers = result[name].browsers
      .concat(data.browsers)
      .sort(browsersSort)
  }
}

module.exports = result

// Border Radius
let prefixBorderRadius = __webpack_require__(40893)

f(prefixBorderRadius, browsers =>
  prefix(
    [
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius'
    ],
    {
      mistakes: ['-khtml-', '-ms-', '-o-'],
      feature: 'border-radius',
      browsers
    }
  )
)

// Box Shadow
let prefixBoxshadow = __webpack_require__(52307)

f(prefixBoxshadow, browsers =>
  prefix(['box-shadow'], {
    mistakes: ['-khtml-'],
    feature: 'css-boxshadow',
    browsers
  })
)

// Animation
let prefixAnimation = __webpack_require__(79066)

f(prefixAnimation, browsers =>
  prefix(
    [
      'animation',
      'animation-name',
      'animation-duration',
      'animation-delay',
      'animation-direction',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-play-state',
      'animation-timing-function',
      '@keyframes'
    ],
    {
      mistakes: ['-khtml-', '-ms-'],
      feature: 'css-animation',
      browsers
    }
  )
)

// Transition
let prefixTransition = __webpack_require__(9331)

f(prefixTransition, browsers =>
  prefix(
    [
      'transition',
      'transition-property',
      'transition-duration',
      'transition-delay',
      'transition-timing-function'
    ],
    {
      mistakes: ['-khtml-', '-ms-'],
      browsers,
      feature: 'css-transitions'
    }
  )
)

// Transform 2D
let prefixTransform2d = __webpack_require__(78129)

f(prefixTransform2d, browsers =>
  prefix(['transform', 'transform-origin'], {
    feature: 'transforms2d',
    browsers
  })
)

// Transform 3D
let prefixTransforms3d = __webpack_require__(88319)

f(prefixTransforms3d, browsers => {
  prefix(['perspective', 'perspective-origin'], {
    feature: 'transforms3d',
    browsers
  })
  return prefix(['transform-style'], {
    mistakes: ['-ms-', '-o-'],
    browsers,
    feature: 'transforms3d'
  })
})

f(prefixTransforms3d, { match: /y\sx|y\s#2/ }, browsers =>
  prefix(['backface-visibility'], {
    mistakes: ['-ms-', '-o-'],
    feature: 'transforms3d',
    browsers
  })
)

// Gradients
let prefixGradients = __webpack_require__(26470)

f(prefixGradients, { match: /y\sx/ }, browsers =>
  prefix(
    [
      'linear-gradient',
      'repeating-linear-gradient',
      'radial-gradient',
      'repeating-radial-gradient'
    ],
    {
      props: [
        'background',
        'background-image',
        'border-image',
        'mask',
        'list-style',
        'list-style-image',
        'content',
        'mask-image'
      ],
      mistakes: ['-ms-'],
      feature: 'css-gradients',
      browsers
    }
  )
)

f(prefixGradients, { match: /a\sx/ }, browsers => {
  browsers = browsers.map(i => {
    if (/firefox|op/.test(i)) {
      return i
    } else {
      return `${i} old`
    }
  })
  return add(
    [
      'linear-gradient',
      'repeating-linear-gradient',
      'radial-gradient',
      'repeating-radial-gradient'
    ],
    {
      feature: 'css-gradients',
      browsers
    }
  )
})

// Box sizing
let prefixBoxsizing = __webpack_require__(74318)

f(prefixBoxsizing, browsers =>
  prefix(['box-sizing'], {
    feature: 'css3-boxsizing',
    browsers
  })
)

// Filter Effects
let prefixFilters = __webpack_require__(94762)

f(prefixFilters, browsers =>
  prefix(['filter'], {
    feature: 'css-filters',
    browsers
  })
)

// filter() function
let prefixFilterFunction = __webpack_require__(25374)

f(prefixFilterFunction, browsers =>
  prefix(['filter-function'], {
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ],
    feature: 'css-filter-function',
    browsers
  })
)

// Backdrop-filter
let prefixBackdrop = __webpack_require__(38013)

f(prefixBackdrop, { match: /y\sx|y\s#2/ }, browsers =>
  prefix(['backdrop-filter'], {
    feature: 'css-backdrop-filter',
    browsers
  })
)

// element() function
let prefixElementFunction = __webpack_require__(17710)

f(prefixElementFunction, browsers =>
  prefix(['element'], {
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ],
    feature: 'css-element-function',
    browsers
  })
)

// Multicolumns
let prefixMulticolumns = __webpack_require__(40757)

f(prefixMulticolumns, browsers => {
  prefix(
    [
      'columns',
      'column-width',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-width',
      'column-count',
      'column-rule-style',
      'column-span',
      'column-fill'
    ],
    {
      feature: 'multicolumn',
      browsers
    }
  )

  let noff = browsers.filter(i => !/firefox/.test(i))
  prefix(['break-before', 'break-after', 'break-inside'], {
    feature: 'multicolumn',
    browsers: noff
  })
})

// User select
let prefixUserSelect = __webpack_require__(18160)

f(prefixUserSelect, browsers =>
  prefix(['user-select'], {
    mistakes: ['-khtml-'],
    feature: 'user-select-none',
    browsers
  })
)

// Flexible Box Layout
let prefixFlexbox = __webpack_require__(17662)

f(prefixFlexbox, { match: /a\sx/ }, browsers => {
  browsers = browsers.map(i => {
    if (/ie|firefox/.test(i)) {
      return i
    } else {
      return `${i} 2009`
    }
  })
  prefix(['display-flex', 'inline-flex'], {
    props: ['display'],
    feature: 'flexbox',
    browsers
  })
  prefix(['flex', 'flex-grow', 'flex-shrink', 'flex-basis'], {
    feature: 'flexbox',
    browsers
  })
  prefix(
    [
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'order',
      'align-items',
      'align-self',
      'align-content'
    ],
    {
      feature: 'flexbox',
      browsers
    }
  )
})

f(prefixFlexbox, { match: /y\sx/ }, browsers => {
  add(['display-flex', 'inline-flex'], {
    feature: 'flexbox',
    browsers
  })
  add(['flex', 'flex-grow', 'flex-shrink', 'flex-basis'], {
    feature: 'flexbox',
    browsers
  })
  add(
    [
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'order',
      'align-items',
      'align-self',
      'align-content'
    ],
    {
      feature: 'flexbox',
      browsers
    }
  )
})

// calc() unit
let prefixCalc = __webpack_require__(42955)

f(prefixCalc, browsers =>
  prefix(['calc'], {
    props: ['*'],
    feature: 'calc',
    browsers
  })
)

// Background options
let prefixBackgroundOptions = __webpack_require__(27964)

f(prefixBackgroundOptions, browsers =>
  prefix(['background-origin', 'background-size'], {
    feature: 'background-img-opts',
    browsers
  })
)

// background-clip: text
let prefixBackgroundClipText = __webpack_require__(49631)

f(prefixBackgroundClipText, browsers =>
  prefix(['background-clip'], {
    feature: 'background-clip-text',
    browsers
  })
)

// Font feature settings
let prefixFontFeature = __webpack_require__(40678)

f(prefixFontFeature, browsers =>
  prefix(
    [
      'font-feature-settings',
      'font-variant-ligatures',
      'font-language-override'
    ],
    {
      feature: 'font-feature',
      browsers
    }
  )
)

// CSS font-kerning property
let prefixFontKerning = __webpack_require__(43001)

f(prefixFontKerning, browsers =>
  prefix(['font-kerning'], {
    feature: 'font-kerning',
    browsers
  })
)

// Border image
let prefixBorderImage = __webpack_require__(78861)

f(prefixBorderImage, browsers =>
  prefix(['border-image'], {
    feature: 'border-image',
    browsers
  })
)

// Selection selector
let prefixSelection = __webpack_require__(16385)

f(prefixSelection, browsers =>
  prefix(['::selection'], {
    selector: true,
    feature: 'css-selection',
    browsers
  })
)

// Placeholder selector
let prefixPlaceholder = __webpack_require__(2125)

f(prefixPlaceholder, browsers => {
  prefix(['::placeholder'], {
    selector: true,
    feature: 'css-placeholder',
    browsers: browsers.concat(['ie 10 old', 'ie 11 old', 'firefox 18 old'])
  })
})

// Placeholder-shown selector
let prefixPlaceholderShown = __webpack_require__(35770)

f(prefixPlaceholderShown, browsers => {
  prefix([':placeholder-shown'], {
    selector: true,
    feature: 'css-placeholder-shown',
    browsers
  })
})

// Hyphenation
let prefixHyphens = __webpack_require__(95570)

f(prefixHyphens, browsers =>
  prefix(['hyphens'], {
    feature: 'css-hyphens',
    browsers
  })
)

// Fullscreen selector
let prefixFullscreen = __webpack_require__(25424)

f(prefixFullscreen, browsers =>
  prefix([':fullscreen'], {
    selector: true,
    feature: 'fullscreen',
    browsers
  })
)

f(prefixFullscreen, { match: /x(\s#2|$)/ }, browsers =>
  prefix(['::backdrop'], {
    selector: true,
    feature: 'fullscreen',
    browsers
  })
)

// File selector button
let prefixFileSelectorButton = __webpack_require__(30431)

f(prefixFileSelectorButton, browsers =>
  prefix(['::file-selector-button'], {
    selector: true,
    feature: 'file-selector-button',
    browsers
  })
)

// :autofill
let prefixAutofill = __webpack_require__(24707)

f(prefixAutofill, browsers =>
  prefix([':autofill'], {
    selector: true,
    feature: 'css-autofill',
    browsers
  })
)

// Tab size
let prefixTabsize = __webpack_require__(77239)

f(prefixTabsize, browsers =>
  prefix(['tab-size'], {
    feature: 'css3-tabsize',
    browsers
  })
)

// Intrinsic & extrinsic sizing
let prefixIntrinsic = __webpack_require__(39895)

let sizeProps = [
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'inline-size',
  'min-inline-size',
  'max-inline-size',
  'block-size',
  'min-block-size',
  'max-block-size',
  'grid',
  'grid-template',
  'grid-template-rows',
  'grid-template-columns',
  'grid-auto-columns',
  'grid-auto-rows'
]

f(prefixIntrinsic, browsers =>
  prefix(['max-content', 'min-content'], {
    props: sizeProps,
    feature: 'intrinsic-width',
    browsers
  })
)

f(prefixIntrinsic, { match: /x|\s#4/ }, browsers =>
  prefix(['fill', 'fill-available'], {
    props: sizeProps,
    feature: 'intrinsic-width',
    browsers
  })
)

f(prefixIntrinsic, { match: /x|\s#5/ }, browsers =>
  prefix(['fit-content'], {
    props: sizeProps,
    feature: 'intrinsic-width',
    browsers
  })
)

// Stretch value

let prefixStretch = __webpack_require__(86344)

f(prefixStretch, browsers =>
  prefix(['stretch'], {
    props: sizeProps,
    feature: 'css-width-stretch',
    browsers
  })
)

// Zoom cursors
let prefixCursorsNewer = __webpack_require__(5619)

f(prefixCursorsNewer, browsers =>
  prefix(['zoom-in', 'zoom-out'], {
    props: ['cursor'],
    feature: 'css3-cursors-newer',
    browsers
  })
)

// Grab cursors
let prefixCursorsGrab = __webpack_require__(64771)

f(prefixCursorsGrab, browsers =>
  prefix(['grab', 'grabbing'], {
    props: ['cursor'],
    feature: 'css3-cursors-grab',
    browsers
  })
)

// Sticky position
let prefixSticky = __webpack_require__(51105)

f(prefixSticky, browsers =>
  prefix(['sticky'], {
    props: ['position'],
    feature: 'css-sticky',
    browsers
  })
)

// Pointer Events
let prefixPointer = __webpack_require__(51489)

f(prefixPointer, browsers =>
  prefix(['touch-action'], {
    feature: 'pointer',
    browsers
  })
)

// Text decoration
let prefixDecoration = __webpack_require__(3916)

f(prefixDecoration, { match: /x.*#[235]/ }, browsers =>
  prefix(['text-decoration-skip', 'text-decoration-skip-ink'], {
    feature: 'text-decoration',
    browsers
  })
)

let prefixDecorationShorthand = __webpack_require__(7322)

f(prefixDecorationShorthand, browsers =>
  prefix(['text-decoration'], {
    feature: 'text-decoration',
    browsers
  })
)

let prefixDecorationColor = __webpack_require__(81883)

f(prefixDecorationColor, browsers =>
  prefix(['text-decoration-color'], {
    feature: 'text-decoration',
    browsers
  })
)

let prefixDecorationLine = __webpack_require__(91060)

f(prefixDecorationLine, browsers =>
  prefix(['text-decoration-line'], {
    feature: 'text-decoration',
    browsers
  })
)

let prefixDecorationStyle = __webpack_require__(38132)

f(prefixDecorationStyle, browsers =>
  prefix(['text-decoration-style'], {
    feature: 'text-decoration',
    browsers
  })
)

// Text Size Adjust
let prefixTextSizeAdjust = __webpack_require__(94357)

f(prefixTextSizeAdjust, browsers =>
  prefix(['text-size-adjust'], {
    feature: 'text-size-adjust',
    browsers
  })
)

// CSS Masks
let prefixCssMasks = __webpack_require__(4082)

f(prefixCssMasks, browsers => {
  prefix(
    [
      'mask-clip',
      'mask-composite',
      'mask-image',
      'mask-origin',
      'mask-repeat',
      'mask-border-repeat',
      'mask-border-source'
    ],
    {
      feature: 'css-masks',
      browsers
    }
  )
  prefix(
    [
      'mask',
      'mask-position',
      'mask-size',
      'mask-border',
      'mask-border-outset',
      'mask-border-width',
      'mask-border-slice'
    ],
    {
      feature: 'css-masks',
      browsers
    }
  )
})

// CSS clip-path property
let prefixClipPath = __webpack_require__(66208)

f(prefixClipPath, browsers =>
  prefix(['clip-path'], {
    feature: 'css-clip-path',
    browsers
  })
)

// Fragmented Borders and Backgrounds
let prefixBoxdecoration = __webpack_require__(69307)

f(prefixBoxdecoration, browsers =>
  prefix(['box-decoration-break'], {
    feature: 'css-boxdecorationbreak',
    browsers
  })
)

// CSS3 object-fit/object-position
let prefixObjectFit = __webpack_require__(47079)

f(prefixObjectFit, browsers =>
  prefix(['object-fit', 'object-position'], {
    feature: 'object-fit',
    browsers
  })
)

// CSS Shapes
let prefixShapes = __webpack_require__(75326)

f(prefixShapes, browsers =>
  prefix(['shape-margin', 'shape-outside', 'shape-image-threshold'], {
    feature: 'css-shapes',
    browsers
  })
)

// CSS3 text-overflow
let prefixTextOverflow = __webpack_require__(88751)

f(prefixTextOverflow, browsers =>
  prefix(['text-overflow'], {
    feature: 'text-overflow',
    browsers
  })
)

// Viewport at-rule
let prefixDeviceadaptation = __webpack_require__(38482)

f(prefixDeviceadaptation, browsers =>
  prefix(['@viewport'], {
    feature: 'css-deviceadaptation',
    browsers
  })
)

// Resolution Media Queries
let prefixResolut = __webpack_require__(73138)

f(prefixResolut, { match: /( x($| )|a #2)/ }, browsers =>
  prefix(['@resolution'], {
    feature: 'css-media-resolution',
    browsers
  })
)

// CSS text-align-last
let prefixTextAlignLast = __webpack_require__(48644)

f(prefixTextAlignLast, browsers =>
  prefix(['text-align-last'], {
    feature: 'css-text-align-last',
    browsers
  })
)

// Crisp Edges Image Rendering Algorithm
let prefixCrispedges = __webpack_require__(14810)

f(prefixCrispedges, { match: /y x|a x #1/ }, browsers =>
  prefix(['pixelated'], {
    props: ['image-rendering'],
    feature: 'css-crisp-edges',
    browsers
  })
)

f(prefixCrispedges, { match: /a x #2/ }, browsers =>
  prefix(['image-rendering'], {
    feature: 'css-crisp-edges',
    browsers
  })
)

// Logical Properties
let prefixLogicalProps = __webpack_require__(27000)

f(prefixLogicalProps, browsers =>
  prefix(
    [
      'border-inline-start',
      'border-inline-end',
      'margin-inline-start',
      'margin-inline-end',
      'padding-inline-start',
      'padding-inline-end'
    ],
    {
      feature: 'css-logical-props',
      browsers
    }
  )
)

f(prefixLogicalProps, { match: /x\s#2/ }, browsers =>
  prefix(
    [
      'border-block-start',
      'border-block-end',
      'margin-block-start',
      'margin-block-end',
      'padding-block-start',
      'padding-block-end'
    ],
    {
      feature: 'css-logical-props',
      browsers
    }
  )
)

// CSS appearance
let prefixAppearance = __webpack_require__(40855)

f(prefixAppearance, { match: /#2|x/ }, browsers =>
  prefix(['appearance'], {
    feature: 'css-appearance',
    browsers
  })
)

// CSS Scroll snap points
let prefixSnappoints = __webpack_require__(35569)

f(prefixSnappoints, browsers =>
  prefix(
    [
      'scroll-snap-type',
      'scroll-snap-coordinate',
      'scroll-snap-destination',
      'scroll-snap-points-x',
      'scroll-snap-points-y'
    ],
    {
      feature: 'css-snappoints',
      browsers
    }
  )
)

// CSS Regions
let prefixRegions = __webpack_require__(73087)

f(prefixRegions, browsers =>
  prefix(['flow-into', 'flow-from', 'region-fragment'], {
    feature: 'css-regions',
    browsers
  })
)

// CSS image-set
let prefixImageSet = __webpack_require__(14273)

f(prefixImageSet, browsers =>
  prefix(['image-set'], {
    props: [
      'background',
      'background-image',
      'border-image',
      'cursor',
      'mask',
      'mask-image',
      'list-style',
      'list-style-image',
      'content'
    ],
    feature: 'css-image-set',
    browsers
  })
)

// Writing Mode
let prefixWritingMode = __webpack_require__(75143)

f(prefixWritingMode, { match: /a|x/ }, browsers =>
  prefix(['writing-mode'], {
    feature: 'css-writing-mode',
    browsers
  })
)

// Cross-Fade Function
let prefixCrossFade = __webpack_require__(65910)

f(prefixCrossFade, browsers =>
  prefix(['cross-fade'], {
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ],
    feature: 'css-cross-fade',
    browsers
  })
)

// Read Only selector
let prefixReadOnly = __webpack_require__(26004)

f(prefixReadOnly, browsers =>
  prefix([':read-only', ':read-write'], {
    selector: true,
    feature: 'css-read-only-write',
    browsers
  })
)

// Text Emphasize
let prefixTextEmphasis = __webpack_require__(45393)

f(prefixTextEmphasis, browsers =>
  prefix(
    [
      'text-emphasis',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-emphasis-color'
    ],
    {
      feature: 'text-emphasis',
      browsers
    }
  )
)

// CSS Grid Layout
let prefixGrid = __webpack_require__(26769)

f(prefixGrid, browsers => {
  prefix(['display-grid', 'inline-grid'], {
    props: ['display'],
    feature: 'css-grid',
    browsers
  })
  prefix(
    [
      'grid-template-columns',
      'grid-template-rows',
      'grid-row-start',
      'grid-column-start',
      'grid-row-end',
      'grid-column-end',
      'grid-row',
      'grid-column',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'place-self'
    ],
    {
      feature: 'css-grid',
      browsers
    }
  )
})

f(prefixGrid, { match: /a x/ }, browsers =>
  prefix(['grid-column-align', 'grid-row-align'], {
    feature: 'css-grid',
    browsers
  })
)

// CSS text-spacing
let prefixTextSpacing = __webpack_require__(21547)

f(prefixTextSpacing, browsers =>
  prefix(['text-spacing'], {
    feature: 'css-text-spacing',
    browsers
  })
)

// :any-link selector
let prefixAnyLink = __webpack_require__(85475)

f(prefixAnyLink, browsers =>
  prefix([':any-link'], {
    selector: true,
    feature: 'css-any-link',
    browsers
  })
)

// unicode-bidi

let bidiIsolate = __webpack_require__(7964)

f(bidiIsolate, browsers =>
  prefix(['isolate'], {
    props: ['unicode-bidi'],
    feature: 'css-unicode-bidi',
    browsers
  })
)

let bidiPlaintext = __webpack_require__(32387)

f(bidiPlaintext, browsers =>
  prefix(['plaintext'], {
    props: ['unicode-bidi'],
    feature: 'css-unicode-bidi',
    browsers
  })
)

let bidiOverride = __webpack_require__(55893)

f(bidiOverride, { match: /y x/ }, browsers =>
  prefix(['isolate-override'], {
    props: ['unicode-bidi'],
    feature: 'css-unicode-bidi',
    browsers
  })
)

// overscroll-behavior selector
let prefixOverscroll = __webpack_require__(59399)

f(prefixOverscroll, { match: /a #1/ }, browsers =>
  prefix(['overscroll-behavior'], {
    feature: 'css-overscroll-behavior',
    browsers
  })
)

// text-orientation
let prefixTextOrientation = __webpack_require__(75430)

f(prefixTextOrientation, browsers =>
  prefix(['text-orientation'], {
    feature: 'css-text-orientation',
    browsers
  })
)

// print-color-adjust
let prefixPrintAdjust = __webpack_require__(78426)

f(prefixPrintAdjust, browsers =>
  prefix(['print-color-adjust', 'color-adjust'], {
    feature: 'css-print-color-adjust',
    browsers
  })
)


/***/ })

}]);
//# sourceMappingURL=169.bundle.js.map