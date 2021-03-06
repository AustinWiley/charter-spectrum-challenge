import React from "react";

const SearchGroup = props => (
  <form>
    <label>
      {props.title}
      {props.checkboxValue
      ? <input onKeyDown={(e) => {if(e.keyCode === 13) e.preventDefault()}} type="text" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
      : <></>
      }
    </label>
    <input type="checkbox" checked={props.checkboxValue} name={props.checkboxName} onChange={props.onCheckbox} />
  </form>
);

export default SearchGroup;