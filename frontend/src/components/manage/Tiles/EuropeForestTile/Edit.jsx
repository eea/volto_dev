import React, { Component } from 'react';
import { Form as UiForm } from 'semantic-ui-react';
import { Field } from '@plone/volto/components'; // EditTile

class Edit extends Component {
  constructor(props) {
    super(props);

    const tileData = props.data;

    this.state = {
      ...tileData,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  updateData(obj) {
    this.setState(obj, this.onSubmit);
  }

  onSubmit() {
    this.props.onChangeTile(this.props.tile, {
      ...this.props.data,
      ...this.state,
    });
  }

  render() {
    return (
      <div className="tile selected">
        <div className="tile-inner-wrapper">
          <UiForm>
            <Field
              id="europe-tile-title"
              title="Title"
              type="text"
              value={this.state.europe_tile_title}
              required={false}
              onChange={(e, d) => this.updateData({ europe_tile_title: d })}
            />

            <Field
              id="europe-forest-p-eu28"
              title="Forest area in EU28"
              type="text"
              value={this.state.europe_forest_p_eu28}
              required={false}
              onChange={(e, d) => this.updateData({ europe_forest_p_eu28: d })}
            />

            <Field
              id="europe-forest-l-eu28"
              title="Total forest area in EU28"
              type="text"
              value={this.state.europe_forest_l_eu28}
              required={false}
              onChange={(e, d) => this.updateData({ europe_forest_l_eu28: d })}
            />

            <Field
              id="europe-forest-p-eea39"
              title="Forest area in EEA39"
              type="text"
              value={this.state.europe_forest_p_eea39}
              required={false}
              onChange={(e, d) => this.updateData({ europe_forest_p_eea39: d })}
            />

            <Field
              id="europe-forest-l-eea39"
              title="Total forest area in EEA39"
              type="text"
              value={this.state.europe_forest_l_eea39}
              required={false}
              onChange={(e, d) => this.updateData({ europe_forest_l_eea39: d })}
            />

            <Field
              id="europe-source"
              title="Source"
              type="text"
              value={this.state.europe_text_attribution}
              required={false}
              onChange={(e, d) =>
                this.updateData({ europe_text_attribution: d })
              }
            />

            <Field
              id="europe-tile-link"
              title="Source link"
              type="text"
              value={this.state.europe_tile_link}
              required={false}
              onChange={(e, d) => this.updateData({ europe_tile_link: d })}
            />
          </UiForm>
        </div>
      </div>
    );
  }
}

export default Edit;
