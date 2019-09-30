import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log(this.state, "constructor")
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => {
                this.setState({robots:user})
                console.log(this.state, 'Componentdimount')
            })
            console.log('actual componentdidmount')
    }
    
    
    
    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
        console.log(this.state,'custome change state')
    }
    
    
    render(){
        console.log(this.state, 'render')
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  <CardList robots={filteredRobots}/>  
                </Scroll>
            </div>
        )  
    }  
}

export default App;