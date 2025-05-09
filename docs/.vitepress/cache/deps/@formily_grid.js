import {
  batch,
  define,
  observable,
  reaction
} from "./chunk-BXC2GHWD.js";
import "./chunk-PR4QN5HX.js";

// node_modules/@formily/grid/esm/observer.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var isHTMLElement = function(node) {
  return node.nodeType === 1;
};
var ChildListMutationObserver = (
  /** @class */
  function() {
    function ChildListMutationObserver2(callback) {
      var _this = this;
      this.childList = [];
      this.handler = function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach(function(node) {
              if (isHTMLElement(node)) {
                _this.addObserver(node);
              }
            });
            mutation.removedNodes.forEach(function(node) {
              if (isHTMLElement(node)) {
                _this.removeObserver(node);
              }
            });
          }
        });
        _this.callback(mutations, _this.observer);
      };
      this.observe = function(element, init) {
        _this.init = init;
        _this.observeChildList(element);
        _this.observer.observe(element, __assign(__assign({}, _this.init), { subtree: false, childList: true, characterData: false, characterDataOldValue: false, attributeOldValue: false }));
      };
      this.disconnect = function() {
        _this.observer.disconnect();
      };
      this.callback = callback;
      this.observer = new MutationObserver(this.handler);
    }
    ChildListMutationObserver2.prototype.observeChildList = function(element) {
      var _this = this;
      Array.from(element.children).forEach(function(node) {
        _this.addObserver(node);
      });
    };
    ChildListMutationObserver2.prototype.addObserver = function(element) {
      var _this = this;
      var child = this.childList.find(function(t) {
        return t.element === element;
      });
      if (!child) {
        var childIndex_1 = this.childList.length;
        var child_1 = {
          element,
          observer: new MutationObserver(this.callback),
          dispose: function() {
            if (child_1.observer) {
              child_1.observer.disconnect();
              delete child_1.observer;
              _this.childList.splice(childIndex_1, 1);
            }
          }
        };
        child_1.observer.observe(child_1.element, __assign(__assign({}, this.init), { subtree: false, childList: false, characterData: false, characterDataOldValue: false, attributeOldValue: false }));
        this.childList.push(child_1);
      }
    };
    ChildListMutationObserver2.prototype.removeObserver = function(element) {
      var _a;
      var child = this.childList.find(function(t) {
        return t.element === element;
      });
      if (child) {
        (_a = child.dispose) === null || _a === void 0 ? void 0 : _a.call(child);
      }
    };
    return ChildListMutationObserver2;
  }()
);

// node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
var resizeObservers = [];

// node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js
var hasActiveObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.activeTargets.length > 0;
  });
};

// node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js
var hasSkippedObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.skippedTargets.length > 0;
  });
};

// node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
  var event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  window.dispatchEvent(event);
};

// node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

// node_modules/@juggle/resize-observer/lib/utils/freeze.js
var freeze = function(obj) {
  return Object.freeze(obj);
};

// node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js
var ResizeObserverSize = /* @__PURE__ */ function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze(this);
  }
  return ResizeObserverSize2;
}();

// node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js
var DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();

// node_modules/@juggle/resize-observer/lib/utils/element.js
var isSVG = function(target) {
  return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(), width = _a.width, height = _a.height;
    return !width && !height;
  }
  var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
  var _a;
  if (obj instanceof Element) {
    return true;
  }
  var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
  return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};

// node_modules/@juggle/resize-observer/lib/utils/global.js
var global = typeof window !== "undefined" ? window : {};

// node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js
var cache = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent);
var parseDimension = function(pixel) {
  return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache.has(target) && !forceRecalculation) {
    return cache.get(target);
  }
  if (isHidden(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }
  var cs = getComputedStyle(target);
  var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === "border-box";
  var switchSizes = verticalRegexp.test(cs.writingMode || "");
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = freeze({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
  var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
};

// node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js
var ResizeObserverEntry = /* @__PURE__ */ function() {
  function ResizeObserverEntry2(target) {
    var boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze([boxes.borderBoxSize]);
    this.contentBoxSize = freeze([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();

// node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js
var calculateDepthForNode = function(node) {
  if (isHidden(node)) {
    return Infinity;
  }
  var depth = 0;
  var parent = node.parentNode;
  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }
  return depth;
};

// node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js
var broadcastActiveObservations = function() {
  var shallowestDepth = Infinity;
  var callbacks2 = [];
  resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }
    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new ResizeObserverEntry(ot.target);
      var targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
};

// node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js
var gatherActiveObservationsAtDepth = function(depth) {
  resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};

// node_modules/@juggle/resize-observer/lib/utils/process.js
var process = function() {
  var depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
};

// node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js
var trigger;
var callbacks = [];
var notify = function() {
  return callbacks.splice(0).forEach(function(cb) {
    return cb();
  });
};
var queueMicroTask = function(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode("");
    var config = { characterData: true };
    new MutationObserver(function() {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
};

// node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js
var queueResizeObserver = function(cb) {
  queueMicroTask(function ResizeObserver2() {
    requestAnimationFrame(cb);
  });
};

// node_modules/@juggle/resize-observer/lib/utils/scheduler.js
var watching = 0;
var isWatching = function() {
  return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var time = function(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
  function Scheduler2() {
    var _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    var until = time(timeout);
    queueResizeObserver(function() {
      var elementsHaveResized = false;
      try {
        elementsHaveResized = process();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    var _this = this;
    var cb = function() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };
    document.body ? cb() : global.addEventListener("DOMContentLoaded", cb);
  };
  Scheduler2.prototype.start = function() {
    var _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function(name) {
        return global.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    var _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function(name) {
        return global.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
};

// node_modules/@juggle/resize-observer/lib/ResizeObservation.js
var skipNotifyOnElement = function(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    var size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();

// node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js
var ResizeObserverDetail = /* @__PURE__ */ function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();

// node_modules/@juggle/resize-observer/lib/ResizeObserverController.js
var observerMap = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
  for (var i = 0; i < observationTargets.length; i += 1) {
    if (observationTargets[i].target === target) {
      return i;
    }
  }
  return -1;
};
var ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    var detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    var detail = observerMap.get(resizeObserver);
    var firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    var detail = observerMap.get(resizeObserver);
    var index = getObservationIndex(detail.observationTargets, target);
    var lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    var _this = this;
    var detail = observerMap.get(resizeObserver);
    detail.observationTargets.slice().forEach(function(ot) {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();

// node_modules/@juggle/resize-observer/lib/ResizeObserver.js
var ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver2.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver2.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver2.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver2;
}();

// node_modules/@formily/grid/esm/index.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var SpanRegExp = /span\s*(\d+)/;
var isValid = function(value) {
  return value !== void 0 && value !== null;
};
var calcBreakpointIndex = function(breakpoints, width) {
  if (Array.isArray(breakpoints)) {
    for (var i = 0; i < breakpoints.length; i++) {
      if (width <= breakpoints[i]) {
        return i;
      }
    }
  }
  return -1;
};
var calcFactor = function(value, breakpointIndex) {
  var _a;
  if (Array.isArray(value)) {
    if (breakpointIndex === -1)
      return value[0];
    return (_a = value[breakpointIndex]) !== null && _a !== void 0 ? _a : value[value.length - 1];
  } else {
    return value;
  }
};
var parseGridNode = function(elements) {
  return Array.from(elements).reduce(function(buf, element, index) {
    var _a;
    var style = getComputedStyle(element);
    var visible = !(style.display === "none");
    var origin = element.getAttribute("data-grid-span");
    var span = (_a = parseSpan(style.gridColumnStart)) !== null && _a !== void 0 ? _a : 1;
    var originSpan = Number(origin !== null && origin !== void 0 ? origin : span);
    var node = {
      index,
      span,
      visible,
      originSpan,
      element
    };
    if (!origin) {
      element.setAttribute("data-grid-span", String(span));
    }
    return buf.concat(node);
  }, []);
};
var calcChildTotalColumns = function(nodes, shadow) {
  if (shadow === void 0) {
    shadow = false;
  }
  return nodes.reduce(function(buf, node) {
    var _a;
    if (!shadow) {
      if (!node.visible)
        return buf;
    }
    if (node.originSpan === -1)
      return buf + ((_a = node.span) !== null && _a !== void 0 ? _a : 1);
    return buf + node.span;
  }, 0);
};
var calcChildOriginTotalColumns = function(nodes, shadow) {
  if (shadow === void 0) {
    shadow = false;
  }
  return nodes.reduce(function(buf, node) {
    var _a;
    if (!shadow) {
      if (!node.visible)
        return buf;
    }
    if (node.originSpan === -1)
      return buf + ((_a = node.span) !== null && _a !== void 0 ? _a : 1);
    return buf + node.originSpan;
  }, 0);
};
var calcSatisfyColumns = function(width, maxColumns, minColumns, maxWidth, minWidth, gap) {
  var results = [];
  for (var columns = minColumns; columns <= maxColumns; columns++) {
    var innerWidth_1 = width - (columns - 1) * gap;
    var columnWidth = innerWidth_1 / columns;
    if (columnWidth >= minWidth && columnWidth <= maxWidth) {
      results.push(columns);
    } else if (columnWidth < minWidth) {
      results.push(Math.min(Math.floor(innerWidth_1 / minWidth), maxColumns));
    } else if (columnWidth > maxWidth) {
      results.push(Math.min(Math.floor(innerWidth_1 / maxWidth), maxColumns));
    }
  }
  return Math.max.apply(Math, __spreadArray([], __read(results), false));
};
var parseSpan = function(gridColumnStart) {
  var _a, _b;
  return Number((_b = (_a = String(gridColumnStart).match(SpanRegExp)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : 1);
};
var factor = function(value, grid) {
  return isValid(value) ? calcFactor(value, grid.breakpoint) : value;
};
var resolveChildren = function(grid) {
  var walked = 0, shadowWalked = 0, rowIndex = 0, shadowRowIndex = 0;
  if (!grid.ready)
    return;
  grid.children = grid.children.map(function(node) {
    var _a;
    var columnIndex = walked % grid.columns;
    var shadowColumnIndex = shadowWalked % grid.columns;
    var remainColumns = grid.columns - columnIndex;
    var originSpan = node.originSpan;
    var targetSpan = originSpan > grid.columns ? grid.columns : originSpan;
    var span = grid.options.strictAutoFit ? targetSpan : targetSpan > remainColumns ? remainColumns : targetSpan;
    var gridColumn = originSpan === -1 ? "span ".concat(remainColumns, " / -1") : "span ".concat(span, " / auto");
    if (node.element.style.gridColumn !== gridColumn) {
      node.element.style.gridColumn = gridColumn;
    }
    if (node.visible) {
      walked += span;
    }
    shadowWalked += span;
    if (columnIndex === 0) {
      rowIndex++;
    }
    if (shadowColumnIndex == 0) {
      shadowRowIndex++;
    }
    node.shadowRow = shadowRowIndex;
    node.shadowColumn = shadowColumnIndex + 1;
    if (node.visible) {
      node.row = rowIndex;
      node.column = columnIndex + 1;
    }
    if ((_a = grid.options) === null || _a === void 0 ? void 0 : _a.shouldVisible) {
      if (!grid.options.shouldVisible(node, grid)) {
        if (node.visible) {
          node.element.style.display = "none";
        }
        node.visible = false;
      } else {
        if (!node.visible) {
          node.element.style.display = "";
        }
        node.visible = true;
      }
    }
    return node;
  });
};
var nextTick = function(callback) {
  return Promise.resolve(0).then(callback);
};
var Grid = (
  /** @class */
  function() {
    function Grid2(options) {
      var _this = this;
      this.width = 0;
      this.height = 0;
      this.children = [];
      this.childTotalColumns = 0;
      this.shadowChildTotalColumns = 0;
      this.childOriginTotalColumns = 0;
      this.shadowChildOriginTotalColumns = 0;
      this.ready = false;
      this.connect = function(container) {
        if (container) {
          _this.container = container;
          var initialize = batch.bound(function() {
            digest_1();
            _this.ready = true;
          });
          var digest_1 = batch.bound(function() {
            _this.children = parseGridNode(_this.container.children);
            _this.childTotalColumns = calcChildTotalColumns(_this.children);
            _this.shadowChildTotalColumns = calcChildTotalColumns(_this.children, true);
            _this.childOriginTotalColumns = calcChildOriginTotalColumns(_this.children);
            _this.shadowChildOriginTotalColumns = calcChildOriginTotalColumns(_this.children, true);
            var rect = _this.container.getBoundingClientRect();
            if (rect.width && rect.height) {
              _this.width = rect.width;
              _this.height = rect.height;
            }
            resolveChildren(_this);
            nextTick(function() {
              var _a, _b;
              (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.onDigest) === null || _b === void 0 ? void 0 : _b.call(_a, _this);
            });
            if (!_this.ready) {
              nextTick(function() {
                var _a, _b;
                (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.onInitialized) === null || _b === void 0 ? void 0 : _b.call(_a, _this);
              });
            }
          });
          var mutationObserver_1 = new ChildListMutationObserver(digest_1);
          var resizeObserver_1 = new ResizeObserver(digest_1);
          var dispose_1 = reaction(function() {
            return __assign2({}, _this.options);
          }, digest_1);
          resizeObserver_1.observe(_this.container);
          mutationObserver_1.observe(_this.container, {
            attributeFilter: ["data-grid-span"],
            attributes: true
          });
          initialize();
          return function() {
            resizeObserver_1.unobserve(_this.container);
            resizeObserver_1.disconnect();
            mutationObserver_1.disconnect();
            dispose_1();
            _this.children = [];
          };
        }
        return function() {
        };
      };
      this.options = __assign2({ breakpoints: [720, 1280, 1920], columnGap: 8, rowGap: 4, minWidth: 100, colWrap: true, strictAutoFit: false }, options);
      define(this, {
        options: observable.shallow,
        width: observable.ref,
        height: observable.ref,
        ready: observable.ref,
        children: observable.ref,
        childOriginTotalColumns: observable.ref,
        shadowChildOriginTotalColumns: observable.ref,
        shadowChildTotalColumns: observable.ref,
        childTotalColumns: observable.ref,
        columns: observable.computed,
        templateColumns: observable.computed,
        gap: observable.computed,
        maxColumns: observable.computed,
        minColumns: observable.computed,
        maxWidth: observable.computed,
        minWidth: observable.computed,
        breakpoints: observable.computed,
        breakpoint: observable.computed,
        rowGap: observable.computed,
        columnGap: observable.computed,
        colWrap: observable.computed
      });
    }
    Object.defineProperty(Grid2.prototype, "breakpoints", {
      get: function() {
        return this.options.breakpoints;
      },
      set: function(breakpoints) {
        this.options.breakpoints = breakpoints;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "breakpoint", {
      get: function() {
        return calcBreakpointIndex(this.options.breakpoints, this.width);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "maxWidth", {
      get: function() {
        var _a;
        return (_a = factor(this.options.maxWidth, this)) !== null && _a !== void 0 ? _a : Infinity;
      },
      set: function(maxWidth) {
        this.options.maxWidth = maxWidth;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "minWidth", {
      get: function() {
        var _a;
        return (_a = factor(this.options.minWidth, this)) !== null && _a !== void 0 ? _a : 100;
      },
      set: function(minWidth) {
        this.options.minWidth = minWidth;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "maxColumns", {
      get: function() {
        var _a;
        return (_a = factor(this.options.maxColumns, this)) !== null && _a !== void 0 ? _a : Infinity;
      },
      set: function(maxColumns) {
        this.options.maxColumns = maxColumns;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "maxRows", {
      get: function() {
        var _a;
        return (_a = this.options.maxRows) !== null && _a !== void 0 ? _a : Infinity;
      },
      set: function(maxRows) {
        this.options.maxRows = maxRows;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "minColumns", {
      get: function() {
        var _a;
        return (_a = factor(this.options.minColumns, this)) !== null && _a !== void 0 ? _a : 1;
      },
      set: function(minColumns) {
        this.options.minColumns = minColumns;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "rowGap", {
      get: function() {
        var _a;
        return (_a = factor(this.options.rowGap, this)) !== null && _a !== void 0 ? _a : 5;
      },
      set: function(rowGap) {
        this.options.rowGap = rowGap;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "columnGap", {
      get: function() {
        var _a;
        return (_a = factor(this.options.columnGap, this)) !== null && _a !== void 0 ? _a : 10;
      },
      set: function(columnGap) {
        this.options.columnGap = columnGap;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "colWrap", {
      get: function() {
        var _a;
        return (_a = factor(this.options.colWrap, this)) !== null && _a !== void 0 ? _a : true;
      },
      set: function(colWrap) {
        this.options.colWrap = colWrap;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "columns", {
      get: function() {
        if (!this.ready)
          return 0;
        var originTotalColumns = this.childOriginTotalColumns;
        if (this.colWrap === false) {
          return originTotalColumns;
        }
        var baseColumns = this.childSize;
        var strictMaxWidthColumns = Math.round(this.width / (this.maxWidth + this.columnGap));
        var looseMaxWidthColumns = Math.min(originTotalColumns, strictMaxWidthColumns);
        var maxWidthColumns = this.options.strictAutoFit ? strictMaxWidthColumns : looseMaxWidthColumns;
        var strictMinWidthColumns = Math.round(this.width / (this.minWidth + this.columnGap));
        var looseMinWidthColumns = Math.min(originTotalColumns, strictMinWidthColumns);
        var minWidthColumns = this.options.strictAutoFit ? strictMinWidthColumns : looseMinWidthColumns;
        var minCalculatedColumns = Math.min(baseColumns, originTotalColumns, maxWidthColumns, minWidthColumns);
        var maxCalculatedColumns = Math.max(baseColumns, originTotalColumns, maxWidthColumns, minWidthColumns);
        var finalColumns = calcSatisfyColumns(this.width, maxCalculatedColumns, minCalculatedColumns, this.maxWidth, this.minWidth, this.columnGap);
        if (finalColumns >= this.maxColumns) {
          return this.maxColumns;
        }
        if (finalColumns <= this.minColumns) {
          return this.minColumns;
        }
        return finalColumns;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "rows", {
      get: function() {
        return Math.ceil(this.childTotalColumns / this.columns);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "shadowRows", {
      get: function() {
        return Math.ceil(this.shadowChildTotalColumns / this.columns);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "templateColumns", {
      get: function() {
        if (!this.width)
          return "";
        if (this.maxWidth === Infinity) {
          return "repeat(".concat(this.columns, ",minmax(0,1fr))");
        }
        if (this.options.strictAutoFit !== true) {
          var columnWidth = (this.width - (this.columns - 1) * this.columnGap) / this.columns;
          if (columnWidth < this.minWidth || columnWidth > this.maxWidth) {
            return "repeat(".concat(this.columns, ",minmax(0,1fr))");
          }
        }
        return "repeat(".concat(this.columns, ",minmax(").concat(this.minWidth, "px,").concat(this.maxWidth, "px))");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "gap", {
      get: function() {
        return "".concat(this.rowGap, "px ").concat(this.columnGap, "px");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "childSize", {
      get: function() {
        return this.children.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "fullnessLastColumn", {
      get: function() {
        var _a;
        return this.columns === ((_a = this.children[this.childSize - 1]) === null || _a === void 0 ? void 0 : _a.span);
      },
      enumerable: false,
      configurable: true
    });
    Grid2.id = function(options) {
      if (options === void 0) {
        options = {};
      }
      return JSON.stringify([
        "maxRows",
        "maxColumns",
        "minColumns",
        "maxWidth",
        "minWidth",
        "breakpoints",
        "columnGap",
        "rowGap",
        "colWrap",
        "strictAutoFit"
      ].map(function(key) {
        return options[key];
      }));
    };
    return Grid2;
  }()
);
export {
  Grid
};
//# sourceMappingURL=@formily_grid.js.map
