import {ResProductByCategory, TypeChildenData} from '@app-schemas/server';

const useHomeManager = () => {
  const customDataSections = (
    categories?: TypeChildenData[],
    products?: ResProductByCategory[],
  ) => {
  };

  return {customDataSections};
};

export default useHomeManager;
