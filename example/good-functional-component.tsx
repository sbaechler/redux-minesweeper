import * as React from 'react';
import { connect } from 'react-redux';
import { selectors } from './store';

interface IProps {
  good: string[];
}

export function GoodFunctionalComponent(props: IProps) {
  console.log('Good component render');

  return (
    <div>
      <p>{props.good.join(',')}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  good: selectors.good(state),
})

export default connect(mapStateToProps, null)(GoodFunctionalComponent);
