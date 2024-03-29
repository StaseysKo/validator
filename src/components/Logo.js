import PropTypes from 'prop-types';
import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  isSimple: PropTypes.bool,
  onDark: PropTypes.bool,
  sx: PropTypes.object,
};

function Logo({ onDark = false, isSimple = false, sx }) {
  const theme = useTheme();

  return (
    <NextLink href="/" passHref>
      <Box
        sx={{
          width: isSimple ? 74 : 140,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {isSimple ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%"
            height="100%"
            viewBox="0 0 70 50"
          >
          <g>
            <polygon className="logoStyle-f" points="14.7,0 14.7,4.3 20.1,4.3 20.1,19.9 6.4,27.8 3.8,23.2 0,25.3 4.8,33.7 4.8,33.7 4.8,33.7 24.4,22.4 
                24.4,22.4 24.4,22.4 24.4,4.3 24.4,4.3 24.4,0 	"/>
            <polygon className="logoStyle-s" points="38.4,0 38.4,4.3 33.1,4.3 33.1,19.9 46.7,27.8 49.4,23.2 53.1,25.3 48.3,33.7 48.3,33.7 48.3,33.7 
                28.8,22.4 28.8,22.4 28.7,22.4 28.7,4.3 28.7,4.3 28.7,0 	"/>
            <polygon className="logoStyle-f" points="41.1,45.8 37.3,43.6 40,39 26.5,31.2 12.9,39 15.5,43.6 11.8,45.8 7,37.4 7,37.4 7,37.4 26.6,26.2 
                26.6,26.2 26.6,26.2 42.2,35.3 42.2,35.3 45.9,37.4 	"/>
          </g>  
          </svg>
        ) : (
<svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%"
            height="100%"
            viewBox="0 0 130 80"
          >
<g>
  <g>
    <path className="logoStyle-f" d="M5.9,64.8c-0.1,0-0.2,0-0.3-0.1s-0.1-0.2-0.1-0.3v-2.6C5.4,61.8,5.2,61.9,5,62c-0.2,0.1-0.4,0.1-0.6,0.2
      c-0.2,0-0.4,0-0.7,0c-1.3,0-2.2-0.3-2.8-1C0.3,60.6,0,59.5,0,58.1v-3.1c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h2.8
      c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3V58c0,0.4,0.1,0.6,0.2,0.7c0.2,0.2,0.4,0.2,0.7,0.2c0.1,0,0.2,0,0.3,0
      c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.2-0.1c0.1,0,0.1-0.1,0.1-0.2v-3.5c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h2.8
      c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v9.3c0,0.1,0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1H5.9z"/>
    <path className="logoStyle-f" d="M11.2,64.8c-0.1,0-0.2,0-0.3-0.1s-0.1-0.2-0.1-0.3v-9.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1H14
      c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v4.4l3-4.4c0.1-0.1,0.2-0.2,0.2-0.2c0.1,0,0.2-0.1,0.4-0.1h2.5c0.1,0,0.2,0,0.3,0.1
      c0.1,0.1,0.1,0.2,0.1,0.3v9.3c0,0.1,0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1h-2.8c-0.1,0-0.2,0-0.3-0.1s-0.1-0.2-0.1-0.3v-4l-3,4.1
      c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.4,0.1H11.2z"/>
    <path className="logoStyle-f" d="M27.1,64.9c-0.9,0-1.7-0.1-2.4-0.4c-0.7-0.3-1.3-0.7-1.7-1.3c-0.4-0.6-0.6-1.3-0.7-2.2c0-0.4,0-0.8,0-1.3
      c0-0.4,0-0.9,0-1.3c0-0.9,0.3-1.6,0.7-2.2c0.4-0.6,1-1,1.7-1.3c0.7-0.3,1.5-0.4,2.4-0.4c0.6,0,1.2,0.1,1.8,0.2
      c0.6,0.2,1.1,0.4,1.5,0.7c0.5,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.4,1,0.4,1.7c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1h-2.9
      c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.3-0.2-0.5-0.4-0.6s-0.4-0.2-0.6-0.2c-0.3,0-0.5,0.1-0.7,0.2
      c-0.2,0.2-0.3,0.5-0.3,0.9c0,0.8,0,1.6,0,2.4c0,0.4,0.1,0.7,0.3,0.9c0.2,0.2,0.4,0.2,0.7,0.2c0.2,0,0.5,0,0.7-0.2
      c0.2-0.1,0.3-0.3,0.4-0.6c0-0.2,0.1-0.3,0.2-0.3c0.1,0,0.2-0.1,0.4-0.1h2.9c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2
      c0,0.7-0.2,1.2-0.4,1.7c-0.3,0.5-0.6,0.9-1.1,1.1c-0.5,0.3-1,0.5-1.5,0.7C28.3,64.8,27.7,64.9,27.1,64.9z"/>
    <path className="logoStyle-f" d="M35.7,64.8c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3v-6.6h-2.4c-0.1,0-0.2,0-0.3-0.1
      c-0.1-0.1-0.1-0.2-0.1-0.3v-2.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h8.4c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3
      v2.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1h-2.4v6.6c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1H35.7z"/>
    <path className="logoStyle-f" d="M47.3,64.9c-0.9,0-1.8-0.2-2.5-0.4c-0.7-0.3-1.3-0.7-1.7-1.3c-0.4-0.6-0.6-1.3-0.7-2.2c0-0.4,0-0.8,0-1.3
      c0-0.4,0-0.9,0-1.3c0-0.8,0.3-1.6,0.7-2.2s0.9-1,1.7-1.3c0.7-0.3,1.5-0.5,2.5-0.5c0.9,0,1.8,0.2,2.5,0.5c0.7,0.3,1.3,0.7,1.7,1.3
      c0.4,0.6,0.6,1.3,0.7,2.2c0,0.4,0,0.8,0,1.3c0,0.5,0,0.9,0,1.3c0,0.9-0.3,1.6-0.7,2.2c-0.4,0.6-1,1-1.7,1.3
      C49.1,64.8,48.2,64.9,47.3,64.9z M47.3,62.1c0.3,0,0.6-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.9c0-0.4,0-0.8,0-1.2c0-0.4,0-0.8,0-1.2
      c0-0.3-0.1-0.5-0.2-0.7c-0.1-0.2-0.2-0.3-0.4-0.4s-0.4-0.1-0.5-0.1s-0.4,0-0.5,0.1s-0.3,0.2-0.4,0.4c-0.1,0.2-0.2,0.4-0.2,0.7
      c0,0.4,0,0.8,0,1.2c0,0.4,0,0.8,0,1.2s0.1,0.7,0.3,0.9C46.7,62,47,62.1,47.3,62.1z"/>
    <path className="logoStyle-f" d="M53.8,64.8c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3v-9.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1
      h6.7c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v2.2c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1H57v6.7c0,0.1,0,0.2-0.1,0.3
      c-0.1,0.1-0.2,0.1-0.3,0.1H53.8z"/>
    <path className="logoStyle-f" d="M62.4,64.8c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3v-9.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1
      h4.4c0.9,0,1.6,0.1,2.3,0.4c0.6,0.3,1.1,0.6,1.5,1.2c0.4,0.5,0.5,1.2,0.5,2c0,0.8-0.2,1.5-0.5,2c-0.4,0.5-0.9,0.9-1.5,1.1
      c-0.6,0.2-1.4,0.4-2.3,0.4h-1v2.7c0,0.1,0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1H62.4z M65.7,58.9h1c0.2,0,0.3-0.1,0.4-0.2
      c0.2-0.1,0.2-0.3,0.2-0.6c0-0.2,0-0.4-0.1-0.5s-0.3-0.3-0.5-0.3h-1V58.9z"/>
    <path className="logoStyle-f" d="M71.7,64.8c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1,0-0.1l3.2-9.2c0-0.1,0.1-0.2,0.2-0.3
      s0.2-0.2,0.4-0.2h3.1c0.2,0,0.4,0,0.4,0.2c0.1,0.1,0.2,0.2,0.2,0.3l3.2,9.2c0,0,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.2
      c-0.1,0.1-0.1,0.1-0.2,0.1h-2.7c-0.2,0-0.3,0-0.4-0.1s-0.1-0.2-0.2-0.2l-0.4-0.9h-3.1l-0.4,0.9c0,0.1-0.1,0.2-0.2,0.2
      c-0.1,0.1-0.2,0.1-0.4,0.1H71.7z M76,60.6h1.6L76.8,58L76,60.6z"/>
    <path className="logoStyle-f" d="M83.1,66.8c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3V62c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1
      h0.2c0.2,0,0.4-0.1,0.5-0.4c0.2-0.2,0.2-0.5,0.3-0.9c0.1-0.4,0.1-0.8,0.2-1.2c0-0.4,0-0.9,0-1.3v-2.7c0-0.1,0-0.2,0.1-0.3
      c0.1-0.1,0.2-0.1,0.3-0.1h7.7c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v6.5h0.6c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3
      v4.4c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1h-2.8c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3v-1.6h-4v1.6
      c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1H83.1z M87.4,61.6h1.9v-3.7h-1.5v0.4c0,0.7,0,1.3-0.1,1.9
      C87.7,60.7,87.6,61.2,87.4,61.6z"/>
    <path className="logoStyle-s" d="M98.3,64.8c-0.1,0-0.2,0-0.3-0.1s-0.1-0.2-0.1-0.3v-9.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h8.8
      c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v9.3c0,0.1,0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1h-2.8c-0.1,0-0.2,0-0.3-0.1
      s-0.1-0.2-0.1-0.3v-6.5h-2.3v6.5c0,0.1,0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1H98.3z"/>
    <path className="logoStyle-s" d="M109.4,64.8c-0.1,0-0.2,0-0.3-0.1s-0.1-0.2-0.1-0.3v-9.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h2.3
      c0.2,0,0.4,0,0.4,0.2c0.1,0.1,0.2,0.2,0.2,0.2l2.1,3.5l2.1-3.5c0,0,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.4-0.2h2.3
      c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v9.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1h-2.6c-0.1,0-0.2,0-0.3-0.1
      s-0.1-0.2-0.1-0.3v-3.9l-0.9,1.6c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.4,0.1h-1c-0.2,0-0.3,0-0.4-0.1s-0.2-0.2-0.2-0.2
      l-0.9-1.6v3.9c0,0.1,0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1H109.4z"/>
    <path className="logoStyle-s" d="M121.7,64.8c-0.1,0-0.2,0-0.3-0.1s-0.1-0.2-0.1-0.3v-9.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h2.8
      c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v3h0.2l1.8-3.1c0-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.2-0.1,0.4-0.1h3.2
      c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2c0,0,0,0.1,0,0.2l-2.6,4.4l2.8,4.8c0,0,0,0.1,0,0.2s0,0.2-0.1,0.2
      c-0.1,0.1-0.1,0.1-0.2,0.1h-3.3c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.2-0.2-0.2l-1.8-3.2h-0.4v3.1c0,0.1,0,0.2-0.1,0.3
      c-0.1,0.1-0.2,0.1-0.3,0.1L121.7,64.8L121.7,64.8z"/>
  </g>
</g>
<g>
  <polygon className="logoStyle-f" points="53.9,0 53.9,4.3 59.2,4.3 59.2,19.7 45.7,27.4 43.1,22.9 39.3,25 44.1,33.3 44.1,33.3 44.1,33.3 
    63.5,22.1 63.5,22.1 63.5,22.1 63.5,4.3 63.5,4.3 63.5,0  "/>
  <polygon className="logoStyle-s" points="77.3,0 77.3,4.3 72,4.3 72,19.7 85.5,27.4 88.1,22.9 91.8,25 87.1,33.3 87.1,33.3 87.1,33.3 
    67.7,22.1 67.7,22.1 67.7,22.1 67.7,4.3 67.7,4.3 67.7,0  "/>
  <polygon className="logoStyle-f" points="79.9,45.2 76.3,43.1 78.9,38.5 65.6,30.8 52.1,38.5 54.7,43.1 51,45.2 46.2,37 46.2,37 46.2,37 
    65.6,25.9 65.6,25.9 65.6,25.9 81,34.8 81,34.8 84.7,37   "/>
</g> 
          </svg>
        )}
      </Box>
    </NextLink>
  );
}

export default memo(Logo);
