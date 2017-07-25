const defaultOptions = {
  boldMessage: true,
  error: false,
  color: null,
  backgroundColor: 'white',
  colorTrans: 1,
};

export default ({ message = null, data = null, config = {} }) => {
  const randomizeColor = () => Math.floor(Math.random() * 255);
  const options = { ...defaultOptions, ...config };
  const color = options.color ?
  options.color :
  `rgba(${randomizeColor()}, ${randomizeColor()}, ${randomizeColor()}, ${options.colorTrans})`;
  console.log(`%c${message} `,
              `color: ${color};
               background-color: ${options.backgroundColor};
               font-weight: ${options.boldMessage ? 'bold' : 'normal'}
              `,
              data || '',
             );
};
