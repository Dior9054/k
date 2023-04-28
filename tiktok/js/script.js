$("body").on("mouseover", "video", function () {
    this.play();
    $(this).css("background-color", "black");
});
$("body").on("mouseleave", "video", function () {
    this.pause();
})



$('#ll #kk').each(function () { $(this).parent()[Math.random() > 0.5 ? 'parent' : 'append']($(this).show()) })