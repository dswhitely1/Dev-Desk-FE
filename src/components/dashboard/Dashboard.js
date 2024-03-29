// React Components
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Store
import { getTickets } from '../../store/actions';

// Components
import NavBar from './Navigation/NavBar';
import Tickets from './Tickets/Tickets';
import UserModal from './Users/UserModal';
import TicketForm from './TicketForm/TicketForm';

class App extends Component {
  state = {
    // Default state for Modal is set to false 
    show: false
  };

  // ShowModal function
  showModal = evt => {
    this.setState({
      show: !this.state.show
    });
  };

  //CDM, calls getTickets function from Redux
  componentDidMount() {
    this.props.getTickets();
  }

  render() {
    return (
      <>
        {/* Renders NavBar component */}
        <NavBar />

        {/* Renders Dashboard then loads tickets using stored state loading */}
        <div className='dashboard'>
          <TicketForm />
          {this.props.loading ? (
            <p>Loading Tickets...</p>
          ) : (
            <Tickets tickets={this.props.tickets} />
          )}
        </div>
        <UserModal onClose={this.showModal} show={this.state.show} />
      </>
    );
  }
}

// From the Redux, we're using the states loading, error, and tickets.
const mapStateToProps = state => {
  console.log('DASHBOARD STATE:', state);
  return {
    loading: state.loading,
    error: state.error,
    tickets: state.tickets
  };
};

// From Redux, we're pulling the getTickets function
const mapDispatchToProps = {
  getTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
