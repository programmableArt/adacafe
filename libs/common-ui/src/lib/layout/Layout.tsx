import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ReactChild, ReactChildren } from 'react';

const StyledPage = styled.div`
  .page {
  }
`;

type LayoutProps = {
  connected: boolean;
  connectCallback: (value: boolean) => void;
  children: ReactChildren | ReactChild;
};

export function Layout({ connected, connectCallback, children }: LayoutProps) {
  return (
    <StyledPage>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ADA Cafe
          </Typography>
          <Button
            color="inherit"
            variant={connected ? 'text' : 'outlined'}
            onClick={() => connectCallback(!connected)}
          >
            {connected ? 'Connected' : 'Connect Wallet'}
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </StyledPage>
  );
}

export default Layout;
