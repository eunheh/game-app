class Game {
  constructor (options) {
    options = options || {};
    this.turnsLeft = options.turnsLeft || 5;
    this.fishes = options.fishes;
    this.seaweed = options.seaweed;
    this.total = [];
  }

  isOver () {
    var lose = this.turnsLeft === 0;
    var win = _.every(fish, function (fish) {
      return this.renderCatch.includes(fish);
    }.bind(this));

    return lose || win;
  }

  renderCatch () {
    var catchFish = this.fish.map(function (fish) {

    return catchFish;
  }


//if the player clicks a fish then number of turnsLeft goes down by 1.
  makeCatch (fish) {
    if (this.fish.renderCatch(fish) {
      return this.fish.push(fish);
    }
    if (!this.renderCatch(fish)) {
      this.turnsLeft -= 1;
    }
  }
}


export { Game };
