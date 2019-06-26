import React from 'react';
import './SideContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as solid_moon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as outline_moon } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export class SideContent extends React.Component {
  handleChange(event, item) {
    if (event.target.validity.valid) {
      const value = parseInt(event.target.value);
      this.props.handleChange(item, value);
    }
  }

  handleReset(e) {
    this.props.handleReset();
  }

  handleThemeChange(e) {
    this.props.handleThemeChange();
  }

  render() {
    return (
      <div className="side-container">
        <h3 className="title">CSS Grid Visualizer</h3>
        <br />
        <div className="field">
          <label className="label">Grid Items</label>
          <div className="control">
            <input
              className="input"
              type="text"
              pattern="[0-9]*"
              value={this.props.gridItems || 0}
              placeholder="Enter a number"
              onChange={e => this.handleChange(e, 'gridItems')}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Grid Columns</label>
          <div className="control">
            <input
              className="input"
              type="text"
              pattern="[0-9]*"
              value={this.props.gridCols || 0}
              placeholder="Enter a number"
              onChange={e => this.handleChange(e, 'gridCols')}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Grid Gap (px)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              pattern="[0-9]*"
              value={this.props.gridGap || 0}
              placeholder="Enter a number"
              onChange={e => this.handleChange(e, 'gridGap')}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Container Max Width (px)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              pattern="[0-9]*"
              value={this.props.containerMaxWidth || ''}
              placeholder="Enter a number"
              onChange={e => this.handleChange(e, 'containerMaxWidth')}
            />
          </div>
        </div>
        {/* <label className="label">Template</label>
        <div className="select">
          <select>
            <option>DEFAULT 3x3</option>
            <option>4x4</option>
            <option>Another one</option>
            <option>Last one here</option>
          </select>
        </div> */}
        <br />
        <div
          className={
            'hidden-fields-container ' +
            (this.props.selectedGridItems.length > 0 ? 'visible' : 'hidden')
          }
        >
          <p className="subtitle">Selected Item Properties</p>
          <div className="field">
            <label className="label">Grid Row Span</label>
            <div className="control">
              <input
                className="input"
                type="text"
                pattern="[0-9]*"
                value={this.props.gridRowSpan || 0}
                placeholder="Enter a number"
                onChange={e => this.handleChange(e, 'gridRowSpan')}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Grid Column Span</label>
            <div className="control">
              <input
                className="input"
                type="text"
                pattern="[0-9]*"
                value={this.props.gridColsSpan || 0}
                placeholder="Enter a number"
                onChange={e => this.handleChange(e, 'gridColsSpan')}
              />
            </div>
          </div>
        </div>

        <button className="button is-primary is-fullwidth">View Code</button>
        <button
          className={
            'button is-outlined is-fullwidth ' +
            (this.props.darkMode ? 'is-light' : '')
          }
          onClick={e => this.handleReset(e)}
        >
          Reset
        </button>
        <div className="options">
          <FontAwesomeIcon
            icon={this.props.darkMode ? solid_moon : outline_moon}
            className="icon"
            onClick={e => this.handleThemeChange(e)}
          />
          <a
            href="https://www.github.com/austinkrueger/css-grid-vis"
            target="_blank"
            rel="noopener noreferrer"
            className={this.props.darkMode ? 'dark-link' : 'light-link'}
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
      </div>
    );
  }
}
