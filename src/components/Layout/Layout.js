import React from 'react';
import './Layout.scss';

const layout = (props) => (
    <React.Fragment>
        <div>
        </div>
        <main className="Content">
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;