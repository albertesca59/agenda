var tareas = '';
var d = new Date();

$(document).ready(function(){
  $('button').click(function(){
  	tareas=tareas+'<div class="tarea"><b>Fecha: </b>'+d.getDate()+' / '+(d.getMonth()+1)+'/'+d.getYear()+'<br><b>Evento: </b>'+$('#campo').val()+'</div>';
  	$('.tareas').html(tareas);
  });
});