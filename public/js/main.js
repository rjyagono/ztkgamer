(function ($) {
 "use strict";
 
 
 // Preloader 
	$(window).on('load', function() {
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");

    smoothScroll.init();



/*--------------------------
pie chart
---------------------------- */ 


 if( $('#pie_chart_1').length > 0 ){
    $('#pie_chart_1').easyPieChart({
      barColor : '#5e619c',
      lineWidth: 2,
      animate: 3000,
      size: 100,
      lineCap: 'square',
      scaleColor:false,
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
  }

  if( $('#e_chart_3').length > 0 ){
    var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
    var data = [{
      value: 32.5,
      name: 'Reserve Value'
    }, {
      value: 10,
      name: 'Bounty'
    }, {
      value: 5,
      name: 'Legal'
    }, {
      value: 15,
      name: 'Offering'
    }, {
      value: 37.5,
      name: 'Team'
    }];
    var option3 = {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius:0,
        padding:10,
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: "'Roboto', sans-serif",
          fontSize: 12
        } 
      },
      series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['90%', '30%'],
        color: ['#a8a9bd','#9395b9', '#656790', '#3e406e', '#656790'],
        labelLine: {
          normal: {
            show: false
          }
        },
        data: data
      }]
    };
    eChart_3.setOption(option3);
    eChart_3.resize();
  }

  if( $('#e_chart_2').length > 0 ){
    var eChart_3 = echarts.init(document.getElementById('e_chart_2'));
    var data = [{
      value: 32.5,
      name: 'Reserve Value'
    }, {
      value: 10,
      name: 'Bounty'
    }, {
      value: 5,
      name: 'Legal'
    }, {
      value: 15,
      name: 'Offering'
    }, {
      value: 37.5,
      name: 'Team'
    }];
    var option3 = {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius:0,
        padding:10,
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: "'Roboto', sans-serif",
          fontSize: 12
        } 
      },
      series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['90%', '30%'],
        color: ['#a8a9bd','#9395b9', '#656790', '#3e406e', '#656790'],
        labelLine: {
          normal: {
            show: false
          }
        },
        data: data
      }]
    };
    eChart_3.setOption(option3);
    eChart_3.resize();
  }


      new WOW().init();
	});
/*----------------------------
  1. Mobile Menu Activation
-----------------------------*/
 


  $( ".lng-in" ).on("click",function() {
    $( ".lng-out" ).slideToggle("slow");
  });
 

/*----------------------------
wow js active
------------------------------ */
	new WOW().init();
 
/*----------------------------
owl active
------------------------------ */  

 

 
	
		// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 800) {
			$('.gc_main_menu_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.gc_main_menu_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});
	
	
	 /*--- Responsive Menu Start ----*/

$("#toggle").on("click", function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});

$("#toggle_close").on("click", function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});


/*--------------------------
scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 
