
function appendImage(number, klass){
	// console.log(number, klass)
	card  =   '<div class="card" data-image="'+number+'">'
			+ '  <img src="https://picsum.photos/200/200/?image='+number+'" alt="" style="width:100%">'
			+ '  <div class="container">'
			+ '    <p>Some random text</p> '
			+ '  </div>'
			+ '</div>'


	$( card ).appendTo( klass );
}
function appendToTable(number, klass){
	// console.log(number, klass)
	card  =  '<div class="card" data-image="'+number+'">'
			+ '  <img src="https://picsum.photos/100/100/?image='+number+'" alt="" style="width:100%">'
			+ '</div>'

	item =   '<tr><td>'+card+'</td>'
			+'<td>'+(number%7)+'</td>'
			+'<td>'+number+'</td>'
			+'<td class="price">'+(number*(number%7))+'</td><tr>'

	// $( item ).appendTo( klass );
	return item;
}

$(function() {

	$('#cart').on('click', function(){
		console.log('click');
		window.location.href = './trabalho_disciplina_carrinho.html'
	})
	$('#products').on('click', function(){
		console.log('click');
		window.location.href = './trabalho_disciplina.html'
	})
});