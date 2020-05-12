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
    console.log(this.props.data)
    console.log(items)
    return (items.length === 0) ? <td colSpan='6'><tr>No Results</tr></td> : items
  }
}

export default Table;