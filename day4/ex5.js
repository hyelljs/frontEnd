var start = 1;
var strings = '';
var end = strings.length-3;

function startNo(){
   start = prompt('시작 문자 순서를 입력해주세요');
}

function endNo(){
    end = prompt('끝 문자 순서를 입력해주세요');
    console.log(end);
    set();
}

function strMethod(){
    strings = prompt('문자열을 입력하주세요');
    console.log(strings);
    set();
}

function set(){
    var leg = strings.length;
    var last = strings.lastIndexOf('am')
    var subs = strings.substring(start,end);
    var slice = strings.slice(start,end);
    console.log(end);
    document.getElementById('leg').innerHTML=leg;
    document.getElementById('last').innerHTML=last;
    document.getElementById('subs').innerHTML=subs;
    document.getElementById('slice').innerHTML=slice;
}