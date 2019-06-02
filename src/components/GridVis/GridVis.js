import React from 'react';
import './GridVis.css';

export class GridVis extends React.Component {
  render() {
    const grid_array = Array(this.props.gridItems || 0);
    const items = [];

    for (const [k, v] of grid_array.entries()) {
      let item_styles = {};
      if (this.props.selectedGridItems.includes(k)) {
        item_styles = {
          gridColumn: `span ${this.props.gridColsSpan || 1} / auto`,
          gridRow: `span ${this.props.gridRowSpan || 1} / auto`
        };
      }
      items.push(
        <div
          className={
            'card grid-item ' +
            (this.props.selectedGridItems.includes(k) ? 'active' : 'inactive')
          }
          key={k}
          style={item_styles}
          onClick={e => this.props.handleGridClick(e, k)}
        >
          <div className="card-content">
            <h3 className="subtitle">
              Item {k + 1}
              {v}
            </h3>
          </div>
        </div>
      );
    }

    const styles = {
      width: '100%',
      display: 'grid',
      gridTemplateRows: `repeat(${this.props.gridRows || 0}, 1fr)`,
      gridTemplateColumns: `repeat(${this.props.gridCols || 0}, 1fr)`,
      gap: `${this.props.gridGap}px ${this.props.gridGap}px `,
      padding: '25px'
    };

    return <div style={styles}>{items}</div>;
  }
}
