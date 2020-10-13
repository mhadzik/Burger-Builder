import React from 'react';
import './Layout.scss';

const layout = (props) => (
    <React.Fragment>
        <div>
            ja + ty + sex = ( ͡° ͜ʖ ͡°)
        </div>
        <main className="Content">
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;