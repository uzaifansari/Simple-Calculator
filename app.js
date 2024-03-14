(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  let sqrt = document.querySelector(".btn-sqrt");
  let crt = document.querySelector(".btn-crt");
  /* querySelector --> Imagine you have a big box of toys (which is your web page), and you want to find a specific toy (which is an HTML element, like a button or a paragraph) in that box. querySelector is like a magic hand that reaches into the box and grabs exactly the toy you want.
  You use querySelector by telling it what kind of toy you're looking for, like "I want a button" or "I want a paragraph with a specific class." Then, it finds that toy for you, and you can do things like change its color, text, or make it do something when clicked. */ 

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  sqrt.addEventListener("click", function (e) {
    screen.value = screen.value * screen.value;
  });

  crt.addEventListener("click", function (e) {
    screen.value = screen.value * screen.value * screen.value;
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
