import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { render, mount } from 'enzyme';
import { Button as MUIButton } from '@material-ui/core';

import Button from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = { handleClick: () => null }
  ReactDOM.render(
    <Button {...props}>
      children
    </Button>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot', () => {
  const props = { handleClick: () => null }
  const component = renderer.create(
    <Button {...props}>
      children
    </Button>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should contain mui button', () => {
  const props = { handleClick: () => null }
  const wrapper = mount(
    <Button {...props}>
      children
    </Button>
  );
  expect(wrapper.contains(MUIButton)).toEqual(true);
});

it('should call function on click', () => {
  const props = { handleClick: jest.fn() }
  const wrapper = mount(
    <Button {...props}>
      children
    </Button>
  );

  wrapper.find('button').simulate('click');
  expect(props.handleClick.mock.calls.length).toBe(1);
});

it('should call function on click when disabled', () => {
  const props = { handleClick: jest.fn(), disabled: true }
  const wrapper = mount(
    <Button {...props}>
      children
    </Button>
  );

  wrapper.find('button').simulate('click');
  expect(props.handleClick.mock.calls.length).toBe(0);
});
