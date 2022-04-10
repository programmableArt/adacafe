import { Story, Meta } from '@storybook/react';
import { ProjectCard, ProjectCardProps } from './ProjectCard';

export default {
  component: ProjectCard,
  title: 'Project Card',
} as Meta;

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
