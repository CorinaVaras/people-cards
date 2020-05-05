import React from 'react'
import './Home.css'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []  
        }
    }
    
     getData = () => {
        fetch('https://randomuser.me/api/?results=20')
        .then( res => res.json())
        .then( data => {
            this.setState({
                data: data.results
            })

        }).catch( err => 
            console.error(err))
    }

    componentDidMount () {
        this.getData()
    }

          

    render(){

        return (
              <div>
                  {
                      this.state.data.map((item) => (
                          <div>
                            <p>Nombre: {`${item.name.title} ${item.name.first} ${item.name.last}`}</p>
                            <p>Telefono: {item.phone}</p>
                            <p>Email: {item.email}</p>
                         </div>
                      ))
                  }
              </div>
         
        )
    }
}
