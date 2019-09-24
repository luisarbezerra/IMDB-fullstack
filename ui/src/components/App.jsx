import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Content from './Content'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

const App = ( props ) => (
    <Fragment>
        <Content />
    </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
