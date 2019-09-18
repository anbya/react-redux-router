import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

export default class AboutPage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h2>This is About Page</h2>
                <Link to="/"><Button color="danger">Home</Button></Link>
            </div>
        )
    }
}
