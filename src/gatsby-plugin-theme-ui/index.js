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
      32,
      64,
      128,
      256,
      512
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
        fontSize: [5, 6]
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
      cardCompact: {
        padding: 4,
        bg: 'background',
        display: 'flex',
        flexWrap: "wrap",
        marginTop: 3,
        marginBottom: 3,
        flex: ['0 1 100%', '0 1 48%'],
        maxWidth: ['100%', '48%'],
        '&:hover' : {
          cursor: 'pointer'
        }
      },
      cardLink: {
        textDecoration: 'none',
        color: 'primary'
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
    }
}
