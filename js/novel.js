function counter() {
    var content = document.getElementById('jasoseol').value;
    if(content.length>200){
        content = content.substring(0,200);
        document.getElementById('jasoseol').value = content;
    }
    document.getElementById('count').innerHTML = '(' + content.length + '/200)';
    //스팬태그 안에 있는 innerhtml에 content.length를 넣어
}

counter();
