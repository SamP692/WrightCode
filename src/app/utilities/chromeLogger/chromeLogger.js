import defaultOptions from './defaultOptions';

export default (message, data = null, requestedOptions = null) => {
  const options = Object.assign({}, ...defaultOptions, ...requestedOptions);
};
