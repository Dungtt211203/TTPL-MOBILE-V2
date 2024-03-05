export enum TypeRealmDb {
  Account = 'Account',
  AddressSearch = 'HistorySearchSchemas',
  // Các loại dữ liệu khác mà bạn muốn sử dụng
}

const getDataRealmDB = async (
  name: TypeRealmDb,
  setData: (data?: any) => void,
  realm: any,
) => {
  const data = await realm.objects(name);
  if (data) {
    setData(data);
  } else {
    setData(null);
  }
};

const createRealmDB = async (
  name: TypeRealmDb,
  obj: any,
  setData: (data?: any) => void,
  realm: any,
) => {
  try {
    await realm.write(async () => {
      const data = await realm.create(name, obj);
      if (data) {
        setData(data);
      } else {
        setData(null);
      }
    });
  } catch (error) {
    console.log(error, obj);
  }
};

const updateRealmDB = async (
  name: TypeRealmDb,
  realm: any,
  updateObj: object,
  update: (date: any) => void,
) => {
  try {
    await realm.write(async () => {
      const data = await realm.create(name, updateObj, 'modified');
      if (data) {
        update(data);
      } else {
        update(null);
      }
    });
  } catch (error) {
    console.log(error, updateObj);
  }
};

const deleteDataRealmDB = async (
  realm: any,
  deleteObj: any,
  callback: () => void,
) => {
  await realm.write(async () => {
    await realm.delete(deleteObj);
    callback();
  });
};

export {createRealmDB, getDataRealmDB, updateRealmDB, deleteDataRealmDB};
