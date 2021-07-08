import { Component } from 'react';
import { FaAtlassian } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    openedModal: 'none',
    page: 1,
    todos: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => this.setState({ todos: data }));
    }
  }

  openModal = type => this.setState({ openedModal: type });
  closeModal = () => this.setState({ openedModal: 'none' });

  render() {
    const { openedModal } = this.state;
    return (
      <div>
        {/* MODALS */}
        <button onClick={() => this.openModal('edit')}>Edit</button>
        <button onClick={() => this.openModal('delete')}>Delete</button>
        <button onClick={() => this.openModal('create')}>Create</button>

        {openedModal === 'edit' && (
          <div>
            Edit modal <button onClick={this.closeModal}>Close</button>
          </div>
        )}
        {openedModal === 'delete' && (
          <div>
            Delete modal <button onClick={this.closeModal}>Close</button>
          </div>
        )}
        {openedModal === 'create' && (
          <div>
            Create modal <button onClick={this.closeModal}>Close</button>
          </div>
        )}
        {/* TODOS */}
        <button onClick={() => this.setState(p => ({ page: p + 1 }))}>
          Load more
        </button>
        {this.state.todos.map(t => (
          <div>{t.title}</div>
        ))}

        {/* TOAST */}
        <button
          onClick={() =>
            toast('Here is your toast.', {
              icon: <FaAtlassian color="blue" />,
            })
          }
        >
          TOAST
        </button>
        <Toaster position="top-right" />
      </div>
    );
  }
}
