import React from 'react';
import MainPage from '@/components/pages/main-page/MainPage';
import Layout from '@/components/common/layout/Layout';

const Index = () => {
  return (
    <Layout title={'Secret Santa'}>
      <MainPage />
    </Layout>
  );
}

export default Index;