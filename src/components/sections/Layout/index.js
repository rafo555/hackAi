import React, { memo } from 'react';

import Header from '../Header';
import Siderbar from '../Sidebar';

const Layout = (props) => {

    const {
        children
    } = props;


    return (
        <section>
            <Header/>

            <div>
                <Siderbar page={props.page}/>

                <section>
                    {children}
                </section>
            </div>
        </section>
    );
};

export default memo(Layout);