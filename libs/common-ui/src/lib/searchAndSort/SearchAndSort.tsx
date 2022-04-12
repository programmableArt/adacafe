import {
  Paper,
  Grid,
  TextField,
  Stack,
  Typography,
  Chip,
  debounce,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

export type SearchAndSortProps = {
  filterByCallback: (filterBy: string) => void;
  sortCallback: (sort: SortBy) => void;
};

export enum SortBy {
  Trusted,
  RugPull,
  Alphabetical,
}

export function SearchAndSort({
  filterByCallback,
  sortCallback,
}: SearchAndSortProps) {
  const [filterBy, setFilterBy] = useState('');
  const [sortBy, setSortBy] = useState(SortBy.Trusted);

  useEffect(() => {
    filterByCallback(filterBy);
  }, [filterBy, filterByCallback]);

  useEffect(() => {
    sortCallback(sortBy);
  }, [sortBy, sortCallback]);

  const updateFilterHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setFilterBy(event.target.value);

  const updateFilterHandlerDebounceWrapper = debounce(updateFilterHandler, 300);

  return (
    <Paper
      sx={{
        padding: 2,
        minWidth: '250px',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={'auto'}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            onChange={updateFilterHandlerDebounceWrapper}
          />
        </Grid>
        <Grid item xs={'auto'}>
          <Stack
            direction={'row'}
            spacing={1}
            justifyContent={'start'}
            alignItems={'center'}
            flexWrap={'wrap'}
            height={'100%'}
          >
            <Typography variant="body1">Sort By: </Typography>
            <Stack direction={'row'} spacing={1}>
              <Chip
                label="Trusted"
                variant={sortBy === SortBy.Trusted ? 'filled' : 'outlined'}
                color={sortBy === SortBy.Trusted ? 'primary' : 'default'}
                clickable={true}
                onClick={() => setSortBy(SortBy.Trusted)}
              />
              <Chip
                label="Rug Pull"
                variant={sortBy === SortBy.RugPull ? 'filled' : 'outlined'}
                color={sortBy === SortBy.RugPull ? 'primary' : 'default'}
                clickable={true}
                onClick={() => setSortBy(SortBy.RugPull)}
              />
              <Chip
                label="abc"
                variant={sortBy === SortBy.Alphabetical ? 'filled' : 'outlined'}
                color={sortBy === SortBy.Alphabetical ? 'primary' : 'default'}
                clickable={true}
                onClick={() => setSortBy(SortBy.Alphabetical)}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SearchAndSort;
