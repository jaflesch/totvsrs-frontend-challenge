$('#btnAcessar').click(function(e){
	e.preventDefault();
	
	$("#body-dynamic").loadTemplate("views/list.html");
});