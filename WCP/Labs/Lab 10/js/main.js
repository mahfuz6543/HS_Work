// Accordions
document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';
document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';

function hidePanels(){
	document.getElementById('eventsWeekContent').style.display = 'none';
	document.getElementById('comingUpContent').style.display = 'none';
	document.getElementById('pastEventsContent').style.display = 'none';
	document.getElementById('eventsWeekTab').className = 'accordionPanelTab';
	document.getElementById('comingUpTab').className = 'accordionPanelTab';
	document.getElementById('pastEventsTab').className = 'accordionPanelTab';
}
function showEventsWeek(){
	hidePanels();
	document.getElementById('eventsWeekContent').style.display = 'block';
	document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';
}
function showComingUp(){
	hidePanels();
	document.getElementById('comingUpContent').style.display = 'block';
	document.getElementById('comingUpTab').className = 'accordionPanelTab highlight';
}
function showPastEvents(){
	hidePanels();
	document.getElementById('pastEventsContent').style.display = 'block';
	document.getElementById('pastEventsTab').className = 'accordionPanelTab highlight';
}

$(document).ready(function(){

	$(".subColumnUno").cycle({ 
     fx:  "suffle", 
    easing: "easeOutBack", 
	speed:5000,
    delay: -4000, 
	timeout: 3000
});
	
	$(".subColumn").cycle({
		fx: "turnDown",
		speed: 1000,
		timeout: 3000,
		delay: 3000
	});
	$(".subColumnText").cycle({
		fx: "turnDown",
		speed: 1000,
		timeout: 3000,
		delay: 3000
	});
	
});