const clock = document.querySelector("#clock");

// setInterval(sayHello, 5000); // 함수, ms sayHello가 1초마다 실행된다.
// setTimeout(sayHello, 5000); // 함수,ms sayHello가 5초뒤에 실행된다.

//interval -> 특정한 간격으로 실행
// String -> number를 string으로
// padStart는 글자의 앞부분을 채워줌, padEnd도 있다.
// 여기선 00:00:00 처럼 나오게하기위해 글자가 2글자가 되지않으면 앞에 0을 붙여준다
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 이렇게해야 web을 키자마자 시간이 나온후 1마다 interval
setInterval(getClock, 1000); // 함수, ms sayHello가 1초마다 실행된다.
