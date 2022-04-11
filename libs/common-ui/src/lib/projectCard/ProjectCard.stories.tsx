import { Story, Meta } from '@storybook/react';
import { ProjectCard, ProjectCardProps } from './ProjectCard';

export default {
  component: ProjectCard,
  title: 'Project Card',
} as Meta;

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardTitle: 'ADA Cafe',
  cardInfo:
    'Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals.',
};
