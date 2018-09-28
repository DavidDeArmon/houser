import React,{Component} from 'react'
import House from '../house/House';
import {Link} from 'react-router-dom';
import axios from 'axios'

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houses:[]
        }
        this.deleteHouse=this.deleteHouse.bind(this)
    }
    componentDidMount(){
        axios.get('/api/houses').then(houses=>{
            console.log(houses.data)
            this.setState({houses:houses.data})
        })
    }
    deleteHouse(id){
        axios.delete('/api/houses/'+id).then(houses=>{
            console.log(houses.data)
            this.setState({houses:houses.data})
        })
    }
    render(){
        return(
            <div className="mainPage">
                <div className='dashboard'>
                    <div className='dashboardHeader'>
                        <h1>Dashboard</h1>
                        <Link className='link' to = '/wizard/step1'>Add New Property</Link>
                    </div>
                    <div className='dashboardCards'>
                    {this.state.houses.map((e,i)=>{
                        return <House key={i} house={e} deleteHouse={this.deleteHouse}/>
                    })}
                    </div>
                </div>
            </div>
        )
    }
}