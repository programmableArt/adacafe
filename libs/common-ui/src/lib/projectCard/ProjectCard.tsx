import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
  IconButton,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import Icon from '@mdi/react';
import { mdiDiscord } from '@mdi/js';
import WebIcon from '@mui/icons-material/Web';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { theme } from '../theme';

export interface ProjectCardProps {
  cardTitle: string;
  cardInfo: string;
}

const iconSize = '25px';

export function ProjectCard({ cardTitle, cardInfo }: ProjectCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '300px',
        minWidth: '250px',
      }}
    >
      <CardMedia
        component="img"
        image="https://softr-prod.imgix.net/applications/c41bb4c0-d32b-488a-98d6-0894823ab7ea/assets/b978501b-68be-49aa-8cb5-81db99b82c5e.png"
        alt="Groups Icon"
        sx={{
          height: '200px',
          objectFit: 'contain',
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant="h3">{cardTitle}</Typography>
          <Typography variant="body1">{cardInfo}</Typography>
        </CardContent>
        <Stack direction={'column'} spacing={1} padding={'16px'}>
          <Stack direction={'row'}>
            <IconButton>
              <Icon
                path={mdiDiscord}
                title="Discord"
                size={iconSize}
                color={theme.palette.primary.main}
              />
            </IconButton>
            <IconButton>
              <WebIcon
                sx={{
                  width: iconSize,
                  height: iconSize,
                  [theme.breakpoints.up('sm')]: {
                    width: '30px',
                    height: '30px',
                  },
                  color: 'primary.main',
                }}
              />
            </IconButton>
            <IconButton>
              <TwitterIcon
                sx={{
                  width: iconSize,
                  height: iconSize,
                  [theme.breakpoints.up('sm')]: {
                    width: '30px',
                    height: '30px',
                  },
                  color: 'primary.main',
                }}
              />
            </IconButton>
            <IconButton>
              <FacebookIcon
                sx={{
                  width: iconSize,
                  height: iconSize,
                  [theme.breakpoints.up('sm')]: {
                    width: '30px',
                    height: '30px',
                  },
                  color: 'primary.main',
                }}
              />
            </IconButton>
            <IconButton>
              <InstagramIcon
                sx={{
                  width: iconSize,
                  height: iconSize,
                  color: 'primary.main',
                  [theme.breakpoints.up('sm')]: {
                    width: '30px',
                    height: '30px',
                  },
                }}
              />
            </IconButton>
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'start'}
            alignItems={'center'}
            spacing={1}
          >
            <Typography variant="body1">Sponsored By: </Typography>
            <Chip
              avatar={
                <Avatar
                  alt="Fill Murray"
                  src="https://www.fillmurray.com/50/50"
                />
              }
              label="Fill Murray"
              variant="outlined"
            />
          </Stack>
        </Stack>
        <Stack direction={'row'} width={'100%'}>
          <Button
            sx={{
              width: 'auto',
            }}
          >
            Endorse
          </Button>
          <Box
            sx={{
              width: '80px',
              alignContent: 'center',
              backgroundColor: 'primary.light',
              border: '1px dotted black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" color={'common.white'}>
              14
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

export default ProjectCard;
