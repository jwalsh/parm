window.getParam = function(paramName) {
  var search = window.location.search;
  var result;
  if (search) {
    var params = search.split('?')[1].split('&');
    if (params) {
      for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        var k = p[0];
        var v = p[1];
        if (k === paramName) {
          result = v;
          break;
        }
      }
    }
  }
  return result;
};
