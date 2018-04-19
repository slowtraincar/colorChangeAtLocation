$(window).on("scroll touchmove", function() {
            if ($(document).scrollTop() > $("#heroContainer").position().top) {
                    $('.nav-fill').css('background', 'none');
                    $('#bodyWrap').css('border-color', '#3901a5');
                    
            };  
             if ($(document).scrollTop() > $("#heroName").position().top) {
                    $('#bottomNav').css('background', '#3901a5');
            };  
             if ($(document).scrollTop() >= $("#workJump").position().top) {
                    $('.nav-fill').css('background', '#3901a5');
                    $('#bodyWrap').css('border-color', '#3901a5');
            };
            if ($(document).scrollTop() > $("#aboutChange").position().top) {
                    $('.nav-fill').css('background', '#4700d8');
                    $('#bodyWrap').css('border-color', '#4700d8');
            };
            if ($(document).scrollTop() > $("#certs").position().top) {
                    $('.nav-fill').css('background', '#7e4ff6');
                    $('#bodyWrap').css('border-color', '#7e4ff6');
            }; 		
         });
