  $(document).ready(function(){
  	$('.carousel').carousel({dist: 0, shift: 10, padding: 10});


  	$(".navButtonLeft").click(function() {
  		if (this.id == "buttonLeft1") {$('#carousel1').carousel('prev');}
  		if (this.id == "buttonLeft2") {$('#carousel2').carousel('prev');}
  		if (this.id == "buttonLeft3") {$('#carousel3').carousel('prev');}
      });

  	$(".navButtonRight").click(function() {
  		if (this.id == "buttonRight1") {$('#carousel1').carousel('next');}
  		if (this.id == "buttonRight2") {$('#carousel2').carousel('next');}
  		if (this.id == "buttonRight3") {$('#carousel3').carousel('next');}
      });
  });


  


