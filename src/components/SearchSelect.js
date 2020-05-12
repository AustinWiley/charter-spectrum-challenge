import React, { Component } from 'react';

class SearchSelect extends React.Component {

    renderOptions () {
        const items = this.props.options.map(item => <option value={item}>{item}</option>)
        return items;
    }  

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            {this.props.title}
            {this.props.checkboxValue
            ? <select id="cars"  name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                {/* <option value="All">All</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option> */}
                {this.renderOptions()}

              </select>
            : <></>
            }
          </label>
          <input type="checkbox" checked={this.props.checkboxValue} name={this.props.checkboxName} onChange={this.props.onCheckbox} />
        </form>
      );
    }

  }

export default SearchSelect;