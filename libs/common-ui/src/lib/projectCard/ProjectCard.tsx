import styled from '@emotion/styled';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

/* eslint-disable-next-line */
export interface ProjectCardProps {
  cardTitle: string;
  cardInfo: string;
}

export function ProjectCard({ cardTitle, cardInfo }: ProjectCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2">{cardTitle}</Typography>
        <Typography>{cardInfo}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
