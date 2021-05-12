/* eslint-disable react/prop-types */
import React from 'react';
import { styled, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  compose, spacing, palette, display, typography,
} from '@material-ui/system';
import Crackman from './fonts/crackman.ttf';


const crackman = {
  fontFamily: 'Crackman',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    url(${Crackman})
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Crackman',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [crackman],
      },
    },
  },
});

const Title = styled('h1')(compose(spacing, palette, typography));
const Name = styled('h2')(compose(spacing, palette, typography));
const Box = styled('div')(compose(spacing, palette, display));

const Headline = ({ User }) => {
  const userName = User.map((userId) => (
    <div key={userId.id}>
      {userId.username}
      &apos;s Calendar
    </div>
  ));
  return (
    <div>
      <Box display="flex">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Title mx="auto" mb={0} alignitems="center" justifycontent="center" color="yellow">Gaming with Friends</Title>
        </ThemeProvider>
      </Box>
      <Box display="flex">
        <Name mx="auto" mt={0} alignitems="center" justifycontent="center" color="black">
          {userName}
        </Name>
      </Box>
    </div>
  );
};

export default Headline;
