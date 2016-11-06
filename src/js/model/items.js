import _ from 'lodash';

var FISH = [
  <img src="./images/crab.png">,
  <img src="./images/fish-1.png">,
  <img src="./images/fish-2.png">,
  <img src="./images/fish-3.png">,
  <img src="./images/fish-4.png">,
  <img src="./images/fish-5.png">,
  <img src="./images/fish-6.png">,
  <img src="./images/fish-7.png">,
  <img src="./images/fish.png">,
  <img src="./images/flying-fish.png">,
  <img src="./images/squid.png">,
  <img src="./images/lobster.png">,
  <img src="./images/shrimp.png">
]

var SEAWEED = [
  <img src="./images/seaweed-1.png">,
  <img src="./images/seaweed-2.png">,
  <img src="./images/seaweed-3.png">,
  <img src="./images/seaweed-4.png">,
  <img src="./images/seaweed-5.png">,
  <img src="./images/seaweed-6.png">,
  <img src="./images/seaweed-7.png">,
  <img src="./images/seaweed.png">
]

class Fishes {
    this.fish = FISH
  }
  getFish () {
    _.sample(this.fish)
  }
}

class Seaweed {
    this.seaweed = SEAWEED
  }
  getSeaweed () {
    _.sample(this.seaweed)
  }
}

export { Fishes, Seaweed };
