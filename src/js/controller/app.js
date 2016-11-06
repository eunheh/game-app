import $ from 'jquery';
import _ from 'lodash';

// import { gameTemplate } from "./game";

class AppController {
  constructor (game, display) {
    this.game = game;
    this.display = display;
  }

  init () {
    this.render();
  }

  render () {
    var html = gameTemplate(this.game);
    this.display.html(html);
    $(".fish").click(this.takeTurn.bind(this));
  }

  takeTurn (event) {
    console.log(this);
    var target = $(event.target);
    var fish = target.html();

    this.game.makeCatch(fish);
    this.render();
  }
}

export { AppController };
