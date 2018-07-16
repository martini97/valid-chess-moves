import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { render, mount } from 'enzyme';

import Knight from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Knight />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot', () => {
  const component = renderer.create(<Knight />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
