import React from "react";
import GroepAanpassen from '../components/groep-edit/component.GroepEdit';
import GlobalThemeFetcher from '../components/global-theme-fetcher/component.GlobalThemeFetcher';

const SlideBeheer = () => {
  return (
    <div>
    <GlobalThemeFetcher/>
      <GroepAanpassen src="/groep-edit"/>
    </div>
  )
};

export default SlideBeheer;
