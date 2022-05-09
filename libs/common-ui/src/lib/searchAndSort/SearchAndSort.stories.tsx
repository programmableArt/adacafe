import { Box, Alert, Paper } from '@mui/material';
import { Story, Meta } from '@storybook/react';
import { useCallback, useState } from 'react';
import SearchAndSort, { SearchAndSortProps } from './SearchAndSort';

export default {
  component: SearchAndSort,
  title: 'Search And Sort',
} as Meta;

const Template: Story<SearchAndSortProps> = (args) => {
  const [message, setMessage] = useState('');

  const searchByHandler = useCallback((searchBy) => {
    setMessage('search by: ' + searchBy);
  }, []);

  const sortByHandler = useCallback((sortBy) => {
    setMessage('sort by: ' + sortBy);
  }, []);

  const filterByHandler = useCallback((filterBy) => {
    setMessage('filter by: ' + filterBy);
  }, []);

  return (
    <Box>
      <Paper
        sx={{
          marginBottom: 2,
        }}
      >
        <SearchAndSort
          searchByCallback={searchByHandler}
          sortCallback={sortByHandler}
          filterByCallback={filterByHandler}
        />
      </Paper>
      <Alert severity="info" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Box>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
