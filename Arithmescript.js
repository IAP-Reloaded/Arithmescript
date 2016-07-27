var input = "";

function log() {
  console.log(input);
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

function hello() {
    input = "Hello, world!";
}

function ver() {
   input = 1.6;
}

function char(number) {
    input = str.charAt(number + 1);
}

function icantdecideonagoodshortnameforavariablemakingfunction(name, string) {
    window.name = string;
}

function icantdecideonagoodshortnameforaprimalitycheckerfunction() {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    var input = value > 1;
}
