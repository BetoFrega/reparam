window.Frega = window.Frega || {}
/**
 * Frega.reparam saves the selected parameters on localStorage for 30 minutes and applies the to
 * the <a href> tags with a specific ID.
 * @param options.linkId The id for the <a href> tag
 * @param options.params the params that should be saved
 */
window.Frega.reparam = function (options) {
  var validParamsInUrl = document.location.search.substr(1).split('&').map(function (value) {
    return value.split('=')
  }).filter(function (param) {
    return ~options.params.indexOf(param[0])
  })

  if (validParamsInUrl[0]) {
    saveParams(validParamsInUrl)
  } else if (getSavedParams()) {
    saveParams(getSavedParams())
  } else {
    saveParams({})
  }

  function saveParams (params) {
    window.localStorage.setItem('reparam-params-config', JSON.stringify({
      params: params,
      expires: new Date((new Date()).getTime() + 30 * 60000)
    }))
  }

  function getSavedParams () {
    var savedItem = JSON.parse(window.localStorage.getItem('reparam-params-config'))
    if ((new Date(savedItem.expires)).getTime() > (new Date()).getTime()) {
      return savedItem.params
    }
  }

  document.addEventListener('click', function (event) {
    var target = event.target
    var separator = ~target.href.indexOf('?') ? '&' : '?'
    var concatedParams = getSavedParams().map(function (param) {
      console.log(param)
      return param.join('=')
    }).join('&')
    console.log(concatedParams)
    if (target.id === options.linkId) {
      target.href = target.href + separator + concatedParams
    }
  })
}
