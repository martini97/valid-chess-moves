import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { render, mount } from 'enzyme';

import Knight from '../Knight';

import Tile from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    row: 1,
    column: 'a',
    handleClick: () => null,
  };

  ReactDOM.render(<Tile {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot', () => {
  const props = {
    row: 1,
    column: 'a',
    handleClick: () => null,
  };

  let component = renderer.create(<Tile {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props.selected = true;
  component = renderer.create(<Tile {...props} />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props.possible = true;
  component = renderer.create(<Tile {...props} />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props.selected = true;
  component = renderer.create(<Tile {...props} />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should not contain Knight when selected', () => {
  const props = {
    row: 1,
    column: 'a',
    handleClick: () => null,
    selected: false,
  };
  const wrapper = mount(<Tile {...props} />);
  expect(wrapper.contains(Knight)).toEqual(false);
});

it('should contain Knight when selected', () => {
  const props = {
    row: 1,
    column: 'a',
    handleClick: () => null,
    selected: true,
  };
  const wrapper = mount(<Tile {...props} />);
  expect(wrapper.contains(Knight)).toEqual(true);
});

it('should call function on click', () => {
  const props = {
    row: 1,
    column: 'a',
    handleClick: jest.fn(),
    selected: true,
  };
  const wrapper = mount(<Tile {...props} />);

  wrapper.simulate('click');
  expect(props.handleClick.mock.calls.length).toBe(1);
});

it('should not call function on click when disabled', () => {
  const props = {
    row: 1,
    column: 'a',
    handleClick: jest.fn(),
    disabled: true,
  };
  const wrapper = mount(<Tile {...props} />);

  wrapper.simulate('click');
  expect(props.handleClick.mock.calls.length).toBe(0);
});
