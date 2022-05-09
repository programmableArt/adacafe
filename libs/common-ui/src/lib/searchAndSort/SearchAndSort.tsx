import {
  Grid,
  TextField,
  Stack,
  debounce,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  Divider,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

export type SearchAndSortProps = {
  searchByCallback: (searchBy: string) => void;
  filterByCallback: (filterBy: number) => void;
  sortCallback: (sort: SortBy) => void;
};

export enum SortBy {
  Trusted = 'tusted',
  Name = 'name',
}
export enum FilterBy {
  NoFilter,
  Youtube,
  NFT,
  Services,
}

export function SearchAndSort({
  searchByCallback,
  sortCallback,
  filterByCallback,
}: SearchAndSortProps) {
  const [searchBy, setSearchBy] = useState('');
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.NoFilter);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.Trusted);

  useEffect(() => {
    searchByCallback(searchBy);
  }, [searchBy, searchByCallback]);

  useEffect(() => {
    sortCallback(sortBy);
  }, [sortBy, sortCallback]);

  useEffect(() => {
    filterByCallback(filterBy);
  }, [filterBy, filterByCallback]);

  const updateSearchHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchBy(event.target.value);

  const updateSearchHandlerDebounceWrapper = debounce(updateSearchHandler, 300);

  return (
    <Box
      sx={{
        padding: 2,
        minWidth: '250px',
      }}
    >
      <Grid container spacing={3} justifyContent={'end'}>
        <Grid item xs={'auto'}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            onChange={updateSearchHandlerDebounceWrapper}
          />
        </Grid>
        <Grid item xs={'auto'}>
          <Stack direction={'row'} spacing={2}>
            <FormControl
              variant="standard"
              sx={{
                width: '100px',
              }}
            >
              <InputLabel id="filter-by-label">Filter By</InputLabel>
              <Select
                labelId="filter-by-label"
                id="filter-by-select"
                label="Filter By"
                value={filterBy}
                onChange={(event: SelectChangeEvent<FilterBy>) => {
                  switch (event.target.value) {
                    case FilterBy.NoFilter:
                      setFilterBy(FilterBy.NoFilter);
                      break;
                    case FilterBy.NFT:
                      setFilterBy(FilterBy.NFT);
                      break;
                    case FilterBy.Services:
                      setFilterBy(FilterBy.Services);
                      break;
                    case FilterBy.Youtube:
                      setFilterBy(FilterBy.Youtube);
                      break;
                    default:
                      return;
                  }
                }}
              >
                <MenuItem value={FilterBy.NoFilter}>No Filter</MenuItem>
                <MenuItem value={FilterBy.NFT}>NFT</MenuItem>
                <MenuItem value={FilterBy.Services}>Services</MenuItem>
                <MenuItem value={FilterBy.Youtube}>Youtube</MenuItem>
              </Select>
            </FormControl>
            <Divider orientation="vertical" flexItem />
            <FormControl
              variant="standard"
              sx={{
                width: '100px',
              }}
            >
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
                    case SortBy.Name:
                      setSortBy(SortBy.Name);
                      break;
                    default:
                      return;
                  }
                }}
              >
                <MenuItem value={SortBy.Trusted}>Trusted</MenuItem>
                <MenuItem value={SortBy.Name}>Name</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchAndSort;
