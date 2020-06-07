import React from 'react';

import logo from '../logo.svg';

type ToolBarProps = {
    title: string,
    onSizeXChange: Function,
    onSizeYChange: Function
}

type ToolBarState = {
    sizeX: number,
    sizeY: number
}

class ToolBar extends React.Component<ToolBarProps, ToolBarState> {

    constructor(props:any) {
        super(props);
        this.state = {
            sizeX: 1,
            sizeY: 1
        }
        
        // NOTE: this is some messed up convention....
        // https://reactjs.org/docs/faq-functions.html
        // bind the functions to "this" scope
        // Prototype.Function.bind will return a new funtion
        // reassign the function to make sure the functions are binded to "this" scope
        this.setSizeX = this.setSizeX.bind(this);
        this.setSizeY = this.setSizeY.bind(this);
    }

    // TODO: set debounce to reduce call
    setSizeX(e:any):void {
        const value = +e.target.value;
        this.setState({sizeX: value});
        this.props.onSizeXChange(value);
    }

    setSizeY(e:any):void {
        const value = +e.target.value;
        this.setState({sizeY: value});
        this.props.onSizeXChange(value);
    } 

    render() {
        return (
            <div className='toolbar'>
                <img src={logo} className="App-logo" alt="logo" />
                <span>
                    {this.props.title}
                </span>

                <input type="text" value={this.state.sizeX} onChange={this.setSizeX} placeholder='Board size X'/>
                <input type="text" value={this.state.sizeY} onChange={this.setSizeY}  placeholder='Board size Y'/>

            </div>
        );
    }

}

export default ToolBar;