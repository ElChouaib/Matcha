import React from 'react';
import Radio from '@material-ui/core/Radio';

const RadioGroup = (props) => {
    const { input, meta, options } = props;
    const hasError = meta.touched && meta.error;

    return (
      <div>
        {options.map(o => <label key={o.value}>
          <Radio {...input}  checked={o.value === input.value} value={o.value} />
          {o.title}</label>)}<br/>
        {hasError && <span style={{'fontSize':'12px','color':'#f44336'}}>{meta.error}</span>}
      </div>
    );
}

export default RadioGroup