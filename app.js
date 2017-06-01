var state = {
	squares: {
		a1: '',
		a2: '',
		a3: '',
		b1: '',
		b2: '',
		b3: '',
		c1: '',
		c2: '',
		c3: ''
	},
	isX: true
}

function toggleXO () {
	state.isX = !state.isX;
	return state.isX ? 'X' : 'O';
};

function render(state) {
	$('.container').html(
		'<div class="top-row">'+
			'<div class="left square" data-square="a1">'+state.squares.a1+'</div>'+
			'<div class="center square" data-square="a2">'+state.squares.a2+'</div>'+
			'<div class="right square" data-square="a3">'+state.squares.a3+'</div>'+
		'</div>'+
		'<div class="middle-row">'+
			'<div class="left square" data-square="b1">'+state.squares.b1+'</div>'+
			'<div class="center square" data-square="b2">'+state.squares.b2+'</div>'+
			'<div class="right square" data-square="b3">'+state.squares.b3+'</div>'+
		'</div>'+
		'<div class="bottom-row">'+
			'<div class="left square" data-square="c1">'+state.squares.c1+'</div>'+
			'<div class="center square" data-square="c2">'+state.squares.c2+'</div>'+
			'<div class="right square" data-square="c3">'+state.squares.c3+'</div>'+
		'</div>'
		);
	$('.square').click(function(event) {
		var currentSquare = $(this).attr('data-square');
		if (state.squares[currentSquare] == '') {
			state.squares[currentSquare] = toggleXO();
	}
		render(state);
		console.log(state);
	});
};

render(state);






//create a render function that .html the current state... XO depending on the state
// of that square.
