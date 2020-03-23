import { mount } from 'enzyme';
import React from 'react';
import MOCK_VIP from '../../../../data/vip.json';
import { MockStoreProvider } from '../../../store/test';
import Vip from './Vip';

describe('Vip renders correctly', () => {
  it('should render correctly', () => {
    const Component = (
      <MockStoreProvider
        getState={() => ({ vipSlice: { vip: MOCK_VIP as any, loading: false, error: null } })}
      >
        <Vip />
      </MockStoreProvider>
    );
    const mounted = mount(Component);

    expect(mounted).toMatchSnapshot();
  });
});
