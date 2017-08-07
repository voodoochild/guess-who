import m from "mithril";

import Game from "routes/game";
import ChooseSet from "routes/choose-set";

import "main.css";

m.route(document.body, "/choose-set", {
    "/choose-set" : ChooseSet,
    "/game/:set"  : Game
});
