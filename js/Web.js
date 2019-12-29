    $(document).ready(function(){

    new WOW().init(); 
    $(".owl-carousel").owlCarousel({
            autoplay:true,
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            autoplayTimeout:3000,
            slideTransition:'300ms',
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }
    );
  });



  function openName(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
}

function openContent(evt, content) {
    var i, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (var i = 0; i < tabcontent1.length; i++) {
        tabcontent1[i].classList.remove('show');
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (var i = 0; i < tablinks1.length; i++) {
    tablinks1[i].classList.remove('active');
}
    document.getElementsByClassName(content)[0].classList.add('show');
    // document.getElementsByClassName(content)[1].classList.add('show');
    var cuttentTabClass = evt.currentTarget.className.split(" ")[1];
    console.log(cuttentTabClass);
    document.getElementsByClassName(cuttentTabClass)[0].classList.add('active');
    // document.getElementsByClassName(cuttentTabClass)[1].classList.add('active');
}
  document.getElementById("defaultOpen").click();

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}