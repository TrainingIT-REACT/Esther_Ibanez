import React, { Fragment } from 'react';

export default (album) => (
    <Fragment>
        <li key={album.id}>{album.name}</li>
    </Fragment>
);