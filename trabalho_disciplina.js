
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
			+ '  <img src="https://picsum.photos/100/100/?image='+number+'" alt="image number '+number+'" style="width:100%">'
			+ '</div>'

	item =   '<tr><td>'+card+'</td>'
			+ '<td> <p> Random text </p></td>'
			+'<td>'+(number%7+1)+'</td>'
			+'<td>'+number+'</td>'
			+'<td class="price">'+(number*(number%7+1))+'</td>'
			+'<td class="excluir"><i class=" fa fa-trash"></i></td><tr>'

	return item;
}

$(function() {

	$('#cart').on('click', function(){
		console.log('click');
		window.location.href = './trabalho_disciplina_carrinho.html'
	})
	$('#voltar').on('click', function(){
		console.log('click');
		window.location.href = './trabalho_disciplina.html'
	})
	$('.cart').on('click', function(){
		console.log('clickasd');
		window.location.href = './trabalho_disciplina_carrinho.html'
	})
	$('#products').on('click', function(){
		console.log('click');
		window.location.href = './trabalho_disciplina.html'
	})
	$('#finalizar').on('click', function(){
		alert('Compra finalizada. Verifique seu email para confirmar a compra!');
		window.location.href = './trabalho_disciplina.html'
	})
	
});