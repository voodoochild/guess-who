import m from "mithril";

import sets from "../../../data/sets.js";
import Tile from "../../components/tile";

import css from "game.css";

export default function() {
    return {
        view : () => m("div", { class : css.game },
            m("h1", "Guess Who?"),
            m("div", { class : css.tiles },
                sets[m.route.param("set")].map((o) => m(Tile, o))
            )
        )
    };
}
