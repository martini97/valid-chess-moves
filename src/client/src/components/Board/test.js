import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { render, mount } from 'enzyme';

import Tile from '../Tile';
import Knight from '../Knight';

import Board from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = { handleTileClick: () => null };

  ReactDOM.render(<Board {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot', () => {
  const props = {
    handleTileClick: () => null,
  };

  let component = renderer.create(<Board {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props.allPossible = ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'];
  component = renderer.create(<Board {...props} />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props.selected = 'd4';
  component = renderer.create(<Board {...props} />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props.allPossible = [];
  component = renderer.create(<Board {...props} />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should contain 64 Tiles', () => {
  const props = {
    handleTileClick: () => null,
  };

  const wrapper = mount(<Board {...props} />);
  expect(wrapper.find(Tile).length).toEqual(64);
});

it('should contain Knight when selected', () => {
  const props = {
    selected: 'a1',
    handleTileClick: () => null,
  };

  const wrapper = mount(<Board {...props} />);
  expect(wrapper.find({ row: 1, column: 'a' }).contains(Knight)).toEqual(true);
});

it('should highlight tile when possible', () => {
  const props = {
    allPossible: ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
    handleTileClick: () => null,
  };

  const wrapper = mount(<Board {...props} />);
  expect(wrapper.find(Tile).find({ possible: true }).length / 2).toEqual(8);
});

it('should call tile finction with right params', () => {
  const props = {
    handleTileClick: jest.fn(),
  };

  const wrapper = mount(<Board {...props} />);
  wrapper.find({ row: 4, column: 'd' }).find(Tile).simulate('click');
  expect(props.handleTileClick.mock.calls[0][0]).toBe('d4');
});

it('should not call tile finction when disabled', () => {
  const props = {
    handleTileClick: jest.fn(),
    tileDisabled: true,
  };

  const wrapper = mount(<Board {...props} />);
  wrapper.find({ row: 4, column: 'd' }).find(Tile).simulate('click');
  expect(props.handleTileClick.mock.calls.length).toBe(0);
});
