class App extends React.Component {
  constructor (props){
    super(props)
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.state = {
      formOne : <formOne/>,
      fOne : false
    }
  }

  // if this.state.fOne is false, do not render this.state.formOne
  handleCheckoutClick () {
    this.setState(state => ({
        fOne: !state.fOne
      }))
    }

  render () {
    const fOne = this.state.fOne;
    let button;
    if (fOne) {
      button = <formOne onClick= {this.handleCheckoutClick}/>
    }
    return (
      <div>
        <button id= "checkout"> Checkout </button>
      </div>
    )
  };
}


ReactDOM.render(<App/>, document.getElementById('app'));



/* Checkout Homepage,
    checkout button component
    state is form one?
      On click function that should render form 1
  */