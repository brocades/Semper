(function () {

	"use strict";

	// imports
	var Quick = com.dgsprb.quick.Quick;
	var GameObject = com.dgsprb.quick.GameObject;
	var Scene = com.dgsprb.quick.Scene;

	// functions
	function main() {
		Quick.setAutoScale(false);
		Quick.setName("Semper");
		Quick.init(function () { return new StageScene() });
	}

	// class StageScene extends Scene
	var StageScene = (function () {

		function StageScene() {
			Scene.call(this);
			var background = new Background();
			this.add(background);
			var cursor = new Cursor();
			this.add(cursor);
		}; StageScene.prototype = Object.create(Scene.prototype);

		return StageScene;

	})();

	// class Background extends GameObject
	var Background = (function () {

		function Background() {
			GameObject.call(this);
			this.setColor("Black");
			this.setHeight(Quick.getCanvasHeight());
			this.setWidth(Quick.getCanvasWidth());
		}; Background.prototype = Object.create(GameObject.prototype);

		return Background;

	})();

	// class Cursor extends GameObject
	var Cursor = (function () {

		function Cursor() {
			GameObject.call(this);
			this.pointer = Quick.getPointer();
			this.setColor("White");
			this.setSize(3);
		}; Cursor.prototype = Object.create(GameObject.prototype);

		Cursor.prototype.respond = function () {
			this.setCenterFromPoint(this.pointer.getPosition());

			if (this.pointer.getDown()) {
				console.log('down');
			}
		};

		// override
		Cursor.prototype.update = function () {
			this.respond();
		};

		return Cursor;

	})();

	main();

})();
