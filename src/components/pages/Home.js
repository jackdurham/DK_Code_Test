import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  render() {
    return(
      <div className="container">
        <h1 className="title">Book Recommentions Just For You </h1>
        <h3 className="subheading">Choose from the categories below and we will send you information bout books you will love</h3>
        <div className="row">

          <div className="col-md-3">
            <div className="input">
              <input type="checkbox" />
              <label>Children's</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>Food & Drink</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>History & Reference</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>Pregnancy & Parenting</label>
            </div>
          </div>

          <div className="col-md-3">
            <div className="input">
              <input type="checkbox" />
              <label>Crafts & Hobbies</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>Gardening</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>LEGO&reg; Books</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>Star Wars&trade;</label>
            </div>
          </div>

          <div className="col-md-3">
            <div className="input">
              <input type="checkbox" />
              <label>Education & Teachers</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>Health & Fitness</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>Marvel</label>
            </div>
            <div className="input">
              <input type="checkbox" />
              <label>Travel</label>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
