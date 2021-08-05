import React from 'react';
import _ from 'lodash';

import { Link, withPrefix } from '../utils';

export default class Action extends React.Component {
    render() {
        const action = _.get(this.props, 'action');
        const actionClass = _.get(this.props, 'actionClass', '');
        const url = _.get(action, 'url');
        const label = _.get(action, 'label', null);
        const newWindow = _.get(action, 'new_window');
        const noFollow = _.get(action, 'no_follow');
        const attrs = {};
        if (newWindow) {
            attrs.target = '_blank';
        }
        if (newWindow || noFollow) {
            attrs.rel = [(newWindow ? 'noopener' : ''), (noFollow ? 'nofollow' : '')].filter(Boolean).join(' ');
        }

        return (
            <Link href={withPrefix(url)} {...attrs} className={actionClass} style={{display: 'inline-block'}}>
                {label}
            </Link>
        );
    }
}
