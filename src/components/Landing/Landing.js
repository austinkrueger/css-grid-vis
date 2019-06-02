import React from 'react';
import { MainContent } from '../MainContent/MainContent';
import { SideContent } from '../SideContent/SideContent';
import './Landing.css';
import './Landing.sass';

const DEFAULTS = {
  gridItems: 9,
  gridCols: 3,
  gridRows: 3,
  gridGap: 10,
  gridRowSpan: 1,
  gridColsSpan: 1
};

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    const theme = window.localStorage.getItem('dark_theme') === 'true';
    this.state = {
      gridItems: DEFAULTS.gridItems,
      gridCols: DEFAULTS.gridCols,
      gridRows: DEFAULTS.gridRows,
      gridGap: DEFAULTS.gridGap,
      gridRowSpan: DEFAULTS.gridRowSpan,
      gridColsSpan: DEFAULTS.gridColsSpan,
      selectedGridItems: [],
      darkMode: theme,
      containerMaxWidth: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleGridClick = this.handleGridClick.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleChange(item, value) {
    this.setState({ [item]: value });
  }

  handleReset() {
    this.setState({
      gridItems: DEFAULTS.gridItems,
      gridCols: DEFAULTS.gridCols,
      gridRows: DEFAULTS.gridRows,
      gridGap: DEFAULTS.gridGap,
      gridRowSpan: DEFAULTS.gridRowSpan,
      gridColsSpan: DEFAULTS.gridColsSpan,
      selectedGridItems: [],
      containerMaxWidth: ''
    });
  }

  handleGridClick(e, idx) {
    const prev_selected = this.state.selectedGridItems;
    if (prev_selected.includes(idx)) {
      const remove_idx = prev_selected.indexOf(idx);
      prev_selected.splice(remove_idx, 1);
    } else {
      prev_selected.push(idx);
    }
    this.setState({
      selectedGridItems: prev_selected
    });
  }

  handleThemeChange() {
    localStorage.setItem('dark_theme', !this.state.darkMode);
    this.setState({
      darkMode: !this.state.darkMode
    });
  }

  render() {
    return (
      <div
        className={
          'content-container ' + (this.state.darkMode ? 'dark-theme' : '')
        }
      >
        <SideContent
          handleChange={this.handleChange.bind(this)}
          handleReset={this.handleReset.bind(this)}
          gridItems={this.state.gridItems}
          gridRows={this.state.gridRows}
          gridCols={this.state.gridCols}
          gridGap={this.state.gridGap}
          gridRowSpan={this.state.gridRowSpan}
          gridColsSpan={this.state.gridColsSpan}
          selectedGridItems={this.state.selectedGridItems}
          handleThemeChange={this.handleThemeChange.bind(this)}
          darkMode={this.state.darkMode}
          containerMaxWidth={this.state.containerMaxWidth}
        />
        <MainContent
          gridItems={this.state.gridItems}
          gridRows={this.state.gridRows}
          gridCols={this.state.gridCols}
          gridGap={this.state.gridGap}
          gridRowSpan={this.state.gridRowSpan}
          gridColsSpan={this.state.gridColsSpan}
          containerMaxWidth={this.state.containerMaxWidth}
          handleGridClick={this.handleGridClick.bind(this)}
          selectedGridItems={this.state.selectedGridItems}
        />
      </div>
    );
  }
}
