import { Typography } from '@material-ui/core';
import Footer from '@src/components/Footer';
import { currentYear } from '@src/lib/utils';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

const renderComponent = () => {
  return shallow(<Footer />);
};

describe('Footer', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = renderComponent().dive();
  });

  describe('Container', () => {
    let container: ShallowWrapper;

    beforeEach(() => {
      container = wrapper.find('div').at(0);
    });

    it('renders correctly', () => {
      expect(container.exists()).toEqual(true);
    });

    it('has the correct className', () => {
      expect(container.prop('className')).toContain('container');
    });
  });

  describe('Typography', () => {
    let typography: ShallowWrapper;

    beforeEach(() => {
      typography = wrapper.find(Typography);
    });

    it('renders correctly', () => {
      expect(typography.exists()).toEqual(true);
    });

    it('has the correct color', () => {
      expect(typography.prop('color')).toEqual('inherit');
    });

    it('has the correct variant', () => {
      expect(typography.prop('variant')).toEqual('body1');
    });

    it('has the correct children', () => {
      const year = currentYear();
      expect(typography.prop('children')).toEqual([
        '© ',
        year,
        ' Mitch Lindsay'
      ]);
    });
  });
});
