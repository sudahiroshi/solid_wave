import "js/web.jsx";
import "vcanvas.jsx";
import "nylon.client.jsx";
import "vbTimer.jsx";

final class solid_wave {
	var vc1: VCanvas;	// 縦波
	var vc2: VCanvas;	// 横波
	var vc1b: VCanvas;	// 縦波の軸
	var vc2b: VCanvas;	// 横波の軸
	var vc3: VCanvas;	// 弾性表面波
	var vc3b: VCanvas;	// 弾性表面波の軸
	var timer1: vbTimer;
	var timer2: vbTimer;
	var timer3: vbTimer;

	var sl1 = 1;
	var sl2 = 1;

	var i = 0;

	static function main( canvas1Id: string, canvas2Id: string, canvas3Id: string ) : void {
		var elm1 = dom.id(canvas1Id) as HTMLCanvasElement;
		var vc1 = new VCanvas( elm1 );
		var elm1b = dom.id(canvas1Id + "b") as HTMLCanvasElement;
		var vc1b = new VCanvas( elm1b );

		var elm2 = dom.id(canvas2Id) as HTMLCanvasElement;
		var vc2 = new VCanvas( elm2 );
		var elm2b = dom.id(canvas2Id + "b") as HTMLCanvasElement;
		var vc2b = new VCanvas( elm2b );

		var elm3 = dom.id(canvas3Id) as HTMLCanvasElement;
		var vc3 = new VCanvas( elm3 );
		var elm3b = dom.id(canvas3Id + "b") as HTMLCanvasElement;
		var vc3b = new VCanvas( elm3b );

		var sw = new solid_wave( vc1, vc1b, vc2, vc2b, vc3, vc3b );
		sw.init();
	}
	function constructor( vc1: VCanvas, vc1b: VCanvas, vc2: VCanvas, vc2b: VCanvas, vc3: VCanvas, vc3b: VCanvas ) {

		this.vc1 = vc1;
		this.vc1b = vc1b;
		this.vc2 = vc2;
		this.vc2b = vc2b;
		this.vc3 = vc3;
		this.vc3b = vc3b;
		this.vc1.scale( -111, -40, 560, 80 );
		this.vc2.scale( -112, -50, 590, 95 );
		this.vc3.scale( -112, -45, 590, 135.246 );

		this.timer1 = new vbTimer();
		this.timer1.interval = 100;
		this.timer1.timer = (): void -> {
			this.animation1();
			this.animation2();
			this.animation3();
		};

		var nl = new nylon();
		nl.on( "start", ( dummy: Map.<variant> ): void -> {
			this.init();
		});
		nl.on( "stop", ( dummy: Map.<variant> ): void -> {
			this.timer1.disable();
		});
	}
	function init(): void {
		this.vc1b.beginPath();
		this.vc1b.cls();
		this.vc1b.print( 290, 10, "Miida Laboratory, Chiba Institute of Technology" );
		this.vc1.stroke();

		this.timer1.enable();
	}

	function animation1(): void {
		var p1 = this.vc1;
		var mx = 30;
		var mx2 = mx / 2;
		//var mx3 = mx2 + 0.4;
		//var my = mx2;
		//var mty = -my / 2;
		var p = 2 * Math.PI / mx * 2;
		var pb = 2 * Math.PI / 40;
		var t = pb * this.i;

		p1.scale( mx * -0.07, -5.5, mx * 1.177, 11 );
		p1.beginPath();
		p1.forecolor( 120, 120, 120 );
		p1.cls();
		p1.line( mx * -0.04, 0, mx * 1.065, 0 );
		p1.line( mx * 1.77/3.45, -4.5, mx * 1.77/3.45, 4.4 );
		p1.stroke();

		p1.beginPath();
		p1.forecolor( 0, 0, 0 );
		for( var j=0; j<=mx; j++ ) {
			var xx = p * j;
			var xxx = j + Math.cos( t - xx );
			for( var k=1; k<=9; k++ ) {
				var yyy = -k + 5.1;
				p1.circle( xxx, -yyy, 1 );
//				x[j][k] = xxx;
//				y[j][k] = yyy;
			}
		}
		p1.fill();

		p1.beginPath();
		p1.forecolor( 255, 0, 0 );
		var xx = p * mx2;
		var xxx = mx2 + Math.cos( t - xx );
		for( var k=1; k<=9; k++ ) {
			var yyy = -k + 5.1;
			p1.circle( xxx, -yyy, 1 );
		}
		var yyy = -5 + 5.1;
		for( var j=0; j<=mx; j++ ) {
			var xx = p * j;
			var xxx = j + Math.cos( t- xx );
			p1.circle( xxx, -yyy, 1 );
		}
		p1.fill();
		this.i++;
	}

	function animation2(): void {
		var p2 = this.vc2;
		//var vy = 1.3;
		//var vyy = 0.63 * vy;
		var mx = 30;
		//var mx2 = mx / 2;
		//var mx3 = mx2 + 0.4;
		//var my = mx2;
		//var mty = -my / 2;
		var p = 2.0 * Math.PI / mx * 2;
		var pb = 2.0 * Math.PI / 40;
		var t = pb * this.i;

		p2.scale( mx * -0.004, -6, mx * 1.1, 12 );
		p2.beginPath();
		p2.forecolor( 120, 120, 120 );
		p2.cls();
		p2.line( mx * -0.01, 0, mx * 1.02, 0 );
		p2.line( mx * 1.77 / 3.45, -4.5, mx * 1.77 / 3.45, 4.4 );
		p2.stroke();

		p2.beginPath();
		p2.forecolor( 0, 0, 0 );
		for( var j=0; j<=mx; j++ ) {
			for( var k=2; k<=10; k++ ) {
				var xx = p * j;
				var xxx = j + 0.5;
				var yyy = 1.5 * Math.sin( t - xx ) + k - 5.7;
				p2.circle( xxx, -yyy, 1 );
			}
		}
		p2.fill();

		this.i++;
	}

	// 弾性表面波
	function animation3(): void {
		var p3 = this.vc3;
		var vy = 1.3;
		var vyy = 0.63 * vy;
		var mx = 30;
		var mx2 = mx / 2;
		var mx3 = mx2 + 0.4;
		var my = mx2;
		var myt = -my / 2;
		var p = 2.0 * Math.PI / mx * 2;
		var pb = 2.0 * Math.PI / 40;
		var t = pb * this.i;

		p3.scale( mx * -0.004, myt / 1.1, mx * 1.17, my / 1.3 );
		p3.beginPath();
		p3.cls();
		p3.forecolor( 120, 120, 120 );
		p3.line( mx3 + 0.1, -5.8, mx3 + 0.1, 3.7 );
		p3.line( -1.1, -3, mx * 1.05, -3 );
		p3.stroke();

		p3.beginPath();
		p3.forecolor( 0, 0, 0 );
		for( var j=0; j<=mx; j++ ) {
			var xx = p * j;
			var cs = vyy * Math.cos( t - xx );
			var sn = 1.2 * vy * Math.sin( t - xx );
			for( var k=0; k<=6; k++ ) {
				var xxx = j + cs * ( 4 - k ) / 4 * ( 8 - k ) / 8 * 0.5;
				var yyy = sn * ( 6 - k ) / 6 - k + 3;
				p3.circle( xxx, -yyy, 1 );
			}
		}
		p3.fill();

		this.i++;
	}
}

class gui {
	static function main( btn1: string, btn2: string, btn3: string, btn4: string ): void {
		var nl2 = new nylon();
		var b1 = dom.id(btn1) as HTMLButtonElement;
		b1.addEventListener( "click", function( e: Event ): void {
			nl2.emit( "start", null );
		});
		var b2 = dom.id(btn2) as HTMLButtonElement;
		b2.addEventListener( "click", function( e: Event ): void {
			nl2.emit( "stop", null );
		});
		var b3 = dom.id(btn3) as HTMLButtonElement;
		b3.addEventListener( "click", function( e: Event ): void {
			nl2.emit( "stop", null );
			nl2.emit( "delta", {"top":0.3}:Map.<variant> );
		});
		var b4 = dom.id(btn4) as HTMLButtonElement;
		b4.addEventListener( "click", function( e: Event ): void {
			nl2.emit( "stop", null );
			nl2.emit( "delta", {"top":0.5}:Map.<variant> );
		});
	}
}
