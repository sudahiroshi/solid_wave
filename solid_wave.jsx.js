// generatedy by JSX compiler 0.9.69 (2013-11-06 16:43:53 +0900; ac67334e33135c0e48815590e92309729fbf7ce9)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = true;
function StopIteration() {
	Error.call(this);
	this.name = "StopIteration";
	if (Error.captureStackTrace) Error.captureStackTrace(this, StopIteration);
};

$__jsx_extend([StopIteration], Error);
function solid_wave(vc1, vc1b, vc2, vc2b, vc3, vc3b) {
	var $this = this;
	var nl;
	this.timer1 = null;
	this.timer2 = null;
	this.timer3 = null;
	this.sl1 = 1;
	this.sl2 = 1;
	this.i = 0;
	this.vc1 = vc1;
	this.vc1b = vc1b;
	this.vc2 = vc2;
	this.vc2b = vc2b;
	this.vc3 = vc3;
	this.vc3b = vc3b;
	this.vc1.scale$NNNN(- 111, - 40, 560, 80);
	this.vc2.scale$NNNN(- 112, - 50, 590, 95);
	this.vc3.scale$NNNN(- 112, - 45, 590, 135.246);
	this.timer1 = new vbTimer();
	this.timer1.interval = 100;
	this.timer1.timer = (function () {
		$this.animation1$();
		$this.animation2$();
		$this.animation3$();
	});
	nl = new nylon();
	nl.on$SF$HXV$("start", (function (dummy) {
		$this.init$();
	}));
	nl.on$SF$HXV$("stop", (function (dummy) {
		$this.timer1.disable$();
	}));
};

$__jsx_extend([solid_wave], Object);
function solid_wave$main$SSS(canvas1Id, canvas2Id, canvas3Id) {
	var elm1;
	var vc1;
	var elm1b;
	var vc1b;
	var elm2;
	var vc2;
	var elm2b;
	var vc2b;
	var elm3;
	var vc3;
	var elm3b;
	var vc3b;
	var sw;
	elm1 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:23:37] detected invalid cast, value is not an instance of the designated type or null\n        var elm1 = dom.id(canvas1Id) as HTMLCanvasElement;\n                                     ^^\n");
		}
		return $v;
	}(dom$id$S(canvas1Id)));
	vc1 = new VCanvas(elm1);
	elm1b = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:25:44] detected invalid cast, value is not an instance of the designated type or null\n        var elm1b = dom.id(canvas1Id + \"b\") as HTMLCanvasElement;\n                                            ^^\n");
		}
		return $v;
	}(dom$id$S(canvas1Id + "b")));
	vc1b = new VCanvas(elm1b);
	elm2 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:28:37] detected invalid cast, value is not an instance of the designated type or null\n        var elm2 = dom.id(canvas2Id) as HTMLCanvasElement;\n                                     ^^\n");
		}
		return $v;
	}(dom$id$S(canvas2Id)));
	vc2 = new VCanvas(elm2);
	elm2b = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:30:44] detected invalid cast, value is not an instance of the designated type or null\n        var elm2b = dom.id(canvas2Id + \"b\") as HTMLCanvasElement;\n                                            ^^\n");
		}
		return $v;
	}(dom$id$S(canvas2Id + "b")));
	vc2b = new VCanvas(elm2b);
	elm3 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:33:37] detected invalid cast, value is not an instance of the designated type or null\n        var elm3 = dom.id(canvas3Id) as HTMLCanvasElement;\n                                     ^^\n");
		}
		return $v;
	}(dom$id$S(canvas3Id)));
	vc3 = new VCanvas(elm3);
	elm3b = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:35:44] detected invalid cast, value is not an instance of the designated type or null\n        var elm3b = dom.id(canvas3Id + \"b\") as HTMLCanvasElement;\n                                            ^^\n");
		}
		return $v;
	}(dom$id$S(canvas3Id + "b")));
	vc3b = new VCanvas(elm3b);
	sw = new solid_wave(vc1, vc1b, vc2, vc2b, vc3, vc3b);
	sw.init$();
};

solid_wave.main$SSS = solid_wave$main$SSS;

solid_wave.prototype.init$ = function () {
	this.vc1b.beginPath$();
	this.vc1b.cls$();
	this.vc1b.print$NNS(290, 10, "Miida Laboratory, Chiba Institute of Technology");
	this.vc1.stroke$();
	this.timer1.enable$();
};


solid_wave.prototype.animation1$ = function () {
	var p1;
	var mx;
	var mx2;
	var p;
	var pb;
	var t;
	var j;
	var xx;
	var xxx;
	var k;
	var yyy;
	p1 = this.vc1;
	mx = 30;
	mx2 = mx / 2;
	p = 2 * Math.PI / mx * 2;
	pb = 2 * Math.PI / 40;
	t = pb * this.i;
	p1.scale$NNNN(mx * - 0.07, - 5.5, mx * 1.177, 11);
	p1.beginPath$();
	p1.forecolor$NNN(120, 120, 120);
	p1.cls$();
	p1.line$NNNN(mx * - 0.04, 0, mx * 1.065, 0);
	p1.line$NNNN(mx * 1.77 / 3.45, - 4.5, mx * 1.77 / 3.45, 4.4);
	p1.stroke$();
	p1.beginPath$();
	p1.forecolor$NNN(0, 0, 0);
	for (j = 0; j <= mx; j++) {
		xx = p * j;
		xxx = j + Math.cos(t - xx);
		for (k = 1; k <= 9; k++) {
			yyy = - k + 5.1;
			p1.circle$NNN(xxx, - yyy, 1);
		}
	}
	p1.fill$();
	p1.beginPath$();
	p1.forecolor$NNN(255, 0, 0);
	xx = p * mx2;
	xxx = mx2 + Math.cos(t - xx);
	for (k = 1; k <= 9; k++) {
		yyy = - k + 5.1;
		p1.circle$NNN(xxx, - yyy, 1);
	}
	yyy = - 5 + 5.1;
	for (j = 0; j <= mx; j++) {
		xx = p * j;
		xxx = j + Math.cos(t - xx);
		p1.circle$NNN(xxx, - yyy, 1);
	}
	p1.fill$();
	this.i++;
};


solid_wave.prototype.animation2$ = function () {
	var p2;
	var mx;
	var p;
	var pb;
	var t;
	var j;
	var k;
	var xx;
	var xxx;
	var yyy;
	p2 = this.vc2;
	mx = 30;
	p = 2.0 * Math.PI / mx * 2;
	pb = 2.0 * Math.PI / 40;
	t = pb * this.i;
	p2.scale$NNNN(mx * - 0.004, - 6, mx * 1.1, 12);
	p2.beginPath$();
	p2.forecolor$NNN(120, 120, 120);
	p2.cls$();
	p2.line$NNNN(mx * - 0.01, 0, mx * 1.02, 0);
	p2.line$NNNN(mx * 1.77 / 3.45, - 4.5, mx * 1.77 / 3.45, 4.4);
	p2.stroke$();
	p2.beginPath$();
	p2.forecolor$NNN(0, 0, 0);
	for (j = 0; j <= mx; j++) {
		for (k = 2; k <= 10; k++) {
			xx = p * j;
			xxx = j + 0.5;
			yyy = 1.5 * Math.sin(t - xx) + k - 5.7;
			p2.circle$NNN(xxx, - yyy, 1);
		}
	}
	p2.fill$();
	this.i++;
};


solid_wave.prototype.animation3$ = function () {
	var p3;
	var vy;
	var vyy;
	var mx;
	var mx2;
	var mx3;
	var my;
	var myt;
	var p;
	var pb;
	var t;
	var j;
	var xx;
	var cs;
	var sn;
	var k;
	var xxx;
	var yyy;
	p3 = this.vc3;
	vy = 1.3;
	vyy = 0.63 * vy;
	mx = 30;
	mx2 = mx / 2;
	mx3 = mx2 + 0.4;
	my = mx2;
	myt = - my / 2;
	p = 2.0 * Math.PI / mx * 2;
	pb = 2.0 * Math.PI / 40;
	t = pb * this.i;
	p3.scale$NNNN(mx * - 0.004, myt / 1.1, mx * 1.17, my / 1.3);
	p3.beginPath$();
	p3.cls$();
	p3.forecolor$NNN(120, 120, 120);
	p3.line$NNNN(mx3 + 0.1, - 5.8, mx3 + 0.1, 3.7);
	p3.line$NNNN(- 1.1, - 3, mx * 1.05, - 3);
	p3.stroke$();
	p3.beginPath$();
	p3.forecolor$NNN(0, 0, 0);
	for (j = 0; j <= mx; j++) {
		xx = p * j;
		cs = vyy * Math.cos(t - xx);
		sn = 1.2 * vy * Math.sin(t - xx);
		for (k = 0; k <= 6; k++) {
			xxx = j + cs * (4 - k) / 4 * (8 - k) / 8 * 0.5;
			yyy = sn * (6 - k) / 6 - k + 3;
			p3.circle$NNN(xxx, - yyy, 1);
		}
	}
	p3.fill$();
	this.i++;
};


function gui() {
};

$__jsx_extend([gui], Object);
function gui$main$SSSS(btn1, btn2, btn3, btn4) {
	var nl2;
	var b1;
	var b2;
	var b3;
	var b4;
	nl2 = new nylon();
	b1 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLButtonElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:208:30] detected invalid cast, value is not an instance of the designated type or null\n        var b1 = dom.id(btn1) as HTMLButtonElement;\n                              ^^\n");
		}
		return $v;
	}(dom$id$S(btn1)));
	b1.addEventListener("click", (function (e) {
		nl2.emit$SHX("start", null);
	}));
	b2 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLButtonElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:212:30] detected invalid cast, value is not an instance of the designated type or null\n        var b2 = dom.id(btn2) as HTMLButtonElement;\n                              ^^\n");
		}
		return $v;
	}(dom$id$S(btn2)));
	b2.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
	}));
	b3 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLButtonElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:216:30] detected invalid cast, value is not an instance of the designated type or null\n        var b3 = dom.id(btn3) as HTMLButtonElement;\n                              ^^\n");
		}
		return $v;
	}(dom$id$S(btn3)));
	b3.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
		nl2.emit$SHX("delta", ({ "top": 0.3 }));
	}));
	b4 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLButtonElement)) {
			debugger;
			throw new Error("[solid_wave.jsx:221:30] detected invalid cast, value is not an instance of the designated type or null\n        var b4 = dom.id(btn4) as HTMLButtonElement;\n                              ^^\n");
		}
		return $v;
	}(dom$id$S(btn4)));
	b4.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
		nl2.emit$SHX("delta", ({ "top": 0.5 }));
	}));
};

gui.main$SSSS = gui$main$SSSS;

function dom() {}
$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/js/web.jsx:29:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.getElementById(id) as HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.getElementById(id)));
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/js/web.jsx:37:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.getElementById(id) as HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.getElementById(id)));
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/js/web.jsx:45:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.createElement(tag) as __noconvert__ HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.createElement(tag)));
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	EventInit.call(this);
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	EventInit.call(this);
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
	UIEventInit.call(this);
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.char = "";
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.locale = "";
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
	this.locale = "";
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	EventInit.call(this);
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function ScrollOptions() {
	this.x = 0;
	this.y = 0;
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function TrackEventInit() {
	EventInit.call(this);
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	EventInit.call(this);
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	EventInit.call(this);
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	EventInit.call(this);
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	EventInit.call(this);
	this.message = "";
	this.filename = "";
	this.lineno = 0;
	this.column = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function DragEventInit() {
	MouseEventInit.call(this);
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], MouseEventInit);
function CloseEventInit() {
	EventInit.call(this);
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	EventInit.call(this);
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	EventInit.call(this);
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	EventInit.call(this);
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function RTCSessionDescriptionInit() {
	this.type = "";
	this.sdp = "";
};

$__jsx_extend([RTCSessionDescriptionInit], Object);
function RTCIceCandidateInit() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

$__jsx_extend([RTCIceCandidateInit], Object);
function RTCIceServer() {
	this.url = "";
	this.credential = null;
};

$__jsx_extend([RTCIceServer], Object);
function RTCConfiguration() {
	this.iceServers = null;
};

$__jsx_extend([RTCConfiguration], Object);
function DataChannelInit() {
	this.reliable = false;
};

$__jsx_extend([DataChannelInit], Object);
function RTCPeerConnectionIceEventInit() {
	EventInit.call(this);
	this.candidate = null;
};

$__jsx_extend([RTCPeerConnectionIceEventInit], EventInit);
function MediaStreamEventInit() {
	EventInit.call(this);
	this.stream = null;
};

$__jsx_extend([MediaStreamEventInit], EventInit);
function DataChannelEventInit() {
	EventInit.call(this);
	this.channel = null;
};

$__jsx_extend([DataChannelEventInit], EventInit);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this.optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	EventInit.call(this);
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	EventInit.call(this);
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	EventInit.call(this);
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
function VCanvas(canvas) {
	this.scaleWidth = 0;
	this.scaleHeight = 0;
	this.scaleTop = 0;
	this.scaleLeft = 0;
	this._scalable = false;
	this._dir_x = 1;
	this._dir_y = 1;
	this._color = [ 0, 0, 0, 1 ];
	this.context = (function ($v) {
		if (! ($v == null || $v instanceof CanvasRenderingContext2D)) {
			debugger;
			throw new Error("[vcanvas.jsx:16:47] detected invalid cast, value is not an instance of the designated type or null\n        this.context = canvas.getContext(\"2d\") as CanvasRenderingContext2D;\n                                               ^^\n");
		}
		return $v;
	}(canvas.getContext("2d")));
	this.canvas = canvas;
};

$__jsx_extend([VCanvas], Object);
VCanvas.prototype.scale$NNNN = function (left, top, width, height) {
	this.scaleLeft = left;
	this.scaleTop = top;
	this.scaleWidth = width;
	this.scaleHeight = height;
	this._scalable = true;
	if (this.scaleWidth < 0) {
		this.scaleWidth = - this.scaleWidth;
		this._dir_x = - 1;
	} else {
		this._dir_x = 1;
	}
	if (this.scaleHeight < 0) {
		this.scaleHeight = - this.scaleHeight;
		this._dir_y = - 1;
	} else {
		this._dir_y = 1;
	}
};


VCanvas.prototype.forecolor$NNN = function (r, g, b) {
	this._color = [ r, g, b, 1 ];
	this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
	this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
};


VCanvas.prototype.forecolor$NNNN = function (r, g, b, a) {
	this._color = [ r, g, b, a ];
	this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
	this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
};


VCanvas.prototype.line$NNNN = function (x1, y1, x2, y2) {
	var xx1;
	var xx2;
	var yy1;
	var yy2;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		xx2 = (x2 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
		yy2 = (y2 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		xx2 = x2;
		yy1 = y1;
		yy2 = y2;
	}
	this.context.moveTo(xx1, yy1);
	this.context.lineTo(xx2, yy2);
};


VCanvas.prototype.lineStart$NN = function (x1, y1) {
	var xx1;
	var yy1;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		yy1 = y1;
	}
	this.context.moveTo(xx1, yy1);
};


VCanvas.prototype.line$NN = function (x1, y1) {
	var xx1;
	var yy1;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		yy1 = y1;
	}
	this.context.lineTo(xx1, yy1);
};


VCanvas.prototype.cls$ = function () {
	this.context.beginPath();
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.context.fill();
};


VCanvas.prototype.print$NNS = function (x, y, str) {
	var xx;
	var yy;
	if (this._scalable) {
		xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx = x;
		yy = y;
	}
	this.context.fillText(str, xx, yy);
};


VCanvas.prototype.pset$NN = function (x, y) {
	var xx;
	var yy;
	if (this._scalable) {
		xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx = x;
		yy = y;
	}
	this.context.moveTo(xx, yy);
	this.context.lineTo(xx + 1, yy + 1);
};


VCanvas.prototype.circle$NNN = function (x, y, radius) {
	var xx;
	var yy;
	xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	this.context.moveTo(xx, yy);
	this.context.arc(xx, yy, radius, 0, Math.PI * 2, false);
};


VCanvas.prototype.rect$NNNN = function (x1, y1, x2, y2) {
	var xx1;
	var yy1;
	var xx2;
	var yy2;
	xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	xx2 = (x2 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy2 = (y2 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	this.context.fillRect(xx1, yy1, xx2 - xx1, yy2 - yy1);
};


VCanvas.prototype.beginPath$ = function () {
	this.context.beginPath();
};


VCanvas.prototype.fill$ = function () {
	this.context.fill();
};


VCanvas.prototype.stroke$ = function () {
	this.context.stroke();
};


VCanvas.prototype.lineWidth$N = function (width) {
	this.context.lineWidth = width;
};


VCanvas.prototype.drawWidth$N = function (width) {
	this.context.lineWidth = width;
};


VCanvas.prototype.setFont$S = function (font) {
	this.context.font = font;
};


function nylonfunc(func, object) {
	this.fn = func;
	this.obj = object;
};

$__jsx_extend([nylonfunc], Object);
function nylon() {
	if (js$0.global.map == null) {
		js$0.global.map = ({  });
	}
};

$__jsx_extend([nylon], Object);
nylon.prototype.on$SF$HXV$ = function (keyword, fn) {
	if (nylon.map[keyword] == null) {
		console.log("map - keyword is null");
		nylon.map[keyword] = [ new nylonfunc(fn, this) ];
	} else {
		nylon.map[keyword].push(new nylonfunc(fn, this));
	}
};


nylon.prototype.emit$SHX = function (keyword, params) {
	var keys;
	console.log(nylon.map[keyword]);
	keys = keyword.split("|");
	this.emit$ASHX(keys, params);
};


nylon.prototype.emit$ASHX = function (keys, params) {
	var $this = this;
	keys.forEach((function (key) {
		if (nylon.map[key] == null) {
			console.log("Invarid keyword!");
		} else {
			nylon.map[key].forEach((function (element) {
				if (element.obj != $this) {
					element.fn(params);
				}
			}));
		}
	}));
};


nylon.prototype.off$SF$HXV$ = function (keyword, fn) {
	var arr;
	var i;
	if (nylon.map[keyword] == null) {
		console.log("map - keyword is null");
	} else {
		arr = nylon.map[keyword];
		for (i = arr.length - 1; i >= 0; i--) {
			console.log(i);
			if (arr[i].obj == this && arr[i].fn == fn) {
				arr.splice(i, 1);
			}
		}
		if (nylon.map[keyword].length === 0) {
			nylon.map[keyword] = null;
		}
	}
};


function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(arts) {
	var f;
	var g;
	var a;
	var b;
	f = (function (x) {
		console.log("f was executed");
	});
	g = (function (x) {
		console.log("g was executed");
	});
	a = new nylon();
	console.log("check A");
	a.on$SF$HXV$("test", f);
	a.on$SF$HXV$("test2", f);
	console.log(nylon.map);
	console.log("check B");
	a.on$SF$HXV$("test", g);
	console.log(nylon.map);
	a.emit$SHX("test", ({  }));
	b = new nylon();
	console.log("check C");
	b.emit$SHX("test", null);
	b.emit$SHX("test2", null);
	a.off$SF$HXV$("test", f);
	console.log("check D");
	console.log(nylon.map);
	console.log("check E");
	b.emit$SHX("test|test2", null);
	console.log(nylon.map);
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function vbTimer() {
	this.interval = 1000;
	this.enabled = false;
	this.timer = null;
	this._tHandle = null;
};

$__jsx_extend([vbTimer], Object);
vbTimer.prototype.enable$ = function () {
	if (this.timer != null && this.enabled === false) {
		this._tHandle = Timer$setInterval$F$V$N(this.timer, this.interval);
		this.enabled = true;
	}
};


vbTimer.prototype.disable$ = function () {
	if (this.enabled === true) {
		Timer$clearInterval$LTimerHandle$(this._tHandle);
		this.enabled = false;
	}
};


var js$0 = (function () { var global = (function () { return this; }()); return { global: global, eval: global.eval, invoke: function(invocant, methodName, args) { return invocant[methodName].apply(invocant, args); } }; }());
function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return (function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:34:40] detected invalid cast, value is not a function or null\n        return (js.global[\"setTimeout\"] as __noconvert__ function(:function():void,:number) : TimerHandle)(callback, intervalMS);\n                                        ^^\n");
		}
		return $v;
	}(js$0.global.setTimeout))(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	(function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:38:35] detected invalid cast, value is not a function or null\n        (js.global[\"clearTimeout\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                   ^^\n");
		}
		return $v;
	}(js$0.global.clearTimeout))(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return (function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:42:41] detected invalid cast, value is not a function or null\n        return (js.global[\"setInterval\"] as __noconvert__ function(:function():void,:number) : TimerHandle)(callback, intervalMS);\n                                         ^^\n");
		}
		return $v;
	}(js$0.global.setInterval))(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	(function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:46:36] detected invalid cast, value is not a function or null\n        (js.global[\"clearInterval\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                    ^^\n");
		}
		return $v;
	}(js$0.global.clearInterval))(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var lastTime;
	if (useNativeImpl) {
		prefixes = [ "r", "webkitR", "mozR", "oR", "msR" ];
		for (i = 0; i < prefixes.length; ++ i) {
			name = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:72:35] null access\n                var name = prefixes[i] + \"equestAnimationFrame\";\n                                   ^\n");
				}
				return v;
			}(prefixes[i])) + "equestAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (callback) {
					return (function ($v) {
						if (! ($v == null || typeof $v === "function")) {
							debugger;
							throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:75:48] detected invalid cast, value is not a function or null\n                        return (js.global[name] as __noconvert__\n                                                ^^\n");
						}
						return $v;
					}(js$0.global[name]))(callback);
				});
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		var now;
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	if (useNativeImpl) {
		prefixes = [ "c", "webkitC", "mozC", "oC", "msC" ];
		for (i = 0; i < prefixes.length; ++ i) {
			name = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:100:35] null access\n                var name = prefixes[i] + \"ancelAnimationFrame\";\n                                   ^\n");
				}
				return v;
			}(prefixes[i])) + "ancelAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (timer) {
					(function ($v) {
						if (! ($v == null || typeof $v === "function")) {
							debugger;
							throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:103:41] detected invalid cast, value is not a function or null\n                        (js.global[name] as __noconvert__\n                                         ^^\n");
						}
						return $v;
					}(js$0.global[name]))(timer);
				});
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {}
$__jsx_extend([TimerHandle], Object);
$__jsx_lazy_init(dom, "window", function () {
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLDocument)) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/js/web.jsx:23:50] detected invalid cast, value is not an instance of the designated type or null\n    static const document = js.global[\"document\"] as __noconvert__ HTMLDocument;\n                                                  ^^\n");
		}
		return $v;
	}(js$0.global.document));
});
$__jsx_lazy_init(nylon, "map", function () {
	return (function ($v) {
		if (! ($v == null || typeof $v === "object" || typeof $v === "function")) {
			debugger;
			throw new Error("[nylon.client.jsx:13:38] detected invalid cast, value is not a Map or null\n    static var map = js.global[\"map\"] as Map.<Array.<nylonfunc>>;\n                                      ^^\n");
		}
		return $v;
	}(js$0.global.map));
});
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		StopIteration: StopIteration,
		StopIteration$: StopIteration
	},
	"solid_wave.jsx": {
		solid_wave: solid_wave,
		solid_wave$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$: solid_wave,
		gui: gui,
		gui$: gui
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		ScrollOptions: ScrollOptions,
		ScrollOptions$: ScrollOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"vcanvas.jsx": {
		VCanvas: VCanvas,
		VCanvas$LHTMLCanvasElement$: VCanvas
	},
	"nylon.client.jsx": {
		nylonfunc: nylonfunc,
		nylonfunc$F$HXV$Lnylon$: nylonfunc,
		nylon: nylon,
		nylon$: nylon,
		_Main: _Main,
		_Main$: _Main
	},
	"vbTimer.jsx": {
		vbTimer: vbTimer,
		vbTimer$: vbTimer
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	if (! module) return;

	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("solid_wave.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);

//# sourceMappingURL=solid_wave.jsx.js.mapping
