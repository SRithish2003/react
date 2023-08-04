import React,{ Component } from 'react'

export class Classprops extends Component {
   
    render(){
        return (
            <div >
                <h3>Hi {this.props.name} from {this.props.place} welcome to our project.</h3>
            </div>
        )
    }
}
export default Classprops;