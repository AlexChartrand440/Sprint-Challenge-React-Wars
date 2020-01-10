import React from "react";
import "./App.css";
import axios from 'axios';
import { Jumbotron } from 'reactstrap';
import ImageCard from './components/CharacterCard';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class App extends React.Component {

  constructor(props) { super(props); this.state = { data: [], next: '', previous: '', search: '', LOADED: false }; }

  componentDidMount() {

    // if (this.state.LOADED == false)
      axios.get('https://swapi.co/api/people/').then(response => {

        this.setState({ data: response.data.results, next: response.data.next, prev: response.data.prev, LOADED: true });

      }).catch((error) => console.log(error)).finally(() => { });

  }

  search(event) {

    this.setState({ search: event.target.value });

  }

  processPagination(ID) {

    console.log(this.state.next);

    if (ID == 0) {

      axios.get(this.state.previous).then(response => {

        this.setState({ data: response.data.results, next: response.data.next, prev: response.data.prev, LOADED: true });
  
      }).catch((error) => console.log(error)).finally(() => { });

    } else {

      axios.get(this.state.next).then(response => {

        this.setState({ data: response.data.results, next: response.data.next, prev: response.data.prev, LOADED: true });
  
      }).catch((error) => console.log(error)).finally(() => { });

    }

  }

  render() {

    const cards = [];

    console.log(this.state.data);
    console.log(this.state.search);

    this.state.data.forEach(result => {
      // cards.push(<ImageCard data={result} />);
      console.log(result.name);
      console.log(result.name.toLowerCase().includes(this.state.search.toLowerCase()));
      if (this.state.search != undefined && result.name.toLowerCase().includes(this.state.search.toLowerCase())) {
        cards.push(<ImageCard data={result} />);
      } else if (this.state.search == undefined) {
        cards.push(<ImageCard data={result} />); 
      }
      console.log(cards);
    });

    if (this.state.LOADED)
      if (this.state.data.length > 0)
        return (
          <div className="App" style={{ width: '100%', height: '100%' }}>
            <form>
              <input type='text' style={{ width: '80%' }} onChange={event => this.search(event)} />
            </form>
            <div style={{ width: '60%', height: '100%', margin: '20px auto 0px auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
              {cards}
              {/* <PaginationItem>
                <PaginationLink previous onClick={() => {this.processPagination(0)}} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next onClick={() => {this.processPagination(1)}} />
              </PaginationItem> */}
            </div>
          </div>
        );
      else
        return (<div className="App" style={{ width: '100%', height: '100%' }}></div>);
    else
      return (<>
        <div>
          <Jumbotron>
            <h1 className="display-3">Loading...</h1>
          </Jumbotron>
        </div></>);

  }

}

export default App;