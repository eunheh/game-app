import $ from 'jquery';
import _ from 'lodash';

import { Game } from "./game";
import { Fishes, Seaweed } from "./model/items";
import { AppController } from "./controller/app";

var display = $(".display");

var fish = new Fish();
var seaweed = new Seaweed();
var game = new Game(fish, seaweed);
var app = new AppController(game, display);

$(".startPlay").click(game);

app.init();
