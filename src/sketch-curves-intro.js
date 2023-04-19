const canvasSketch = require('canvas-sketch');

const settings = {
	dimensions: [ 1080, 1080 ],
	animate: true,
};

let elCanvas;
let points = [];
let points2 = [];

const sketch = ({ canvas }) => {
	/* points = [
		new Point({ x: 200, y: 540 }),
		new Point({ x: 400, y: 700 }),
		new Point({ x: 880, y: 540 }),
		new Point({ x: 600, y: 700 }),
		new Point({ x: 640, y: 900 }), 
	]; */

	canvas.addEventListener('mousedown', onMouseDown);

	elCanvas = canvas;

	return ({ context, width, height }) => {
		context.fillStyle = 'white';
		context.fillRect(0, 0, width, height);

		context.strokeStyle = '#999';
		context.beginPath();
		
		points.forEach((value, index) => {
			
		if ( (index % 2 ) == 1 ){

		context.moveTo(points[index-1].x, points[index-1].y)
		
		context.lineTo(points[index].x, points[index].y)
		
		//console.log(points)
		}
		});
		context.lineWidth = 8;
		context.stroke();
		

		/*
		context.beginPath();
		context.moveTo(points[0].x, points[0].y);

		for (let i = 1; i < points.length; i += 2) {
			context.quadraticCurveTo(points[i + 0].x, points[i + 0].y, points[i + 1].x, points[i + 1].y);
		}

		context.stroke();
		*/

		/*context.beginPath();

		 for (let i = 0; i < points.length - 1; i++) {
			const curr = points[i + 0];
			const next = points[i + 1];

			const mx = curr.x + (next.x - curr.x) * 0.5;
			const my = curr.y + (next.y - curr.y) * 0.5;

			// draw midpoints
			// context.beginPath();
			// context.arc(mx, my, 5, 0, Math.PI * 2);
			// context.fillStyle = 'blue';
			// context.fill();

			if (i == 0) context.moveTo(curr.x, curr.y);
			else if (i == points.length - 2) context.quadraticCurveTo(curr.x, curr.y, next.x, next.y);
			else context.quadraticCurveTo(curr.x, curr.y, mx, my);
		} 

		context.lineWidth = 4;
		context.strokeStyle = 'blue';
		context.stroke();
*/

		points.forEach((point, indice) => {
			if ((indice % 2) == 1) {
			const dex = points[indice].x - points[indice-1].x;
			const dey = points[indice-1].y - points[indice].y;
			const ded = Math.round(Math.sqrt(dex * dex + dey * dey)/10);
			const alpha = Math.abs(Math.round(Math.atan(dey/dex) / (Math.PI/180)))
			point.draw(context, ded, alpha, dex, dey);
		}
		});
	};
};

const onMouseDown = (e) => {
	window.addEventListener('mousemove', onMouseMove);
	window.addEventListener('mouseup', onMouseUp);

	const x = (e.offsetX / elCanvas.offsetWidth)  * elCanvas.width;
	const y = (e.offsetY / elCanvas.offsetHeight) * elCanvas.height;

	let hit = false;
	
	points.forEach(point => {
		point.isDragging = point.hitTest(x, y);
		if (!hit && point.isDragging) hit = true;
	});

	if (!hit) points.push(new Point({ x, y }));
		
};

const onMouseMove = (e) => {
	const x = (e.offsetX / elCanvas.offsetWidth)  * elCanvas.width;
	const y = (e.offsetY / elCanvas.offsetHeight) * elCanvas.height;

	points.forEach(point => {
		if (point.isDragging) {
			point.x = x;
			point.y = y;
		}
	});
};

const onMouseUp = () => {
	window.removeEventListener('mousemove', onMouseMove);
	window.removeEventListener('mouseup', onMouseUp);
};

canvasSketch(sketch, settings);


class Point {
	constructor({ x, y, control = false }) {
		this.x = x;
		this.y = y;
		this.control = control;
	}

	draw(context, ded, alpha, dex, dey ) {
		
		context.save();
		context.translate(this.x, this.y);
		context.fillStyle = this.control ? 'red' : 'black';
		context.beginPath();
		context.arc(0, 0, 10, 0, Math.PI * 2);
		context.fill();
		context.font = "48px serif";
		context.fillText("F = " + ded + " N", (-dex/2)+50, dey/2);
		context.fillText("angle = " + alpha + " º", (-dex/2)+50, (dey/2)+50);
		//context.fillText("dex = " + dex + " º", 0,0);
		//context.fillText("dey = " + dey + " º", 0, +50);
		
		context.restore();
	}

	hitTest(x, y) {
		const dx = this.x - x;
		const dy = this.y - y;
		const dd = Math.sqrt(dx * dx + dy * dy);

		return dd < 20;
	}
}
