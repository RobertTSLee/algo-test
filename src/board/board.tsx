import React from 'react';
import Node from '../node/node';

import './board.css';

type BoardProps = {
    sizeX: number,
    sizeY: number
}

class Board extends React.Component<BoardProps> {


    renderNode(loc:number) {
        return <Node loc={loc} />;
    }

    renderRows() {
        let loc = 0;
        let rows = [];
        for (let i=0; i < this.props.sizeY; i++) {
            let nodes = [];
            for (let j=0; j < this.props.sizeX; j++) {
                loc++;
                nodes.push(this.renderNode(loc));
            }
            rows.push(nodes);            
        }
        return rows;
    }


    render() {
        return (
            <div className='board-body'>
                {this.renderRows().map(row => {
                    return (
                        <div className='flex-wrap'>
                            <div className='row'>
                                {row}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Board;