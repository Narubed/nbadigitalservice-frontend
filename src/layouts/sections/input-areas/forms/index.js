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
import FormSimple from './components/FormSimple';
import formSimpleCode from './components/FormSimple/code';
import BaseLayout from '../../components/BaseLayout';
import View from '../../components/View';

// Forms page components

// Forms page components code

function Forms() {
  return (
    <BaseLayout
      title="Forms"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/input-areas/forms' },
        { label: 'Forms' }
      ]}
    >
      <View title="Form Simple" code={formSimpleCode}>
        <FormSimple />
      </View>
    </BaseLayout>
  );
}

export default Forms;