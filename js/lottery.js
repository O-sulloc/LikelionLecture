//로또 번호 추첨기

//var num = Math.random();
//document.write(num); //0이상 1미만의 실수형이 랜덤으로 출력됨.

//var num = parseInt(Math.random() * 45 + 1); //1부터 45까지 출력이니까. +1해서 1부터 출력
//document.write(num);

/*
//배열 array
var lotto = [1,2,3,4,5,6]; //6개 생성
lotto.push(7); //배열에 추가
document.write(lotto[0]);
 */

var lotto = [];

/*
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1)); //lotto 배열에 6개의 랜덤 숫자 넣음
 */

/*
//배열에 중복된 값 넣지 않으려면? .indexOf(값) 활용
for (let i = 0; i < 6; i++) {
    var num = parseInt(Math.random() * 45 + 1);

    if(lotto.indexOf(num) == -1){
        //lotto에 num이라는 값이 없으면(-1) 다음을 실행
        lotto.push(num);
    }
}
//중복되는 값이 있으면 배열이 6개로 채워지지가 않음.
 */

//while문 사용해서 6개 다 채워지도록
while (lotto.length<6){
    var num = parseInt(Math.random() * 45 + 1);
    if(lotto.indexOf(num) == -1){
        //lotto에 num이라는 값이 없으면(-1) 다음을 실행
        lotto.push(num);
    }
}
//document.write(lotto);

//sort로 정렬해보기
//var arr = [1,2,3,33,22,11]; //1,2,3,11,22,33
lotto.sort((a,b) => a-b);
document.write(lotto);