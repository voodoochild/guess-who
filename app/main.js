import m from "mithril";

import sets from "../data/sets.js";

import Tile from "components/tile";

import css from "main.css";

m.mount(document.body, function() {
    return {
        view : () => m("div", { class : css.game },
            m("h1", "Guess Who?"),

            m("div", { class : css.tiles },
                sets.family.map((o) => m(Tile, o))
            )

            // m(Tile, {
            //     name    : "Kriss",
            //     picture : "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p320x320/12088150_10153597683001083_391628962831313815_n.jpg?oh=2e6634e9b7d8431174c919bfc08b8db5&oe=59EEB117"
            // })
        )
    };
});
