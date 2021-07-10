import { Component } from 'react';
import { Toaster } from 'react-hot-toast';

export class App extends Component {
  render() {
    return (
      <div>
        <Toaster position="top-right" />
      </div>
    );
  }
}
