/**
 * Document view component.
 * @module components/theme/View/DocumentView
 */

import 'react-mosaic-component/react-mosaic-component.css';

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Container, Image } from 'semantic-ui-react';
// import { map } from 'lodash';
import { settings, tiles } from '~/config';

import {
  Mosaic,
  MosaicWindow,
  // Corner,
  // createBalancedTreeFromLeaves,
  // getLeaves,
  // getNodeAtPath,
  // getOtherDirection,
  // getPathToCorner,
  // MosaicDirection,
  // MosaicNode,
  // MosaicParent,
  // MosaicZeroState,
  // updateTree,
} from 'react-mosaic-component';

import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  // hasBlocksData,
} from '@plone/volto/helpers';

/**
 * Component to display the document view.
 * @function DocumentView
 * @param {Object} content Content object.
 * @returns {string} Markup of the component.
 */

class MosaicView extends Component {
  constructor(props) {
    super(props);

    let content = props.content;
    console.log('content', content);
    const tilesLayoutFieldname = getBlocksLayoutFieldname(content);

    let layout = content[tilesLayoutFieldname].layout;

    if (!__SERVER__) {
      this.state = {
        currentNode: layout,
      };
    }

    console.log('This.state in constructor', this.state, content);
  }

  createNode = () => {
    // this.onAddTile('text', 0);
    console.log('Called createNode');
  };

  onChange = currentNode => {
    this.setState({ currentNode });
  };

  onRelease = currentNode => {
    console.log('Mosaic.onRelease():', currentNode);
  };

  renderTile(tileid) {
    const content = this.props.content;
    const tilesFieldname = getBlocksFieldname(content);
    const availableTiles = content[tilesFieldname];
    const tiletype = availableTiles[tileid]['@type'];

    console.log('Rendering tile:', tileid, tiletype, tilesFieldname, content);

    let Tile = null;
    Tile = tiles.defaultTilesViewMap[tiletype];

    return Tile !== null ? (
      <div class="tile-container">
        <Tile key={tileid} properties={content} data={availableTiles[tileid]} />
      </div>
    ) : (
      <div> {JSON.stringify(tiletype)} </div>
    );
  }

  render() {
    const content = this.props.content;
    console.log('This.state in render: ', this.state);

    const tilesLayoutFieldname = getBlocksLayoutFieldname(content);
    const height = content[tilesLayoutFieldname].layout_height || 500;

    return true ? (
      <div id="page-document" className="ui wrapper" style={{ height: height }}>
        {/* <Helmet title={content.title} /> */}
        <Mosaic
          renderTile={(tileid, path) => (
            <MosaicWindow
              title={`Window ${tileid}`}
              createNode={this.createNode}
              path={path}
            >
              {this.renderTile(tileid)}
            </MosaicWindow>
          )}
          value={this.state.currentNode}
          onChange={this.onChange}
          onRelease={this.onRelease}
        />
      </div>
    ) : (
      <Container id="page-document">
        <Helmet title={content.title} />
        <h1 className="documentFirstHeading">{content.title}</h1>
        {content.description && (
          <p className="documentDescription">{content.description}</p>
        )}
        {content.image && (
          <Image
            className="document-image"
            src={content.image.scales.thumb.download}
            floated="right"
          />
        )}
        {content.remoteUrl && (
          <span>
            The link address is:
            <a href={content.remoteUrl}>{content.remoteUrl}</a>
          </span>
        )}
        {content.text && (
          <div
            dangerouslySetInnerHTML={{
              __html: content.text.data.replace(
                /a href="([^"]*\.[^"]*)"/g,
                `a href="${settings.apiPath}$1/download/file"`,
              ),
            }}
          />
        )}
      </Container>
    );
  }
}

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */

MosaicView.propTypes = {
  /**
   * Content of the object
   */
  content: PropTypes.shape({
    /**
     * Title of the object
     */
    title: PropTypes.string,
    /**
     * Description of the object
     */
    description: PropTypes.string,
    /**
     * Text of the object
     */
    text: PropTypes.shape({
      /**
       * Data of the text of the object
       */
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default MosaicView;
