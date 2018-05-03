import fromPairs from 'lodash/fromPairs';

export default (props) => {
  const parsed = fromPairs(props.split(',').map((p) => p.split(':')));
  return {
    ...parsed,
    f: `${parsed.f}em`,
  };
};
