//console.log($('#content').val()); //id가 content인 것의 값을 가져옴.

function hello() {
    console.log('hello'); //헬로 찍
}

//$('#click').click(hello); //html에 click 버튼 누르면 hello 함수 실행해

//익명함수. 함수 지정하지 않고 바로 실행되게 하는
$('#click').click(function (){
    console.log('hello');
});