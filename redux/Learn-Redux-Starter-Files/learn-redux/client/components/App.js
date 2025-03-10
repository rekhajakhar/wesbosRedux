
import * as actionCreators from '../actions/actionCreator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Main from './Main';


function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;