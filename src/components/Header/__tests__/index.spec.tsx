import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import Header, { Props } from '@src/components/Header';
import constants from '@src/constants';
import { shallow, ShallowWrapper } from 'enzyme';
import { Account, Email, GithubCircle, LinkedinBox } from 'mdi-material-ui';
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
      expect(outerDiv.prop('className')).toContain('outerContainer');
    });
  });

  describe('AppBar', () => {
    let appBar: ShallowWrapper;

    beforeEach(() => {
      appBar = wrapper.find(AppBar);
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
      toolbar = wrapper.find(Toolbar);
    });

    it('renders correctly', () => {
      expect(toolbar.exists()).toEqual(true);
    });
  });

  describe('Account Icon', () => {
    let accountIcon: ShallowWrapper;

    beforeEach(() => {
      accountIcon = wrapper.find(Account);
    });

    it('renders correctly', () => {
      expect(accountIcon.exists()).toEqual(true);
    });

    it('has the correct className', () => {
      expect(accountIcon.prop('className')).toContain('titleIcon');
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

    it('has the correct className', () => {
      expect(typography.prop('className')).toContain('title');
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

  describe('Email Icon Button', () => {
    describe('Icon Button', () => {
      let iconButton: ShallowWrapper;

      beforeEach(() => {
        iconButton = wrapper.find(IconButton).at(0);
      });

      it('renders correctly', () => {
        expect(iconButton.exists()).toEqual(true);
      });

      it('has the correct color', () => {
        expect(iconButton.prop('color')).toEqual('inherit');
      });

      it('has the correct href', () => {
        expect(iconButton.prop('href')).toEqual(
          `mailto:${constants.contactEmail}`
        );
      });
    });

    describe('Email Icon', () => {
      let emailIcon: ShallowWrapper;

      beforeEach(() => {
        emailIcon = wrapper.find(Email);
      });

      it('renders correctly', () => {
        expect(emailIcon.exists()).toEqual(true);
      });
    });
  });

  describe('GithubCircle Icon Button', () => {
    describe('Icon Button', () => {
      let iconButton: ShallowWrapper;

      beforeEach(() => {
        iconButton = wrapper.find(IconButton).at(1);
      });

      it('renders correctly', () => {
        expect(iconButton.exists()).toEqual(true);
      });

      it('has the correct color', () => {
        expect(iconButton.prop('color')).toEqual('inherit');
      });

      it('has the correct href', () => {
        expect(iconButton.prop('href')).toEqual(constants.githubUrl);
      });
    });

    describe('GithubCircle Icon', () => {
      let githubCircleIcon: ShallowWrapper;

      beforeEach(() => {
        githubCircleIcon = wrapper.find(GithubCircle);
      });

      it('renders correctly', () => {
        expect(githubCircleIcon.exists()).toEqual(true);
      });
    });
  });

  describe('LinkedinBox Icon Button', () => {
    describe('Icon Button', () => {
      let iconButton: ShallowWrapper;

      beforeEach(() => {
        iconButton = wrapper.find(IconButton).at(2);
      });

      it('renders correctly', () => {
        expect(iconButton.exists()).toEqual(true);
      });

      it('has the correct color', () => {
        expect(iconButton.prop('color')).toEqual('inherit');
      });

      it('has the correct href', () => {
        expect(iconButton.prop('href')).toEqual(constants.linkedinUrl);
      });
    });

    describe('LinkedinBox Icon', () => {
      let linkedinBoxIcon: ShallowWrapper;

      beforeEach(() => {
        linkedinBoxIcon = wrapper.find(LinkedinBox);
      });

      it('renders correctly', () => {
        expect(linkedinBoxIcon.exists()).toEqual(true);
      });
    });
  });
});
