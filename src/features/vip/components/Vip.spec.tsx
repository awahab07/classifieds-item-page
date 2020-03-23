import { mount } from 'enzyme';
import 'jest';
import React from 'react';
import { StaticRouter } from 'react-router';
import MOCK_VIP from '../../../../data/vip.json';
import { MockStoreProvider } from '../../../store/test';
import Vip from './Vip';

declare const global: any;

global.window = Object.create(window);
const url = 'http://test.com/category/product';
Object.defineProperty(window, 'location', {
  value: {
    href: url
  }
});

describe('Vip renders correctly', () => {
  it('should render correctly', () => {
    const Component = (
      <MockStoreProvider
        getState={() => ({ vipSlice: { vip: MOCK_VIP as any, loading: false, error: null } })}
      >
        <StaticRouter>
          <Vip />
        </StaticRouter>
      </MockStoreProvider>
    );
    const mounted = mount(Component);

    expect(mounted).toMatchSnapshot();
  });
});
