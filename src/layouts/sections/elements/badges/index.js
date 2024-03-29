/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Badges page components
import BadgesGradient from './components/BadgesGradient';
import BadgesSimple from './components/BadgesSimple';
import BadgesSimpleRounded from './components/BadgesSimpleRounded';

// Badges page components code
import badgesGradientCode from './components/BadgesGradient/code';
import badgesSimpleCode from './components/BadgesSimple/code';
import badgesSimpleRoundedCode from './components/BadgesSimpleRounded/code';
// Sections components
import View from '../../components/View';
import BaseLayout from '../../components/BaseLayout';

function Badges() {
  return (
    <BaseLayout
      title="Badges"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/badges' },
        { label: 'Badges' }
      ]}
    >
      <View title="Badges gradient" code={badgesGradientCode}>
        <BadgesGradient />
      </View>
      <View title="Badges simple" code={badgesSimpleCode}>
        <BadgesSimple />
      </View>
      <View title="Badges simple rounded" code={badgesSimpleRoundedCode}>
        <BadgesSimpleRounded />
      </View>
    </BaseLayout>
  );
}

export default Badges;
