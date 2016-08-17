import React from 'react';
import {Col} from 'react-bootstrap';
import FontAwesome from './FontAwesome';

const TestCaseResult = ({passed, id}) => {
    if (passed) {
        return <Col md={3}>
            <span className="text-success">
                <FontAwesome name="check"/>
            </span> Test Case #{id}
        </Col>;
    }

    return <Col md={3}>
        <span className="text-danger">
            <FontAwesome name="times"/>
        </span> Test Case #{id}
    </Col>;
};

export default TestCaseResult;