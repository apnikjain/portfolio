import React, { Component } from "react";
// import Switch from "react-switch";
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
  

  

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      var title = this.props.sharedData.titles;
    }

    return (
      <div>

           
      

      <header id="home" style={{ height: window.innerHeight - 140, display: 'flex', justifyContent:'center' }}>
      
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
          
            <div>
              <span style = {{color:"white"}}className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0" style = {{color:"white"}}>
                {name}
              </h1>
              <div className="title-container" style = {{color:"white"}}>
                <h2>{title}</h2>
              </div>
              
            </div>
          </div>
        </div>
      </header>
      </div>
    );
  }
}

export default Header;
