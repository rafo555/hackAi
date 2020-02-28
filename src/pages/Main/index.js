import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <div>
            Home
            <br/>

            <Link to={'/main'}>Main</Link>
            <br/>
            <Link to={'/test'}>Test</Link>
            <br/>
            <Link to={'/download'}>Zip Download</Link>
            <br/>
            <Link to={'/lilit-test'}>upload</Link>
        </div>
    );
}

export default memo(Main);