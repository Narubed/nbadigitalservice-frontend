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
import simpleModalCode from './components/SimpleModal/code';
import BaseLayout from '../../components/BaseLayout';
import View from '../../components/View';

// Modals page components
import SimpleModal from './components/SimpleModal';

// Modals page components code

function Modals() {
  return (
    <BaseLayout
      title="Modals"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/attention-catchers/modals' },
        { label: 'Modals' }
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;
