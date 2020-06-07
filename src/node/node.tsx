import React from 'react';
import './node.css';

type NodeProps = {
    loc: number
}

class Node extends React.Component<NodeProps> {    
    render() {
        return (
            <div className='node shadow'>
                {this.props.loc}
            </div>

        );
    }    
}

export default Node;