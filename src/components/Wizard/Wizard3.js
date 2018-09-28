import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import {updateThree} from '../../ducks/reducer'


 class Wizard3 extends Component{
    constructor(){
        super()
        this.state={
           mortgage:0,
           rent:0
        }
        this.handleChange=this.handleChange.bind(this)
       this.newHouse = this.newHouse.bind(this)
    }
    componentDidMount(){
        const{mortgage,rent} = this.props
        this.setState({mortgage,rent})
      }
    handleChange({target:{name,value}}){
        this.setState({[name]:value})
    }
    newHouse(){
       const {name,address,city,state,zip,image_url} = this.props
       const {mortgage,rent} = this.state
        axios.post('/api/houses',{name,address,city,state,zip,image_url,mortgage,rent})
    }
    render(){
        console.log(this.props)
        return(
            <div>
            <h2>Add New Listing</h2>
            <div className="wizardInputs">
            <input placeholder='0' name='mortgage' onChange={this.handleChange} />
            <input placeholder='0' name='rent' onChange={this.handleChange} />
            </div>
            <div className='wizardbutton'>
            <Link to ='/' className="link" onClick={()=>this.newHouse}> Finish</Link>
            <Link to ='/wizard/step2' className="link" onClick={()=>this.props.updateThree(this.state.mortgage,this.state.rent)}> Back</Link>
            </div>
            </div>
        )
    }
}
function mapStateToProps(stateTwo){
    const {mortgage,rent} = stateTwo
    return{
        mortgage,
        rent
    }
}
export default connect(mapStateToProps,{updateThree})(Wizard3)