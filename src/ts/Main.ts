import{ Controller } from "./Controller";

class main {
    static entry () {
        console.dir("あえいうえおああ");
    }
}

window.addEventListener("load", (e) => {
  main.entry();
  let controller = new Controller("canvas");
});