/** @jsx m */

import m from 'mithril';

import { Button } from './Button';
import './header.css';

export const Header = {
  oninit ({attrs,state}) {
    state.count = attrs.initialValue
    state.increment = () => {
        state.count++
    }
    state.decrement = () => {state.count--}
},
view ({state}) {
    return m('.counter',{class:"classes.container"},
        m('div',{class:"classes.counter"}, `count: ${state.count}`),
        m('div',{class:" classes.containerButtons"},
            m('button',{class:"classes.button",onclick: state.increment}, '+'),
            m('button',{class:"classes.button",onclick: state.decrement}, '-')
        )
    )
}
};
