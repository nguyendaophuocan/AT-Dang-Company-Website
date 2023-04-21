import React, { useState, useEffect } from 'react';
import { useGetHomePageContentMutation } from '../../src/features/admin/adminApiSlice';

function withTokenCheck({ children }) {
  return () => {
    const [dataHome, setDataHome] = useState('');
    const [getHomePageContent, { isLoading: isLoadingContent }] =
      useGetHomePageContentMutation();
    const getHomepageData = async () => {
      const result = await getHomePageContent().unwrap();
      setDataHome(result);
    };
    useEffect(() => {
      getHomepageData();
    }, []);
    return <>{children}</>;
  };
}

export default withTokenCheck;
