import React from 'react';
import Layout from './Layout';
import MainPage from '@/components/pages/main-page/MainPage';

const Index = () => {
  return (
    <Layout title={'Secret Santa'}>
      <MainPage />
    </Layout>
  );
}

export default Index;