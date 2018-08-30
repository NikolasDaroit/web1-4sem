
function appendImage(number, klass){
	console.log(number, klass)
	card  =  '<div class="card" data-image="'+number+'">'
			+ '  <img src="https://picsum.photos/200/200/?image='+number+'" alt="" style="width:100%">'
			+ '  <div class="container">'
			+ '    <p>Architect & Engineer</p> '
			+ '  </div>'
			+ '</div>'

	$( card ).appendTo( klass );
}
$(function() {

	$('#cart').on('click', function(){
		console.log('click');
		window.location.href = './trabalho_disciplina_carrinho.html'
	})

	$("#cart").click(function() {
		console.log('click');
	  window.location.href = './trabalho_disciplina_carrinho.html'
	});
});