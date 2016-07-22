var input = "";

function in(ask, default) {
  input = prompt(ask, default);
}

function out() {
  alert(input);
}

function add(number) {
  input += number;
}

function sub(number) {
  input -= number;
}

function del() {
  input = 0;
}

function clr() {
  input = "";
}

function set(value) {
  input = value;
}

function mul(number) {
  input *= number;
}

function div(number) {
  input /= number;
}

function hw() {
  input = "Hello, world!";
}

function v() {
  input = 1.5;
}

function at(number) {
  input = str.charAt(number + 1);
}

function new(name, string) {
  window.name = string;
}
