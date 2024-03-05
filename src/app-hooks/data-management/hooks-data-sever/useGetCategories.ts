import ServerClient from '@app-clients/server/server-client';
import {useEffect, useState} from 'react';
import {useLanguage} from '../hooks-data-client';
import {useToast} from 'native-base';
import {useTranslation} from 'react-i18next';

import showToastApp from '@app-components/ToastApp/ShowToastApp';
import { TypeChildren } from '@app-config/app-schemas/server';

const useGetCategories = () => {
  const {language} = useLanguage();
  const {t} = useTranslation();
  const [is_loading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<TypeChildren[]>();

  useEffect(() => {
    if (language) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        showToastApp({
          type: 'info',
          position: 'top',
          text: `${t('error', 'Đã xảy ra lỗi, vui lòng thử lại!')}`,
        });
        setIsLoading(false);
      }, 10000);

      refetch()
        .then(resp => {
          clearTimeout(timeout);
          setIsLoading(false);
          const childrenData: any = resp?.data?.getCategories?.children_data;
          if (childrenData) {
            setCategories(childrenData);
          }
        })
        .catch(() => {
          clearTimeout(timeout);
          setIsLoading(false);
        });
    }
  }, [language]);

  return {
    categories,
    is_loading,
  };
};

export default useGetCategories;
