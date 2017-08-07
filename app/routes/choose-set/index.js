import m from "mithril";

import sets from "../../../data/sets.js";

import css from "choose-set.css";

export default function() {
    return {
        view : () => m("div", { class : css.sets },
            Object.keys(sets).map((set) => m(`a[href=/game/${set}]`, {
                class    : css.set,
                oncreate : m.route.link
            }, set))
        )
    };
}
