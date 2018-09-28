import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateImageURL} from '../../ducks/reducer'

 class Wizard2 extends Component{
    constructor(){
        super()
        this.state={
           image_url:''
        }
        this.handleChange=this.handleChange.bind(this)
    
    }
    componentDidMount(){
        const{image_url} = this.props
        this.setState({image_url})
      }
    handleChange({target:{name,value}}){
        this.setState({[name]:value})
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
            <h2>Add New Listing</h2>
            <div className="wizardInputs" >
            <input placeholder='Image URL' name='image_url' onChange={this.handleChange} />
            </div>
            <div className='wizardbutton'>
            <Link to='/wizard/step3' className="link" onClick={()=>this.props.updateImageURL(this.state.image_url)} >Next</Link >
            <Link to='/wizard/step1' className="link" onClick={()=>this.props.updateImageURL(this.state.image_url)} >Back</Link >
            </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {image_url} = state
    return{
        image_url
    }
}
export default connect(mapStateToProps,{updateImageURL})(Wizard2)