import {
  Paper,
  Grid,
  TextField,
  Stack,
  Typography,
  Chip,
  debounce,
  useMediaQuery,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { theme } from '../theme';

export type SearchAndSortProps = {
  filterByCallback: (filterBy: string) => void;
  sortCallback: (sort: SortBy) => void;
};

export enum SortBy {
  Trusted = 'tusted',
  RugPull = 'rug pull',
  Alphabetical = 'alphabetical',
}

export function SearchAndSort({
  filterByCallback,
  sortCallback,
}: SearchAndSortProps) {
  const [filterBy, setFilterBy] = useState('');
  const [sortBy, setSortBy] = useState(SortBy.Trusted);
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
          {!smallScreen && (
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
                  variant={
                    sortBy === SortBy.Alphabetical ? 'filled' : 'outlined'
                  }
                  color={sortBy === SortBy.Alphabetical ? 'primary' : 'default'}
                  clickable={true}
                  onClick={() => setSortBy(SortBy.Alphabetical)}
                />
              </Stack>
            </Stack>
          )}
          {smallScreen && (
            <FormControl fullWidth>
              <InputLabel id="sort-by-label">Sort By</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by-select"
                value={sortBy}
                label="Sort By"
                onChange={(event: SelectChangeEvent<SortBy>) => {
                  switch (event.target.value) {
                    case SortBy.Trusted:
                      setSortBy(SortBy.Trusted);
                      break;
                    case SortBy.RugPull:
                      setSortBy(SortBy.RugPull);
                      break;
                    case SortBy.Alphabetical:
                      setSortBy(SortBy.Alphabetical);
                      break;
                    default:
                      return;
                  }
                }}
              >
                <MenuItem value={SortBy.Trusted}>Trusted</MenuItem>
                <MenuItem value={SortBy.RugPull}>Rug Pull</MenuItem>
                <MenuItem value={SortBy.Alphabetical}>abc</MenuItem>
              </Select>
            </FormControl>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SearchAndSort;
