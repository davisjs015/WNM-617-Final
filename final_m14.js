$(function(){
	$("#dragged").draggable();
	$("#dropped").droppable({
	    drop: function (event, ui) {
	        alert('Congratulations! You solved the puzzle. I am a Lion! I live in Africa with my pack. I eat tend to eat deer, boar, zebras, and buffalo. I spend my day lazing in the grass trying to stay cool. ');
		}
	});
});


$(function(){
	$("#dragged_2").draggable();
	$("#dropped_2").droppable({
	    drop: function (event, ui) {
	        alert('Congratulations! You solved the puzzle. I am an Orca! Many know me by my other name, Killer Whale. I can be found all over the world but I tend to like higher latitudes, like the Pacific Northwest. I love to eat Salmon, yum it is my favorite but I like herring, whales, and seals. I am very social so I have tons of friends! ');
		}
	});
});


$(function(){
	$("#dragged_3").draggable();
	$("#dropped_3").droppable({
	    drop: function (event, ui) {
	        alert('Congratulations! You solved the puzzle. I am a penguin! I live in the Southern Hemisphere of the world with my friends and family.  I eat tons of fish, krill and squid. I spend most of my time on land but I love to swim that’s why I have flippers and not wings like most birds.');
		}
	});
});
