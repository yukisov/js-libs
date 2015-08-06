(function(global) {
  "use strict";

  if (typeof global.app === 'undefined') {
    global.app = {};
  }

  global.app.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = app,
        i;

    // Remove redundant global on top
    if (parts[0] === "app") {
      parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
      // Create property if not exist
      if (typeof parent[parts[i]] === 'undefined') {
        parent[parts[i]] = {};
      }
      parent = parent[parts[i]];
    }
    return parent;
  };

})((typeof window === 'object' && window) || global);
