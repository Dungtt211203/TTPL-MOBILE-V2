import Realm from 'realm';
class Account extends Realm.Object<Account> {
  static schema = {
    name: 'Account',
    properties: {
      userName: 'string',
      password: 'string',
    },
  };
}
export { Account };
