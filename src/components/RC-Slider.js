import 'rc-tooltip/assets/bootstrap.css';
import React, {useState} from 'react';

import Slider, { SliderTooltip } from 'rc-slider';
import '../assets/rc-sliderStyles/index.less'


const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

// const handle = props => {
//     const {value, dragging, index, ...restProps} = props;
//     return(
//         <SliderTooltip
//             prefixCls="rc-slider-tooltip"
//             overlay={`${value}`}
//             visible={dragging}
//             placement="top"
//             key={index}
//         >
//             <Handle value={value} {...restProps} />
//         </SliderTooltip>
//     );
// }


const RcSlider = props =>{


    let eloDiff = props.maxElo - props.minElo;
    
    const handleEloDiff = (value) => {
        eloDiff = value[1] - value[0];
        props.onMinEloChange(value[1]);
        props.onMaxEloChange(value[0]);
    }

    return(
        <div className="calculator__elo_inputBarBox">

            <span>+{eloDiff}</span>

            <div className="progressEloBar" >
                <Range 
                min={0} 
                max={3000} 
                defaultValue={[props.minElo, props.maxElo]} 
                value={[props.minElo, props.maxElo]}
                tipFormatter={value => `${value}`} 
                onChange={handleEloDiff} 
                />
            </div>
        </div>

    )
}

export default RcSlider;

