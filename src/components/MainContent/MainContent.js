import React from 'react';
import './MainContent.css';
import { GridVis } from '../GridVis/GridVis';

export class MainContent extends React.Component {
  render() {
    return (
      <div
        className="main-container"
        style={{ maxWidth: this.props.containerMaxWidth || '100%' }}
      >
        <GridVis
          gridItems={this.props.gridItems}
          gridCols={this.props.gridCols}
          gridRows={this.props.gridRows}
          gridGap={this.props.gridGap}
          gridColsSpan={this.props.gridColsSpan}
          gridRowSpan={this.props.gridRowSpan}
          handleGridClick={this.props.handleGridClick}
          selectedGridItems={this.props.selectedGridItems}
        />
      </div>
    );
  }
}
