import * as React from 'react';
import { connect } from 'react-redux';
import { selectors } from './store';

interface IProps {
  good: string[];
  updateState: () => void;
}

export class GoodComponent extends React.PureComponent<IProps> {

  componentDidUpdate() {
    console.log('GoodComponent did update');
  }

  render() {
    return (
      <div>
        <button onClick={this.props.updateState}>Update State</button>
        <p>{this.props.good.join(',')}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  good: selectors.good(state),
})

const actions = {
  updateState: () => ({ type: 'UPDATE STATE'}),
};

export default connect(mapStateToProps, actions)(GoodComponent);
