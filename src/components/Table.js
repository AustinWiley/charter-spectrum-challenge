import React, {
  Component
} from 'react';
import TableRow from './TableRow';

class Table extends Component {
  render() {
    return (
      <>
        <table id="restaurants">
          <tbody>
            <tr>
              <th></th>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Phone</th>
              <th>Genres</th>
            </tr>
            {this.renderRows()}
          </tbody>
        </table>
    </>
    );
  }

  renderRows = () => {
    const items = this.props.data.map((item, index) => {
      return <TableRow key={item.id} restaurantData={item} index={index} />
    })
    return (items.length === 0) ? <tr><td colSpan='6'>No Results</td></tr> : items
  }
}

export default Table;