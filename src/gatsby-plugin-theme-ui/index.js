// src/gatsby-plugin-theme-ui/index.js
export default {
  colors: {
    black: '#000',
    yellow: '#fce21b',
    white: '#fff',
    lightGray: '#bdbdbd',
    gray: '#676767',
    darkGreay: '#333',
    text: '#000',
    background: '#fff',
    primary: '#000',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      },
    },
  },
  space: [
      0,
      4,
      8,
      16,
      24,
      32,
      64,
      80,
      100
    ],
    breakpoints: [
      '950px'
    ],
    shadows: {
      small: '2px 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.08)',
      large: '4px 20px 30px -6px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.08)',
    },
    fonts: {
      body: 'Apercu, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'Tiempos Headline, serif',
      monospace: 'Menlo, monospace'
    },
    fontSizes: [
      12,
      14,
      16,
      20,
      24,
      32,
      48,
      64,
      96
    ],
    fontWeights: {
      body: 400,
      heading: 600,
      bold: 700
    },
    text: {
      title: {
        fontFamily: 'heading',
        fontSize: [7, 8]
      },
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: [5, 6]
      },
      subheading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: [4, 5]
      }
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125
    },
    styles: {
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body'
      },
      h1: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: [5, 6]
      },
      h2: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 'subheading'
      },
      h3: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 3
      },
      h4: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 2
      },
      h5: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 1
      },
      h6: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 0
      },
      p: {
        color: 'text',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
        margin: 4
      },
      a: {
        color: 'primary',
        textDecoration: 'none',
        '&:visited': {
          color: 'primary'
        }
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit'
        }
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit'
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0
      },
      th: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
      },
      td: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
      },
      img: {
        maxWidth: '100%'
      }
    },
  variants: {
    card: {
      border: '1px solid #333',
      backgroundColor: 'transparent',
      display: 'grid',
      gridRowGap: '16px',
      gridTemplateColumns: '1fr 24px',
      gridTemplateRows: 'max-content 1fr max-content',
      padding: 4,
      transition: 'background-color 150ms ease-in-out',
      '&:hover': {
        bg: 'yellow',
        cursor: 'pointer'
      }
    },
    cardLink: {
      textDecoration: 'none',
      color: 'primary'
    },
    linkButton: {
      alignItems: 'center',
      bg: 'yellow',
      color: 'black',
      display: 'inline-grid',
      gridTemplateColumns: 'max-content 1rem',
      gridColumnGap: '.5rem',
      padding: '0.875rem 1.275rem',
      textDecoration: 'none',
      '&:hover': {
        bg: 'black',
        color: 'white',
        cursor: 'pointer'
      }
    },
    navContainer: {
      borderBottom: '1px solid #333'
    },
    navLink: {
      color: 'text',
      textDecoration: 'none',
      fontSize: 2,
      mr: 3,
      '&:hover' : {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    },
    tag: {
      backgroundColor: 'rgba(0,0,0,0.75)',
      color: 'white',
      borderRadius: '20px',
      fontSize: 0,
      padding: '4px 8px'
    }
  }
}
