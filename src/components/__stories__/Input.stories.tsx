import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../Input';
import { InputProps } from '../Input.types';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  message: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};
