import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import{updateOne} from '../../ducks/reducer'

class Wizard1 extends Component{
      constructor(){
        super()
        this.state={
           name:'',
           address:'',
           city:'',
           state:'',
           zip:''
        }
        this.handleChange=this.handleChange.bind(this)
      }
    componentDidMount(){       
        const{name,city,address,state,zip} = this.props
        this.setState({name,address,city,state,zip})
    }   
    handleChange({target:{name,value}}){
        this.setState({[name]:value})
    }
    render(){
        console.log('Wizard One ',this.props)
        const {name,address,city,state,zip} = this.state
        return(
            <div className="wizardInputs">
            <h2>Add New Listing</h2>
            <input placeholder='name' value={name} name='name' onChange={this.handleChange} />
            <input placeholder='address'value={address} name='address' onChange={this.handleChange} />
            <input placeholder='city' value={city }name='city' onChange={this.handleChange} />
            <input placeholder='state' value={state} name='state' onChange={this.handleChange} />
            <input placeholder='zip' value={zip} name='zip' onChange={this.handleChange} />
            <div className='wizardbutton'>
            <Link to='/wizard/step2' className="link" onClick={()=>this.props.updateOne(name,address,city,state,zip)} >Next</Link >
            </div>
            </div>
        )
    }
}
function mapStateToProps(statetwo){
    const {name,address,city,state,zip} = statetwo
    return{
        name,
        address,
        city,
        state,
        zip
    }
}
export default connect(mapStateToProps,{updateOne})(Wizard1)