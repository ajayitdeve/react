//class component
//A Class component must extends React Component
//A class component must have render() method who return jsx
import react, {Component} from 'react'
class GrandWelcome extends Component{
    render(){
        return (
            <div>
                <h1>Hello from class component {this.props.name} {this.props.age}</h1>
                {this.props.children}
            </div>
        )
    }

}

export default  GrandWelcome