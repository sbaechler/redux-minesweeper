import * as React from 'react';
import { connect } from 'react-redux';
import { selectors } from './store';

interface IProps {
  good: string[],
}

export class GoodComponent extends React.PureComponent<IProps> {

  componentDidUpdate() {
    console.log('GoodComponent did update');
  }

  render() {
    console.log('Good component render');

    return (
      <div>
        <p>{this.props.good.join(',')}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  good: selectors.good(state),
})

export default connect(mapStateToProps, {})(GoodComponent);
