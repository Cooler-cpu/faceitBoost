import * as React from 'react'

import '../../scss/components/button.scss'

const generateClassName = props => {
    const importance =
      (props.secondary && 'Secondary') ||
      (props.primary && 'Primary') ||
      'Primary'
    const variant = (props.outline && 'Outline') || (props.ghost && 'Ghost') || ''
  
    return `${importance}${variant}Button`
  }
  
  export default props => {
    return (
      <button 
        className={generateClassName(props)}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    )
  }
  