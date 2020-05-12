import React, {
  Component
} from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      restaurantData: props.restaurantData
    };
  }

  toggleMoreInfo = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };

  collapsible = () => {
    const {
      restaurantData: {
        address1,
        attire,
        hours,
        website,
        zip,
      },
    } = this.props;
    return (
      <>
        <tr className={(this.props.index % 2) ? 'dark' : 'light'}>
          <td colSpan='6'>
            <table id='noBorders'>
              <tr>
                <td>Hours:</td>
                <td>{hours}</td>
                <td>Address:</td>
                <td>{`${address1}, ${zip}`}</td>
              </tr>
              <tr>
                <td>Attire:</td>
                <td>{attire}</td>
                <td>Website:</td>
                <td className="noBorders"><a href={website}>{website}</a></td>
              </tr>
            </table>
          </td>
        </tr>
      </>
    );
  };

  render() {
    const {
      restaurantData: {
        city,
        genre,
        name,
        state,
        telephone,
      },
    } = this.props;
    return (
      <>
      <tr className={(this.props.index % 2) ? 'dark' : 'light'}>
        <td className={'expand'} style={this.state.isCollapsed ? {color: 'red'} : {color: 'green'} } onClick={this.toggleMoreInfo}>{this.state.isCollapsed ? 'x' : '+'}</td>
        <td>{name}</td>
        <td>{city}</td>
        <td>{state}</td>
        <td>{telephone}</td>
        <td>{genre}</td>
      </tr>
      {this.state.isCollapsed ? this.collapsible() : <></>}
    </> 
    );
  }
}

export default Table;