import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const Handle = Slider.Handle;
const MAX = 10
const MIN = 1
const wrapperStyle = { width: 400, margin: 50, paddingBottom: 20 };

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

const Welcome = (props) => {
    return (
        <div className="welcome">
            <h1>
                Welcome to the game of Hangman. Would you like to play?
            </h1>
            <div style={wrapperStyle} className="difficulty-slider">
            <h2>Select Difficulty</h2>
                <Slider 
                    onChange={props.onChange}
                    min={MIN}
                    max={MAX}
                    handle={handle}
                />
            </div>
            <button onClick={()=>props.startGame('Play')}>Click to Play</button>
        </div>
    )
}

export default Welcome