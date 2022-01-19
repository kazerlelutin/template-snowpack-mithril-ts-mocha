import m from 'mithril'
import classes from './Counter.module.css'

interface Attrs {
    initialValue: number;
  }
  
  interface State {
    count: number;
    increment(): void;
    decrement(): void;
  }

const Counter: m.Component<Attrs, State> = {
    oninit ({attrs,state}:{attrs:Attrs, state:State}) {
        state.count = attrs.initialValue
        state.increment = () => {
            state.count++
        }
        state.decrement = () => {state.count--}
    },
    view ({state}:{attrs:Attrs, state:State}) {
        return m('.counter',{class:classes.container},
            m('div',{class:classes.counter}, `count: ${state.count}`),
            m('div',{class: classes.containerButtons},
                m('button',{class:classes.button,onclick: state.increment}, '+'),
                m('button',{class:classes.button,onclick: state.decrement}, '-')
            )
        )
    }
}

export default Counter