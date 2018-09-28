import React,{Component} from 'react'
import {Route,Link,Switch,withRouter} from 'react-router-dom';
import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';
import{resetState} from '../../ducks/reducer'
import { connect } from 'react-redux';


class Wizard extends Component{
    render(){
        return(
            <div className="mainPage" >
                <div className = 'wizardDashboard'>
                    <div>
                        <Switch>
                            <Route   path = '/wizard/step1' render={()=><Wizard1/>}/>
                            <Route   path = '/wizard/step2' render={()=><Wizard2/>}/>
                            <Route   path = '/wizard/step3' render={()=><Wizard3/>}/>
                        </Switch>
                        <div className='cancel'>
                        <Link to = '/' className="link" onClick={()=>this.props.resetState()}>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(connect(null,{resetState})(Wizard))