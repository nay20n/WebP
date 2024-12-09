function run(){
    console.log("execute after 2 seconds");
}

console.log('start');
setTimeout(run,2000); //2000ms 후 run함수 실행
console.log('end');