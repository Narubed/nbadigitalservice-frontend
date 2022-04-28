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

// Sections components
import simpleAlertsCode from './components/SimpleAlerts/code';
import BaseLayout from '../../components/BaseLayout';
import View from '../../components/View';

// ALerts page components
import SimpleAlerts from './components/SimpleAlerts';

// ALerts page components code

function Alerts() {
  return (
    <BaseLayout
      title="Alerts"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/attention-catchers/alerts' },
        { label: 'Alerts' }
      ]}
    >
      <View title="Simple alerts" code={simpleAlertsCode}>
        <SimpleAlerts />
      </View>
    </BaseLayout>
  );
}

export default Alerts;
