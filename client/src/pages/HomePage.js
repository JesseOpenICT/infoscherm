import React from 'react'
import '../App.scss'
import './dashboard/style.Dashboard.scss';
import ScreenReplication from '../components/screen-replication/component.ScreenReplication';
import GlobalThemeFetcher from '../components/global-theme-fetcher/component.GlobalThemeFetcher';

function HomePage() {
    return (
        <div>
            <GlobalThemeFetcher/>
                <content>
                    <ScreenReplication src="/screen"/>
                </content>
        </div>
    );
}

export default HomePage;