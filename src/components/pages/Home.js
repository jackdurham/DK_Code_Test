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
              <label className="form-control"><input type="checkbox" />Children's</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />Food & Drink</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />History & Reference</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />Pregnancy & Parenting</label>
            </div>
          </div>

          <div className="col-md-3">
            <div className="input">
              <label className="form-control"><input type="checkbox" />Crafts & Hobbies</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />Gardening</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />LEGO&reg; Books</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />Star Wars&trade;</label>
            </div>
          </div>

          <div className="col-md-3">
            <div className="input">
              <label className="form-control"><input type="checkbox" />Education & Teachers</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />Health & Fitness</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />Marvel</label>
            </div>
            <div className="input">
              <label className="form-control"><input type="checkbox" />Travel</label>
            </div>
          </div>
        </div>


        <div className="form">
          <h4 className="newsletter">Join our newsletter so we can send you book recommentions</h4>
          <form>
            <div className="col-xs-3">
              <input className="name" type="text" placeholder="First name*"/>
              <input type="text" placeholder="Last name*"/>
            </div>
            <input className="email" type="text" placeholder="Your email address*"/>
            <button className="btn btn-danger">Subscribe</button>
            <p><input type="checkbox" /> I agree to the <a href="#">Privacy Policy</a> and I am over 16 years of age</p>
          </form>
        </div>




      </div>
    )
  }
}

export default Home;
