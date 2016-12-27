$(document).ready(function(){

	var img = ["a(1).jpg","a(2).jpg","a(3).jpg","a(4).jpg","a(5).jpg","a(6).jpg","a(7).jpg","a(8).jpg"];

	var alt_img = ["این عینک برند است","عاشق باش ولی فقط عاشق یک نفر","یک صحنه زیبا","لوگو شرکت Apple","مثلث های تیکه تیکه","آبرنگ های جدید","توپ های رنگی","پروانه ای روی سنگ ها"];

	var i   = 0;

	var index =  0 ;

	// function slide(){
  //
  //       index++;
	//
	//     if(index > (img.length)-1){
	//
	//         index=0;
	//     }
	//     console.log(index);
	//
	//     $( ".btn-circle" ).removeClass( "active" );
  //       $("#"+index+"").addClass( "active" );
  //       $(".img-slideshow").attr("src","./images/"+img[index]+"");
  //       $(".name-img p").text(alt_img[index]);
  //   }
	//
	//
	// setInterval(function(){slide()},5000);

	$(".name-img p").text(alt_img[i]);

	for (j = 0; j < img.length; j++) {

	    $("#preview-img").append("<img src='icons/circle.png' width='10' id='"+j+"' title='"+img[j]+"' class='btn-circle'>");
	}

	$("#preview-img #0").addClass( "active" );

	$(".btn-circle").click(function(){


		$( ".btn-circle" ).removeClass( "active" );

		$(this).addClass( "active" );

		i = (this).id;

		$(".name-img p").text(alt_img[i]);

		$(".img-slideshow").attr("src","./images/"+$(this).attr('title')+"");

		index = $(this).attr('id');

	});

	$(".btn-next").click(function(){

		if(i < (img.length)-1){

			i++;
			$( ".btn-circle" ).removeClass( "active" );
			$("#"+i+"").addClass( "active" );

			$(".img-slideshow").attr("src","./images/"+img[i]+"")

		}else if(i >= (img.length)-1){

			i = 0;
			$( ".btn-circle" ).removeClass( "active" );
			$("#"+i+"").addClass( "active" );

			$(".img-slideshow").attr("src","./images/"+img[i]+"")
		}
		$(".name-img p").text(alt_img[i]);

	});

	$(".btn-back").click(function(){

		if(i > 0){

            i--;

            $( ".btn-circle" ).removeClass( "active" );
			$("#"+i+"").addClass( "active" );

			$(".img-slideshow").attr("src","./images/"+img[i]+"")

		}else if(i <= 0){

			i = (img.length)-1;
			$( ".btn-circle" ).removeClass( "active" );
			$("#"+i+"").addClass( "active" );

			$(".img-slideshow").attr("src","./images/"+img[i]+"")
		}
		$(".name-img p").text(alt_img[i]);

	});


    $("#next").click(function () {
    	animate(".slide_images", 'fadeIn');
    });

    $("#back").click(function () {
        animate(".slide_images", 'fadeIn');
    });

    $(".btn-circle").click(function () {
        animate(".slide_images", 'fadeIn');
    });

    function animate(element_ID, animation) {

        $(element_ID).addClass(animation);

        var wait = window.setTimeout(function () {

            $(element_ID).removeClass(animation)

        	}, 2000
        );
    }

    $(".btn-circle").mouseover(function(event){

    	$("#demo-img").css("display","inline-block");

    	var currentMousePos = { x: -1};

    	currentMousePos.x = event.pageX;

		$("#demo-img").css("left", currentMousePos.x);

		$(".demo-img-slideshow").attr("src","./images/"+img[(this).id]+"");


    });
    $(".btn-circle").mouseout(function(){

    	$("#demo-img").css("display","none");

    });

});
