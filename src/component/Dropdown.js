import React,{Component} from 'react'
import Select from 'react-select';

const Dropdown = [
  { label: "Not Processed🥺" },
  { label: "Preparing🍱"},
  { label: "On The Way🤟"},
  { label: "Delivered 😍"}
];
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Dropdown} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}


export default App ;
