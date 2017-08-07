import m from "mithril";

import css from "tile.css";

export default function() {
    return {
        oninit : (vnode) => {
            const state = vnode.state;
            const attrs = vnode.attrs;

            state.name    = attrs.name    || "";
            state.picture = attrs.picture || "";
            state.flipped = attrs.flipped || false;

            state.flip = () => {
                state.flipped = !state.flipped;
            };
        },

        view : (vnode) => {
            const state = vnode.state;

            return m("div", {
                class   : [ css.tile, state.flipped ? css.flipped : null ].join(" "),
                onclick : state.flip
            },
                m("img", {
                    class : css.picture,
                    src   : state.picture || "fallback.png"
                }),
                m("div", { class : css.name }, state.name)
            );
        }
    };
}
