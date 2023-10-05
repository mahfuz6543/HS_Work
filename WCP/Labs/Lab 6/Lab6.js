// JavaScript Document
$(document).ready(function(){
	
	var shape = $("#shape");
  var shapeCopy = $("#shape").clone();
	
	$("#shape-changer").click(function(){
		shape.animate({borderRadius: '50%'}, "slow");
		shape.animate({borderRadius: '50%'}, "slow");
		shape.animate({borderRadius: '50%'}, "slow");
		shape.animate({borderRadius: '0%'}, "slow");
	});
	
	$("#size-changer").click(function(){
		shape.animate({height: '140px', width: '140px'}, "slow");
		shape.animate({height: '140px', width: '140px'});
		shape.animate({height: '70px', width: '70px'}, "slow");
		
	});
	
	$("#opac-changer").click(function(){
		shape.animate({opacity: '0.5'}, "slow");
	});
	
	$("#position").click(function(){
		shape.animate({right: "45%"});
	});
	
	$("#cascade").click(function(){
		shape.animate({borderRadius: '50%', height: '140px', width: '140px', opacity: '0.5', right: "45%"}, "slow");
	});

  $("#stop").click(function(){
		shape.stop(true);
	});

  $("#reset").click(function(){
    var replacement = shapeCopy.clone();
		shape.replaceWith(replacement);
    shape = replacement;
    
	});
	
});