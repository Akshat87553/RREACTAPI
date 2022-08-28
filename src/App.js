
import React from 'react';


class App extends React.Component {

   
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    
     
    componentDidMount() {

        fetch('https://cat-fact.herokuapp.com/facts/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                          {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}


export default App;
