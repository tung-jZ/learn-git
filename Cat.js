
function Cat() {
	this.stomach = [];
	this.dead = false;
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};

module.exports = Cat;