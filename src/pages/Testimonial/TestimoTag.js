import React, { PureComponent } from 'react';

import Tag from './Tag';

class TestimoTag extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { viewAll, talk, column } = this.props;
        if ((viewAll || talk.view) &&
            (column === 0 || talk.column === column))
            return <Tag active={talk.active} talk={talk} />;

        return null;
    }
}

export default TestimoTag;