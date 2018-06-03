import Header, { Props } from '@src/components/Header';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

const mockProps: Props = {
  height: 50
};

const renderComponent = (optionalProps?: Partial<Props>) => {
  return shallow(<Header {...mockProps} {...optionalProps} />);
};

describe('Header', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = renderComponent().dive();
  });

  describe('Outer Div', () => {
    let outerDiv: ShallowWrapper;

    beforeEach(() => {
      outerDiv = wrapper.find('div').at(0);
    });

    it('renders correctly', () => {
      expect(outerDiv.exists()).toEqual(true);
    });

    it('has the correct className', () => {
      expect(outerDiv.prop('className')).toContain('root');
    });
  });

  describe('AppBar', () => {
    let appBar: ShallowWrapper;

    beforeEach(() => {
      appBar = wrapper.find('WithStyles(AppBar)');
    });

    it('renders correctly', () => {
      expect(appBar.exists()).toEqual(true);
    });

    it('has the correct position', () => {
      expect(appBar.prop('position')).toEqual('static');
    });

    it('has the correct color', () => {
      expect(appBar.prop('color')).toEqual('primary');
    });
  });

  describe('Toolbar', () => {
    let toolbar: ShallowWrapper;

    beforeEach(() => {
      toolbar = wrapper.find('WithStyles(Toolbar)');
    });

    it('renders correctly', () => {
      expect(toolbar.exists()).toEqual(true);
    });
  });

  describe('Typography', () => {
    let typography: ShallowWrapper;

    beforeEach(() => {
      console.log(wrapper.debug());
      typography = wrapper.find('WithStyles(Typography)');
    });

    it('renders correctly', () => {
      expect(typography.exists()).toEqual(true);
    });

    it('has the correct className', () => {
      expect(typography.prop('className')).toContain('flex');
    });

    it('has the correct color', () => {
      expect(typography.prop('color')).toEqual('inherit');
    });

    it('has the correct variant', () => {
      expect(typography.prop('variant')).toEqual('title');
    });

    it('has the correct children', () => {
      expect(typography.prop('children')).toEqual('Mitch Lindsay');
    });
  });
});
