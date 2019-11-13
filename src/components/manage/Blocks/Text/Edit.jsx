/**
 * Edit text block.
 * @module components/manage/Blocks/Title/Edit
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import cx from 'classnames';
import '~/../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { isEqual } from 'lodash';

import { convertFromRaw, convertToRaw } from 'draft-js';



class Edit extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    detached: PropTypes.bool,
    index: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    block: PropTypes.string.isRequired,
    onAddBlock: PropTypes.func.isRequired,
    onChangeBlock: PropTypes.func.isRequired,
    onDeleteBlock: PropTypes.func.isRequired,
    onMutateBlock: PropTypes.func.isRequired,
    onFocusPreviousBlock: PropTypes.func.isRequired,
    onFocusNextBlock: PropTypes.func.isRequired,
    onSelectBlock: PropTypes.func.isRequired,
  };

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    detached: true,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);

    if (!__SERVER__) {
      const htmltext = (props.data && props.data.editorState) || '';

      this.state = {editorState: htmltext || EditorState.createEmpty()};
    
    }

    this.onChange = this.onChange.bind(this);
  }
  
  handleReturn() {
    console.log('handleReturn')
    return true
  }

  componentDidMount(){
    this.node && this.node.addEventListener('keyDown', handleReturn)
  }

  // onChange(editorState) {
  //   console.log('change!')
  //   this.props.handleKeyDown({key: null},
  //     this.props.index,
  //     this.props.block,
  //     this.ref,
  //     {
  //       disableEnter: true,
  //       disableArrowUp: true,
  //       disableArrowDown: true,
  //     })
  //   this.props.onChangeBlock(this.props.block, {
  //     ...this.props.data,
  //     editorState,
  //   });
  //   this.setState({editorState})
  // }

  onChange(editorState) {
    if (
      !isEqual(
        convertToRaw(editorState.getCurrentContent()),
        convertToRaw(this.state.editorState.getCurrentContent()),
      )
    ) {
      this.props.onChangeBlock(this.props.block, {
        ...this.props.data,
        text: convertToRaw(editorState.getCurrentContent()),
      });
    }
    this.setState({ editorState });
  }

  // componentWillUpdate(nextState) {
  //   // console.log('willupdate', nextState, this.ref)
  //   this.ref.handleReturn = () => 'un-handled';
  //   this.ref.focusEditor()
    
  // }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    if (__SERVER__) {
      return <div />;
    }

    const editorConfiguration = {
      heading: {
        options: [
          {
            model: 'heading5',
            view: 'h5',
            title: 'Block Title (H5)',
            class: 'ck-heading_heading5',
          },
          {
            model: 'block_description',
            view: {
              name: 'div',
              classes: 'chart-highlight',
            },
            title: 'Block Description',
            class: 'chart-highlight',
          },
        ],
      },
    };
    //
    const { editorState } = this.state;
    // console.log('in editor', this.props.selected, this.props.block)
    return (
      <div
        role="presentation"
        // onClick={() => this.props.onSelectBlock(this.props.block)}
        className={cx('block text', { selected: this.props.selected })}
        // ref={node => (this.ref = node)}
        onClick={(e)=> {
          this.props.onSelectBlock(this.props.block)
        }}
        // onKeyPress={(e)=> {

        //   console.log('lalalala')
        //   this.props.handleKeyDown({key: null},
        //     this.props.index,
        //     this.props.block,
        //     this.ref,
        //     {
        //       disableEnter: true,
        //       disableArrowUp: true,
        //       disableArrowDown: true,
        //     })
        //   }
        //   }

      >
        <Editor
          editorState={editorState} 
          onEditorStateChange={this.onChange}
          // onChange={this.onChange}
          ref={node => (this.ref = node)}
      
          // onKeyPress={(e)=>this.props.handleKeyDown(e,
          //   this.props.index,
          //   this.props.block,
          //   this.ref,
          //   {
          //     disableEnter: true,
          //     disableArrowUp: true,
          //     disableArrowDown: true,
          // })}
          // onBlur={(event, editor) => {}}
          // onFocus={(event, editor) => {}}
        />
      </div>
    );
  }
}

export default injectIntl(Edit);
