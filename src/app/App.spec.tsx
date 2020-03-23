import { mount } from 'enzyme';
import React from 'react';
import { MockStoreProvider } from '../store/test';
import App from './App';

describe('App renders correctly', () => {
  it('should render correctly', () => {
    const Component = (
      <MockStoreProvider>
        <App />
      </MockStoreProvider>
    );
    const component = mount(Component);

    expect(component).toMatchSnapshot();
  });
});
