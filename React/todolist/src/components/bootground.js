import React, { PureComponent } from 'react';
import NavBar from './navbar/Navbar';

class bootground extends PureComponent {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container bg-light pt-5 shadow">
          <div className="row justify-content-center">
            <h4>ROW 1 Col 1 TODOS</h4>
          </div>
          <div className="row">
            <div className="col bg-warning">
              <h4>Row 1 Col 1 Board 1 Name</h4>
            </div>
            <div className="col bg-info justify-content-center">
              <h4>Row 1 Col 2</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Row 2 Col 1</h4>
              <hr></hr>
              <h4>Row 2 Col 1 hi</h4>
              <hr></hr>
              <table>
                <thead>
                  <tr>
                    <th>hi</th>
                    <th>there</th>
                    <td>Sexy</td>
                    <hr></hr>
                  </tr>
                  <tr>
                    <th>I love</th>
                    <td>Sexy</td>
                    <th>Sasha</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="col">
              <h4>Row 2 Col 3</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default bootground;
