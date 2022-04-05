import { Story, Meta } from '@storybook/react';
import { CommonUi, CommonUiProps } from './common-ui';

export default {
  component: CommonUi,
  title: 'CommonUi',
} as Meta;

const Template: Story<CommonUiProps> = (args) => <CommonUi {...args} />;

export const Primary = Template.bind({});
export const Secodary = Template.bind({});
Primary.args = {};
