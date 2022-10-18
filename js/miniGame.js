var hp = 3;

$('#drone').click(function () {
    $('#spit').fadeIn();
    $('#spit').animate({left: '+=250'}); //오른쪽으로 +250
    $('#spit').fadeOut(function () {
        hp -= 1;
        $('#hp').text('HP:' + hp);
        //콜백 함수. 실행한 함수 끝나면 그 다음에 complete실행

        if (hp == 0) {
            $('#bunker').fadeOut();
        }
    });

    $('#spit').css({left: '150px'}); //침을 원래 위치로 복귀


});