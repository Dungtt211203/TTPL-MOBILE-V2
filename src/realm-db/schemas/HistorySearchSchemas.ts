import Realm from 'realm';

class HistorySearchSchemas extends Realm.Object {
  static schema = {
    name: 'HistorySearchSchemas',
    primaryKey: 'id', // Đề xuất thêm một trường id làm khóa chính
    properties: {
      id: 'int', // Giả định rằng mỗi đối tượng sẽ có một ID duy nhất
      name: 'string',
      location: 'Location', // Định nghĩa một kiểu dữ liệu tùy chỉnh cho location
      formatted_address: 'string',
    },
  };
}

// Định nghĩa kiểu dữ liệu tùy chỉnh cho Location
class Location extends Realm.Object {
  static schema = {
    name: 'Location',
    properties: {
      latitude: 'double',
      longitude: 'double',
      latitudeDelta: 'double',
      longitudeDelta: 'double',
    },
  };
}

export {HistorySearchSchemas, Location};
