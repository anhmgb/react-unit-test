import React from 'react';

import { AButton } from '../components/atoms';

export default {
  title: 'Atoms/Button',
  component: AButton,
  argTypes: {
    type: {
      options: ['primary', 'default', 'ghost', 'dashed', 'link', 'text'],
      control: 'select',
    },
    size: {
      options: ['small', 'middle', 'large'],
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <AButton {...args}>Button</AButton>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
