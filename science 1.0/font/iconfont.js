;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-caidan-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M61.64 218.9c0 31.414 25.466 56.88 56.88 56.88s56.88-25.466 56.88-56.88c0-31.414-25.466-56.88-56.88-56.88-31.414 0-56.88 25.466-56.88 56.88z"  ></path>' +
    '' +
    '<path d="M54.44 500.78c0 31.447 25.493 56.94 56.94 56.94s56.94-25.492 56.94-56.94c0-31.447-25.493-56.94-56.94-56.94-31.447 0-56.94 25.492-56.94 56.94z"  ></path>' +
    '' +
    '<path d="M54.44 784.1c0 31.447 25.493 56.94 56.94 56.94s56.94-25.493 56.94-56.94c0-31.447-25.493-56.94-56.94-56.94-31.447 0-56.94 25.493-56.94 56.94z"  ></path>' +
    '' +
    '<path d="M965.18 216.26c0 30-22.26 54.24-49.8 54.24h-590.4c-27.54 0-49.86-24.3-49.86-54.24v0c0-29.94 22.26-54.24 49.86-54.24h590.34c27.6 0 49.86 24.3 49.86 54.24v0z"  ></path>' +
    '' +
    '<path d="M965.18 498.2c0 29.94-22.26 54.24-49.8 54.24h-590.4c-27.54 0-49.86-24.3-49.86-54.24v0c0-30 22.26-54.24 49.86-54.24h590.34c27.6-0.060 49.86 24.24 49.86 54.24v0z"  ></path>' +
    '' +
    '<path d="M965.18 781.34c0 30-22.26 54.3-49.8 54.3h-590.4c-27.54 0-49.86-24.3-49.86-54.3v0c0-29.88 22.26-54.18 49.86-54.18h590.34c27.6 0 49.86 24.3 49.86 54.18v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)