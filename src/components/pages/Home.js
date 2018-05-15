import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>Book Recommentions Just For You </h1>
        <h3>Choose from the categories belowand we will send you information bout books you will love</h3>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Children's</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Crafts & Hobbies</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Education & Teachers</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Food & Drink</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Gardening</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Health & Fitness</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>History & Refernce</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>LEGO&reg; Books</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Marvel</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Pregnancy & Parenting</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Star Wars&trade;</label>
        </div>
        <div>
          <input type="checkbox" name="subscribe"/>
          <label>Travel</label>
        </div>
      </div>
    )
  }
}

export default Home;
