
var game = {
	direction: undefined,

	emptyTileX	: 3,
	emptyTileY	: 3,

	moveSpeed: 300,

	init: function(){
		var tile = $('.grid-container .tile');

		tile.each(function(index, value){
			$(this).text(index + 1);
		});

		tile.on('click', function(e) {
			e.preventDefault();
			game.clicked.apply(this);
		});
	},

	clicked: function() {
		var $this = $(this);
		var currentX = Number($this.attr('data-x')),
			currentY = Number($this.attr('data-y'));

		if( currentX + 1 == game.emptyTileX && currentY == game.emptyTileY ) {
			game.moveRight.call(this);
			$(this).attr('data-x', currentX + 1);
			game.vacantReset(currentX, currentY);

		} else if( currentX - 1 == game.emptyTileX && currentY == game.emptyTileY ) {
			game.moveLeft.call(this);
			$(this).attr('data-x', currentX - 1);
			game.vacantReset(currentX, currentY);

		} else if( currentY - 1 == game.emptyTileY && currentX == game.emptyTileX ) {
			game.moveUp.call(this);
			$(this).attr('data-y', currentY - 1);
			game.vacantReset(currentX, currentY);

		} else if( currentY + 1 == game.emptyTileY && currentX == game.emptyTileX) {
			game.moveDown.call(this);
			$(this).attr('data-y', currentY + 1);
			game.vacantReset(currentX, currentY);

		} else {
			console.log("cannot move");
		}
	},

	moveUp: function() {
		$(this).animate({
			top: "-=" + "100"
		}, game.moveSpeed, function(){
			// callback if any
		});
	},

	moveDown: function() {
		$(this).animate({
			top: "+=" + "100"
		}, game.moveSpeed, function(){
			// callback if any
		});
	},

	moveLeft: function() {
		$(this).animate({
			left: "-=" + "100"
		}, game.moveSpeed, function(){
			// callback if any
		});
	},

	moveRight: function() {
		$(this).animate({
			left: "+=" + "100"
		}, game.moveSpeed, function(){
			// callback if any
		});
	},

	vacantReset: function(x,y) {
		this.emptyTileX = x;
		this.emptyTileY = y;
	}
}

game.init();
