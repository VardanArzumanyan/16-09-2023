class Shiritory {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(str) {
    if (this.words.length === 0) {
      this.words.push(str);
    } else {
      if (this.words.includes(str)) {
        this.game_over = true;
        console.log("game over");
        return;
      }
      if (this.words[this.words.length - 1].slice(-1)[0] === str[0]) {
        this.words.push(str);
      } else {
        this.game_over = true;
        console.log("game over");
        return;
      }
    }
  }

  restart() {
    this.game_over = false;
    this.words.length = 0;
    console.log("game restarted");
  }
}
let myShiritori = new Shiritory();
myShiritori.play("apple"); // ["apple"]
console.log(myShiritori.words);
myShiritori.play("ear"); // ["apple", "ear"]
myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
console.log(myShiritori.words);
myShiritori.play("corn"); // "game over"
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
myShiritori.restart(); // "game restarted"
console.log(myShiritori.words); //[]
myShiritori.play("hostess"); // ["hostess"]
myShiritori.play("stash"); // ["hostess", "stash"]
myShiritori.play("hostess"); // "game over"
