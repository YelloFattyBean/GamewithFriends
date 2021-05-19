/* eslint-disable react/prop-types */
import React from 'react';
import { styled } from '@material-ui/core/styles';
import {
  compose, spacing, palette, display, typography,
} from '@material-ui/system';

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
        <Title mx="auto" mb={0} alignitems="center" justifycontent="center" color="purple" fontSize="7.5rem">Gaming with Friends</Title>
      </Box>
      <Box display="flex">
        <Name mx="auto" mt={0} alignitems="center" justifycontent="center" color="black" fontSize="2.5rem">
          {userName}
        </Name>
      </Box>
    </div>
  );
};

export default Headline;
