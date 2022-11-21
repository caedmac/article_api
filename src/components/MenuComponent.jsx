import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuComponent extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          as={Link}
          name="articles"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          link={true}
          to="/read"
        >
          Dce Article Test
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            name="articles"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            link={true}
            to="/read"
          />
          <Menu.Item
            as={Link}
            name="create"
            active={activeItem === 'create'}
            onClick={this.handleItemClick}
            link={true}
            to="/create"
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
