// src/gatsby-plugin-theme-ui/index.js
export default {
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#011936',
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
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)'
      },
      fonts: {
        body: 'Lato, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'Lato, san-serif',
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
        heading: 700,
        bold: 700
      },
      text: {
        title: {
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
      }
  }