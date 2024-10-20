export default {
  tree: {
    base: {
      listStyle: 'none',
      backgroundColor: 'rgb(236, 236, 236)',
      margin: 0,
      padding: 0,
      paddingRight: '16px',
      color: 'black',
      fontFamily:
        'Apple-System,Arial,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,STXihei,sans-serif',
      fontSize: '0.9em',
      // border: "2px solid deeppink",
      // overflow: "scroll",
      minWidth: 'fit-content',
      // width: "432px",
      // padding: "16px",
    },
    node: {
      base: {
        position: 'relative',
        whiteSpace: 'pre',
      },
      link: {
        cursor: 'pointer',
        position: 'relative',
        padding: '0px 5px',
        display: 'block',
      },
      activeLink: {
        backgroundColor: '#FFFDD0',

        // width: "100%",
        // maxWidth: "448px"
      },
      toggle: {
        base: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'top',
          marginLeft: '-5px',
          height: '18px',
          width: '24px',
        },
        wrapper: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '-8px 0 0 1px',
          height: '14px',
        },
        height: 6,
        width: 6,
        arrow: {
          fill: 'black',
          strokeWidth: 0,
        },
      },
      header: {
        base: {
          display: 'inline-block',
          verticalAlign: 'top',
          color: 'black',
          whiteSpace: 'pre',
          padding: '4px 0',
        },
        connector: {
          width: '2px',
          height: '12px',
          borderLeft: 'solid 2px black',
          borderBottom: 'solid 2px black',
          position: 'absolute',
          top: '0px',

          left: '-21px',
        },
        title: {
          lineHeight: '24px',
          verticalAlign: 'middle',
        },
      },
      subtree: {
        listStyle: 'none',
        paddingLeft: '19px',
      },
      loading: {
        color: '#E2C089',
      },
    },
  },
};
