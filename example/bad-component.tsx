import * as React from 'react';
import { connect } from 'react-redux';
import { selectors } from './store';

interface IProps {
  bad: string[],
}

export class BadComponent extends React.PureComponent<IProps> {

  componentDidUpdate() {
    console.log('BadComponent did update');
  }

  render() {
    console.log('BadComponent component render');

    return (
      <div>
        <p>{this.props.bad.join(',')}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bad: selectors.bad(state),
})

export default connect(mapStateToProps, {})(BadComponent);
