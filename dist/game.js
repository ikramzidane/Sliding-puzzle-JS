
var game = {

	direction: undefined,
	numberArray: [],

	emptyTileX	: 3,
	emptyTileY	: 3,

	moveSpeed: 200,
	totalTiles: 15,

	init: function(){
		var tile = $('.grid-container .tile');

		this.generateArray();
		this.randomizer();

		tile.each(function(index, value){
			var $this = $(this);
			
			$this.text(game.numberArray[index] + 1);
			$this.attr('data-refLoc', game.numberArray[index] + 1);
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
		}

		game.gameOver();
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
	},

	generateArray: function() {
		for( var i = 0; i < this.totalTiles; i++ ) {
			this.numberArray.push(i);
		}
	},

	randomizer: function() {
		var arr = this.numberArray;
		this.shuffle(arr);
	},

    // Fisher–Yates Shuffle -- Unbiased shuffle algorithm
	shuffle: function(array) {
		var m = array.length, t, i;
		while(m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	},

	gameOver: function() {
		console.log("-------")
	}
}

game.init();











