import m from 'mithril'
import Counter from '../Counter/Counter'
import classes from './Hello.module.css'

const Hello: m.ClosureComponent = {

    view () {
        return m('div',{class: classes.container},[
            m('h2',{class: classes.title}, 'Hello World !'),
            m(Counter,{initialValue: 2}),
        ]
                
        )
    }
    
}

export default Hello