export const DATA_ACCOUNT = {
  userName: 'Cuong@123',
  password: '123456aA@',
};

export const dataStatics = [
  {
    name: 'Đơn nhập',
    value: 10,
    color: '#F28B81',
    lineData: [
      {value: 7, dataPointText: '57'},
      {value: 10, dataPointText: '10'},
      {value: 8, dataPointText: '8'},
      {value: 58, dataPointText: '58'},
      {value: 56, dataPointText: '56'},
      {value: 78, dataPointText: '78'},
      {value: 74, dataPointText: '74'},
      {value: 98, dataPointText: '98'},
    ],
    lineData2: [
      {value: 1, dataPointText: '1'},
      {value: 20, dataPointText: '20'},
      {value: 18, dataPointText: '18'},
      {value: 40, dataPointText: '40'},
      {value: 36, dataPointText: '36'},
      {value: 60, dataPointText: '60'},
      {value: 54, dataPointText: '54'},
      {value: 120, dataPointText: '120'},
    ],
  },
  {
    name: 'Đơn bán',
    value: 80,
    color: '#8BB3F7',
    lineData: [
      {value: 1, dataPointText: '1'},
      {value: 22, dataPointText: '22'},
      {value: 36, dataPointText: '36'},
      {value: 41, dataPointText: '41'},
      {value: 58, dataPointText: '58'},
      {value: 62, dataPointText: '62'},
      {value: 89, dataPointText: '89'},
      {value: 7, dataPointText: '7'},
    ],
    lineData2: [
      {value: 30, dataPointText: '30'},
      {value: 20, dataPointText: '20'},
      {value: 18, dataPointText: '18'},
      {value: 40, dataPointText: '40'},
      {value: 36, dataPointText: '36'},
      {value: 60, dataPointText: '60'},
      {value: 54, dataPointText: '54'},
      {value: 120, dataPointText: '120'},
    ],
  },
  {
    name: 'Phiếu thu',
    value: 80,
    color: '#fbd762',
    lineData: [
      {value: 57, dataPointText: '57'},
      {value: 10, dataPointText: '10'},
      {value: 8, dataPointText: '8'},
      {value: 58, dataPointText: '58'},
      {value: 56, dataPointText: '56'},
      {value: 78, dataPointText: '78'},
      {value: 74, dataPointText: '74'},
      {value: 98, dataPointText: '98'},
    ],
    lineData2: [
      {value: 30, dataPointText: '30'},
      {value: 20, dataPointText: '20'},
      {value: 18, dataPointText: '18'},
      {value: 40, dataPointText: '40'},
      {value: 36, dataPointText: '36'},
      {value: 60, dataPointText: '60'},
      {value: 54, dataPointText: '54'},
      {value: 120, dataPointText: '120'},
    ],
  },
  {
    name: 'Phiếu chi',
    value: 90,
    color: '#0dbc78',
    lineData: [
      {value: 57, dataPointText: '57'},
      {value: 10, dataPointText: '10'},
      {value: 8, dataPointText: '8'},
      {value: 58, dataPointText: '58'},
      {value: 56, dataPointText: '56'},
      {value: 78, dataPointText: '78'},
      {value: 74, dataPointText: '74'},
      {value: 98, dataPointText: '98'},
    ],
    lineData2: [
      {value: 30, dataPointText: '30'},
      {value: 20, dataPointText: '20'},
      {value: 18, dataPointText: '18'},
      {value: 40, dataPointText: '40'},
      {value: 36, dataPointText: '36'},
      {value: 60, dataPointText: '60'},
      {value: 54, dataPointText: '54'},
      {value: 120, dataPointText: '120'},
    ],
  },
];

export const DATA_CATEGORIES = [
  {
    id: 41,
    parent_id: 2,
    name: 'Thời Trang Nam',
    is_active: true,
    position: 7,
    level: 2,
    product_count: 325,
    image:
      'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn&quot',
    children_data: [
      {
        id: 42,
        parent_id: 41,
        name: 'Áo khoác',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 30,
        children_data: [],
      },
      {
        id: 43,
        parent_id: 41,
        name: 'Áo Vest và Blazer',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 55,
        children_data: [],
      },
      {
        id: 44,
        parent_id: 41,
        name: 'Áo Hoodie, Áo Len & Áo Nỉ',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 50,
        children_data: [],
      },
      {
        id: 45,
        parent_id: 41,
        name: 'Quần Jeans',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 57,
        children_data: [],
      },
      {
        id: 46,
        parent_id: 41,
        name: 'Quần Dài/Quần Âu',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 75,
        children_data: [],
      },
      {
        id: 47,
        parent_id: 41,
        name: 'Quần Short',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 30,
        children_data: [],
      },
      {
        id: 48,
        parent_id: 41,
        name: 'Áo Ba Lỗ',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 27,
        children_data: [],
      },
    ],
  },
  {
    id: 59,
    parent_id: 2,
    name: 'Thời trang Nữ',
    is_active: true,
    position: 8,
    level: 2,
    product_count: 1,
    image:
      'https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn&quot',
    children_data: [
      {
        id: 69,
        parent_id: 59,
        name: 'Quần',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 70,
        parent_id: 59,
        name: 'Quần Đùi',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 71,
        parent_id: 59,
        name: 'Chân Váy',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 72,
        parent_id: 59,
        name: 'Quần Jeans',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 73,
        parent_id: 59,
        name: 'Đầm/Váy',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 74,
        parent_id: 59,
        name: 'Váy cưới',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 75,
        parent_id: 59,
        name: 'Đồ Liền Thân',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 0,
        children_data: [],
      },
    ],
  },
  {
    id: 49,
    parent_id: 2,
    name: 'Điện Thoại & Phụ Kiện',
    is_active: true,
    position: 9,
    level: 2,
    product_count: 44,
    image:
      'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn&quot',
    children_data: [
      {
        id: 76,
        parent_id: 49,
        name: 'Điện thoại',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 6,
        children_data: [],
      },
      {
        id: 77,
        parent_id: 49,
        name: 'Máy tính bảng',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 5,
        children_data: [],
      },
      {
        id: 78,
        parent_id: 49,
        name: 'Pin dự phòng',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 5,
        children_data: [],
      },
      {
        id: 79,
        parent_id: 49,
        name: 'Pin gắn trong, cáp và bộ sạc',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 8,
        children_data: [],
      },
      {
        id: 80,
        parent_id: 49,
        name: 'Ốp lưng, bao da, miếng dán điện thoại',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 8,
        children_data: [],
      },
      {
        id: 81,
        parent_id: 49,
        name: 'Bảo vệ màn hình',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 8,
        children_data: [],
      },
      {
        id: 82,
        parent_id: 49,
        name: 'Đế giữ điện thoại',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 4,
        children_data: [],
      },
    ],
  },
  {
    id: 83,
    parent_id: 2,
    name: 'Thiết Bị Điện Tử',
    is_active: true,
    position: 10,
    level: 2,
    product_count: 29,
    image:
      'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn&quot',
    children_data: [
      {
        id: 84,
        parent_id: 83,
        name: 'Thiết bị đeo thông minh',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 85,
        parent_id: 83,
        name: 'Phụ kiện tivi',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 86,
        parent_id: 83,
        name: 'Máy game Console',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 10,
        children_data: [],
      },
      {
        id: 87,
        parent_id: 83,
        name: 'Phụ kiện Console',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 88,
        parent_id: 83,
        name: 'Đĩa game',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 89,
        parent_id: 83,
        name: 'Linh phụ kiện',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 90,
        parent_id: 83,
        name: 'Tai nghe nhét tai',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 5,
        children_data: [],
      },
    ],
  },
  {
    id: 50,
    parent_id: 2,
    name: 'Máy Tính & Laptop',
    is_active: true,
    position: 11,
    level: 2,
    product_count: 27,
    image:
      'https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn&quot',
    children_data: [
      {
        id: 91,
        parent_id: 50,
        name: 'Máy tính bàn',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 7,
        children_data: [],
      },
      {
        id: 92,
        parent_id: 50,
        name: 'Màn hình',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 93,
        parent_id: 50,
        name: 'Linh kiện máy tính',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 94,
        parent_id: 50,
        name: 'Thiết bị lưu trữ',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 12,
        children_data: [],
      },
      {
        id: 95,
        parent_id: 50,
        name: 'Thiết bị mạng',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 96,
        parent_id: 50,
        name: 'Máy in, Máy Scan & Máy Chiều',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 97,
        parent_id: 50,
        name: 'Phụ kiện máy tính',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 2,
        children_data: [],
      },
    ],
  },
  {
    id: 51,
    parent_id: 2,
    name: 'Máy Ảnh & Máy Quay Phim',
    is_active: true,
    position: 12,
    level: 2,
    product_count: 19,
    image:
      'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn&quot',
    children_data: [
      {
        id: 98,
        parent_id: 51,
        name: 'Máy Ảnh - Máy Quay Phim',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 7,
        children_data: [],
      },
      {
        id: 99,
        parent_id: 51,
        name: 'Camera giám sát & Camera hệ thống',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 100,
        parent_id: 51,
        name: 'Thẻ nhớ',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 5,
        children_data: [],
      },
      {
        id: 101,
        parent_id: 51,
        name: 'Ống kính',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 102,
        parent_id: 51,
        name: 'Phụ kiện máy ảnh',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 103,
        parent_id: 51,
        name: 'Máy bay Camera & phụ kiện',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
    ],
  },
  {
    id: 52,
    parent_id: 2,
    name: 'Đồng Hồ',
    is_active: true,
    position: 13,
    level: 2,
    product_count: 20,
    image:
      'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn&quot',
    children_data: [
      {
        id: 104,
        parent_id: 52,
        name: 'Đồng hồ Nam',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 12,
        children_data: [],
      },
      {
        id: 105,
        parent_id: 52,
        name: 'Đồng hồ Nữ',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 12,
        children_data: [],
      },
      {
        id: 106,
        parent_id: 52,
        name: 'Bộ đồng hồ & đồng hồ cặp',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 6,
        children_data: [],
      },
      {
        id: 107,
        parent_id: 52,
        name: 'Đồng hồ Trẻ Em',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 11,
        children_data: [],
      },
      {
        id: 108,
        parent_id: 52,
        name: 'Phụ kiện đồng hồ',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 109,
        parent_id: 52,
        name: 'Khác',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
    ],
  },
  {
    id: 55,
    parent_id: 2,
    name: 'Giày Dép Nam',
    is_active: true,
    position: 14,
    level: 2,
    product_count: 212,
    image:
      'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn&quot',
    children_data: [
      {
        id: 110,
        parent_id: 55,
        name: 'Bốt',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 25,
        children_data: [],
      },
      {
        id: 111,
        parent_id: 55,
        name: 'Giày thể thao/Saneakers',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 88,
        children_data: [],
      },
      {
        id: 112,
        parent_id: 55,
        name: 'Giày Sục',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 18,
        children_data: [],
      },
      {
        id: 113,
        parent_id: 55,
        name: 'Giày tây lười',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 30,
        children_data: [],
      },
      {
        id: 114,
        parent_id: 55,
        name: 'Giày Oxfords & Giày buộc dây',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 17,
        children_data: [],
      },
      {
        id: 115,
        parent_id: 55,
        name: 'Xăng-đan và Dép',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 29,
        children_data: [],
      },
      {
        id: 116,
        parent_id: 55,
        name: 'Phụ kiện giày dép',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 5,
        children_data: [],
      },
    ],
  },
  {
    id: 56,
    parent_id: 2,
    name: 'Thiểt Bị Điện Gia Dụng',
    is_active: true,
    position: 15,
    level: 2,
    product_count: 21,
    image:
      'https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn&quot',
    children_data: [
      {
        id: 117,
        parent_id: 56,
        name: 'Đồ gia dụng nhà bếp',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 118,
        parent_id: 56,
        name: 'Đồ gia dụng lớn',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 119,
        parent_id: 56,
        name: 'Máy hút buị & Thiết bị làm sạch',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 120,
        parent_id: 56,
        name: 'Quạt & Máy nóng lạnh',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 5,
        children_data: [],
      },
      {
        id: 121,
        parent_id: 56,
        name: 'Thiết bị chăm sóc quần áo',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 122,
        parent_id: 56,
        name: 'Khác',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 123,
        parent_id: 56,
        name: 'Máy xay, ép, máy đánh trứng trộn bột, máy xay thực phẩm',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 2,
        children_data: [],
      },
    ],
  },
  {
    id: 57,
    parent_id: 2,
    name: 'Thể Thao & Du Lịch',
    is_active: true,
    position: 16,
    level: 2,
    product_count: 104,
    image:
      'https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn&quot',
    children_data: [
      {
        id: 124,
        parent_id: 57,
        name: 'Vali',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 6,
        children_data: [],
      },
      {
        id: 125,
        parent_id: 57,
        name: 'Túi du lịch',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 126,
        parent_id: 57,
        name: 'Phụ kiện du lịch',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 14,
        children_data: [],
      },
      {
        id: 127,
        parent_id: 57,
        name: 'Dụng cụ thể thao & Dã ngoại',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 17,
        children_data: [],
      },
      {
        id: 128,
        parent_id: 57,
        name: 'Giày thể thao',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 62,
        children_data: [],
      },
      {
        id: 129,
        parent_id: 57,
        name: 'Thời trang thể thao & Dã ngoại',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 13,
        children_data: [],
      },
      {
        id: 130,
        parent_id: 57,
        name: 'Phụ kiện thể thao & Dã ngoại',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 12,
        children_data: [],
      },
    ],
  },
  {
    id: 58,
    parent_id: 2,
    name: 'Ô Tô & Xe Máy & Xe Đạp',
    is_active: true,
    position: 17,
    level: 2,
    product_count: 41,
    image:
      'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn&quot',
    children_data: [
      {
        id: 131,
        parent_id: 58,
        name: 'Xe đạp, xe điện',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 14,
        children_data: [],
      },
      {
        id: 132,
        parent_id: 58,
        name: 'Mô tô, xe máy',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 10,
        children_data: [],
      },
      {
        id: 133,
        parent_id: 58,
        name: 'Xe Ô tô',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 134,
        parent_id: 58,
        name: 'Mũ bảo hiểm',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 7,
        children_data: [],
      },
      {
        id: 135,
        parent_id: 58,
        name: 'Phụ kiện xe máy',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 7,
        children_data: [],
      },
      {
        id: 136,
        parent_id: 58,
        name: 'Phụ kiện xe đạp',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 3,
        children_data: [],
      },
      {
        id: 137,
        parent_id: 58,
        name: 'Phụ kiện bên trong Ô tô',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 4,
        children_data: [],
      },
    ],
  },
  {
    id: 60,
    parent_id: 2,
    name: 'Mẹ & Bé',
    is_active: true,
    position: 18,
    level: 2,
    product_count: 18,
    image:
      'https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn&quot',
    children_data: [
      {
        id: 138,
        parent_id: 60,
        name: 'Đồ du lịch cho bé',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 139,
        parent_id: 60,
        name: 'Đồ dùng ăn dặm cho bé',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 5,
        children_data: [],
      },
      {
        id: 140,
        parent_id: 60,
        name: 'Phụ kiện cho mẹ',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 141,
        parent_id: 60,
        name: 'Chăm sóc sức khoẻ mẹ',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 142,
        parent_id: 60,
        name: 'Đồ dùng phòng tăm & Chăm sóc cơ thể bé',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 143,
        parent_id: 60,
        name: 'Đồ dùng phòng ngủ cho bé',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 144,
        parent_id: 60,
        name: 'An toàn cho bé',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 2,
        children_data: [],
      },
    ],
  },
  {
    id: 61,
    parent_id: 2,
    name: 'Nhà Cửa & Đời Sống',
    is_active: true,
    position: 19,
    level: 2,
    product_count: 23,
    image:
      'https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn&quot',
    children_data: [
      {
        id: 145,
        parent_id: 61,
        name: 'Chăn, Ga, Gối & Nệm',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 146,
        parent_id: 61,
        name: 'Đồ nội thất',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 7,
        children_data: [],
      },
      {
        id: 147,
        parent_id: 61,
        name: 'Trang trí nhà cửa',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 148,
        parent_id: 61,
        name: 'Dụng cụ & Thiết bị tiện ích',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 149,
        parent_id: 61,
        name: 'Đồ dùng nhà bếp và hộp đựng thực phẩm',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 150,
        parent_id: 61,
        name: 'Đèn',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 152,
        parent_id: 61,
        name: 'Ngoài trời & Sân vườn',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 4,
        children_data: [],
      },
    ],
  },
  {
    id: 62,
    parent_id: 2,
    name: 'Sắc Đẹp',
    is_active: true,
    position: 20,
    level: 2,
    product_count: 14,
    image:
      'https://s3-alpha-sig.figma.com/img/265b/47d6/8c87372f456ba8b3145e12e4549ec70c?Expires=1696809600&Signature=GNvecBMh1qe5OHjfp5d92fLhFtHzHHZDAqwLSehLGd6ZZOKgpun-gca0pK5R-jdlAn3n5yBhQumScLUXPw6i-5HmIk8WjDj8o-NOXdPTWBqgI54BD12ChuS-E6fSjhjp3bJ78IXjjCfTUsF83BsEzG6DNN~9LEQlGXXz22qCWm9cy-E~06pF~iwO9Ho~ejYgpFmgJtQ0ImEE~tfr9LLcBVe7GcQLeZ2q-GiiZJVVcpVeQuczr0D2baSWCgRkJmLweac9VHNQSLIegBnFY~Mdt4a6U-fd5yNmlk8H~eB8YQA6FvVXWo-CyDNtGwlPk6od85vSV0gorXf4EVW5sWRE6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    children_data: [
      {
        id: 153,
        parent_id: 62,
        name: 'Chăm sóc da mặt',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 154,
        parent_id: 62,
        name: 'Tắm & chăm sóc cơ thể',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 155,
        parent_id: 62,
        name: 'Trang điểm',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 156,
        parent_id: 62,
        name: 'Chăm sóc tóc',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 157,
        parent_id: 62,
        name: 'Dụng cụ & Phụ kiện làm đẹp',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 158,
        parent_id: 62,
        name: 'Vệ sinh răng miệng',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 159,
        parent_id: 62,
        name: 'Nước hoa',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 2,
        children_data: [],
      },
    ],
  },
  {
    id: 63,
    parent_id: 2,
    name: 'Sức Khoẻ',
    is_active: true,
    position: 21,
    level: 2,
    product_count: 14,
    image:
      'https://s3-alpha-sig.figma.com/img/aa31/2b7f/2f7c34aaf9aec6c7faab48e2d751e69c?Expires=1696809600&Signature=HE8QdNxkTzqLft3tTEaOhyp2l2Wo87-x-60iADpR3oZiVnv1nZseO37TUV7p-5Lb4vsIV8pjonZ3topTaVfOTHp3F1BIIvpj10zAVtPPj~0Jme79yYAaEpdpi-OYKXI63RBbbEzhEo4Y1pLCc7uQcgbWCzJhd96Qi44kW62AeHFoqeiYYboibNjmJ6qV4Oe3QEGY5Y5UkF8U28ZvSUDy2GvayawMNIGY2B4658ZWOZHI5DcDiiqLo~GpdfOcg1tAhavRLrn8yOaOaf02oBZdgLhcfSHyuP32bSKc-g2BgkQO~fWfGAam~310sqht7lO0qtKUHeN6ezzamBJpp3cQIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    children_data: [
      {
        id: 160,
        parent_id: 63,
        name: 'Vật tư y tế',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 161,
        parent_id: 63,
        name: 'Chống muỗi & xua đuổi côn trùng',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 162,
        parent_id: 63,
        name: 'Thực phẩm chức năng',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 3,
        children_data: [],
      },
      {
        id: 163,
        parent_id: 63,
        name: 'Tã người lớn',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 164,
        parent_id: 63,
        name: 'Hỗ trợ làm đẹp',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 165,
        parent_id: 63,
        name: 'Dụng cụ massage và trị liệu',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 2,
        children_data: [],
      },
    ],
  },
  {
    id: 64,
    parent_id: 2,
    name: 'Giày Dép Nữ',
    is_active: true,
    position: 22,
    level: 2,
    product_count: 137,
    image:
      'https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn&quot',
    children_data: [
      {
        id: 166,
        parent_id: 64,
        name: 'Bốt',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 18,
        children_data: [],
      },
      {
        id: 167,
        parent_id: 64,
        name: 'Giày thể thao/Sneaker',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 26,
        children_data: [],
      },
      {
        id: 168,
        parent_id: 64,
        name: 'Giày đế bằng',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 2,
        children_data: [],
      },
      {
        id: 169,
        parent_id: 64,
        name: 'Giày cao gót',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 28,
        children_data: [],
      },
      {
        id: 170,
        parent_id: 64,
        name: 'Giày đế xuồng',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 31,
        children_data: [],
      },
      {
        id: 171,
        parent_id: 64,
        name: 'Xăng-đan và Dép',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 60,
        children_data: [],
      },
      {
        id: 172,
        parent_id: 64,
        name: 'Phụ kiện giày',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 5,
        children_data: [],
      },
    ],
  },
  {
    id: 65,
    parent_id: 2,
    name: 'Túi Ví Nữ',
    is_active: true,
    position: 23,
    level: 2,
    product_count: 22,
    image:
      'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn&quot',
    children_data: [
      {
        id: 173,
        parent_id: 65,
        name: 'Ba lô Nữ',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 8,
        children_data: [],
      },
      {
        id: 174,
        parent_id: 65,
        name: 'Cặp laptop',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 6,
        children_data: [],
      },
      {
        id: 175,
        parent_id: 65,
        name: 'Ví dự tiệc & ví cầm tay',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 176,
        parent_id: 65,
        name: 'Túi đeo hông & túi đeo ngực',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 4,
        children_data: [],
      },
      {
        id: 177,
        parent_id: 65,
        name: 'Túi Tote',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 178,
        parent_id: 65,
        name: 'Túi quai xách',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 179,
        parent_id: 65,
        name: 'Túi đeo cheo & Túi đeo vai',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 0,
        children_data: [],
      },
    ],
  },
  {
    id: 66,
    parent_id: 2,
    name: 'Phụ Kiện & Trang Sức Nữ',
    is_active: true,
    position: 24,
    level: 2,
    product_count: 0,
    image:
      'https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn&quot',
    children_data: [
      {
        id: 180,
        parent_id: 66,
        name: 'Nhẫn',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 181,
        parent_id: 66,
        name: 'Bông tai',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 182,
        parent_id: 66,
        name: 'Khăn choàng',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 183,
        parent_id: 66,
        name: 'Găng tay',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 184,
        parent_id: 66,
        name: 'Phụ kiện tóc',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 185,
        parent_id: 66,
        name: 'Vòng tay & lắc tay',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 186,
        parent_id: 66,
        name: 'Lắc chân',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 0,
        children_data: [],
      },
    ],
  },
  {
    id: 67,
    parent_id: 2,
    name: 'Bách Hoá Online',
    is_active: true,
    position: 25,
    level: 2,
    product_count: 0,
    image:
      'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn&quot',
    children_data: [
      {
        id: 187,
        parent_id: 67,
        name: 'Đồ ăn vặt',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 188,
        parent_id: 67,
        name: 'Đồ chế biến sẵn',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 189,
        parent_id: 67,
        name: 'Nhu yêu phẩm',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 190,
        parent_id: 67,
        name: 'Nguyên liệu nấu ăn',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 191,
        parent_id: 67,
        name: 'Đồ làm bánh',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 192,
        parent_id: 67,
        name: 'Sữa - trứng',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 193,
        parent_id: 67,
        name: 'Đồ uống',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 0,
        children_data: [],
      },
    ],
  },
  {
    id: 68,
    parent_id: 2,
    name: 'Nhà Sách Online',
    is_active: true,
    position: 26,
    level: 2,
    product_count: 0,
    image:
      'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn&quot',
    children_data: [
      {
        id: 194,
        parent_id: 68,
        name: 'Sách tiếng việt',
        is_active: true,
        position: 1,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 195,
        parent_id: 68,
        name: 'Sách ngoại văn',
        is_active: true,
        position: 2,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 196,
        parent_id: 68,
        name: 'Gói quà',
        is_active: true,
        position: 3,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 197,
        parent_id: 68,
        name: 'Bút viết',
        is_active: true,
        position: 4,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 198,
        parent_id: 68,
        name: 'Dụng cụ học sinh & văn phòng',
        is_active: true,
        position: 5,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 199,
        parent_id: 68,
        name: 'Màu, hoạ cụ và đồ thủ công',
        is_active: true,
        position: 6,
        level: 3,
        product_count: 0,
        children_data: [],
      },
      {
        id: 200,
        parent_id: 68,
        name: 'Sổ và giấy các loại',
        is_active: true,
        position: 7,
        level: 3,
        product_count: 0,
        children_data: [],
      },
    ],
  },
];

export const DATA_CALOULSEL = [
  {
    image:
      'https://cf.shopee.vn/file/vn-50009109-f15c166b8d1412d459af2e29c0e1a34f_xxhdpi',
  },
  {
    image:
      'https://cf.shopee.vn/file/vn-50009109-84b6dbb942b411b06e260b2534a52ab1_xxhdpi',
  },
  {
    image:
      'https://cf.shopee.vn/file/vn-50009109-31f0c21f1b71395c63bc14143e01765a_xxhdpi',
  },
  {
    image:
      'https://cf.shopee.vn/file/vn-50009109-d75275450f60aa887694f51bce06ae53_xxhdpi',
  },
  {
    image:
      'https://cf.shopee.vn/file/vn-50009109-949ce487fd8dfe6a85f07be9e343bee0_xxhdpi',
  },
];

export const DATA_PRODUCTS:any[] = [
  {
    title: 'Hàng giảm giá',
    data: [
      {
        id: 2105,
        sku: 'QA12',
        name: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 08:41:20',
        updated_at: '2023-09-20 02:41:56',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '57',
            },
            {
              position: 0,
              category_id: '129',
            },
          ],
          configurable_product_options: [
            {
              id: 307,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2105,
            },
            {
              id: 308,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2105,
            },
          ],
          configurable_product_links: [
            2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3505,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            id: 3506,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sn.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'b-qu-n-ao-th-thao-clb-psg',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
          },
          {
            attribute_code: 'meta_description',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '42',
          },
        ],
      },
      {
        id: 2231,
        sku: 'AK12',
        name: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:05:20',
        updated_at: '2023-09-18 11:10:35',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 327,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 52,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2231,
            },
            {
              id: 328,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2231,
            },
          ],
          configurable_product_links: [
            2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226,
            2227, 2228, 2229, 2230,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3711,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail', 'swatch_image'],
            file: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            id: 3712,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lh004pkexgqbc6.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'swatch_image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-cardigan-nam-n-form-r-ng-unisex',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
          },
          {
            attribute_code: 'meta_description',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '41',
          },
        ],
      },
      {
        id: 2242,
        sku: 'AKH12',
        name: 'Áo Khoác HOODIE Nam Nữ ',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:06:55',
        updated_at: '2023-09-18 11:10:20',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 329,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 58,
                },
              ],
              product_id: 2242,
            },
            {
              id: 330,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2242,
            },
          ],
          configurable_product_links: [
            2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3733,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            id: 3734,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/8/1/81f21d11315431eee346d09eae819336.jpg',
          },
          {
            id: 3735,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/9/8/98abfadeeae71f86b1eaf58bef88b2f5.jpg',
          },
          {
            id: 3736,
            media_type: 'image',
            label: null,
            position: 4,
            disabled: false,
            types: [],
            file: '/d/8/d849023642282a1fe52d871a33b459f5.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-hoodie-nam-n',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo Khoác HOODIE Nam Nữ ',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo Khoác HOODIE Nam Nữ ',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo Khoác HOODIE Nam Nữ  ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '30',
          },
        ],
      },
      {
        id: 2253,
        sku: 'DU123',
        name: 'Áo khoác dù nam nữ form rộng cổ đứng',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:08:55',
        updated_at: '2023-09-18 11:11:12',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 331,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2253,
            },
            {
              id: 332,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2253,
            },
          ],
          configurable_product_links: [
            2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3752,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            id: 3753,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb30vzsn9ua5.jpg',
          },
          {
            id: 3754,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb30vzu1ua36.jpg',
          },
          {
            id: 3755,
            media_type: 'image',
            label: null,
            position: 4,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb89vz3lzg4f.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-du-nam-n-form-r-ng-c-d-ng',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '22',
          },
        ],
      },
      {
        id: 2269,
        sku: 'NN12-1',
        name: 'o Khoác Thể Thao ba Sọc Nam Nữ',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:15:04',
        updated_at: '2023-09-18 11:15:04',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 333,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 53,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2269,
            },
            {
              id: 334,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2269,
            },
          ],
          configurable_product_links: [
            2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264,
            2265, 2266, 2267, 2268,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3771,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            id: 3772,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134201-23020-fropjr32xlnv8d.jpg',
          },
          {
            id: 3773,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134201-23020-trfce9x2xlnv67.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'o-khoac-th-thao-ba-s-c-nam-n',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ',
          },
          {
            attribute_code: 'meta_description',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '42',
          },
        ],
      },
      {
        id: 2280,
        sku: 'BB123',
        name: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:17:41',
        updated_at: '2023-09-18 11:17:41',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 335,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 52,
                },
              ],
              product_id: 2280,
            },
            {
              id: 336,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2280,
            },
          ],
          configurable_product_links: [
            2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3784,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            id: 3785,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/f/b/fbbb530417250c55da77081479a28d47.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-bomber-nhung-tam-c-b-ki-u-tron',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '18',
          },
        ],
      },
    ],
  },
  {
    title: 'Hàng dứt mẫu',
    data: [
      {
        id: 2588,
        sku: 'IP14P123',
        name: 'Điện thoại Apple iPhone 14 Pro Max 128GB',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:09:25',
        updated_at: '2023-09-19 03:09:25',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '76',
            },
          ],
          configurable_product_options: [
            {
              id: 387,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 57,
                },
              ],
              product_id: 2588,
            },
          ],
          configurable_product_links: [2586, 2587],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4316,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/7/b/7bb6d3ae9b86f3d7a7b1ca0e48ec311a.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/7/b/7bb6d3ae9b86f3d7a7b1ca0e48ec311a.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/7/b/7bb6d3ae9b86f3d7a7b1ca0e48ec311a.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/7/b/7bb6d3ae9b86f3d7a7b1ca0e48ec311a.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'di-n-tho-i-apple-iphone-14-pro-max-128gb',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Điện thoại Apple iPhone 14 Pro Max 128GB',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Điện thoại Apple iPhone 14 Pro Max 128GB',
          },
          {
            attribute_code: 'meta_description',
            value: 'Điện thoại Apple iPhone 14 Pro Max 128GB ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '16',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2591,
        sku: 'IP13128',
        name: 'Apple iPhone 13 128GB',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:11:14',
        updated_at: '2023-09-19 03:11:14',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '76',
            },
          ],
          configurable_product_options: [
            {
              id: 388,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 58,
                },
              ],
              product_id: 2591,
            },
          ],
          configurable_product_links: [2589, 2590],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4319,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/1/1/117d81f7b67e8823ab5ddc45317ef3cc.jpg',
          },
          {
            id: 4320,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/5/8/58773bf665f1887757b6c14d2c48b39a.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/1/1/117d81f7b67e8823ab5ddc45317ef3cc.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/1/1/117d81f7b67e8823ab5ddc45317ef3cc.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/1/1/117d81f7b67e8823ab5ddc45317ef3cc.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'apple-iphone-13-128gb',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Apple iPhone 13 128GB',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Apple iPhone 13 128GB',
          },
          {
            attribute_code: 'meta_description',
            value: 'Apple iPhone 13 128GB ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '43',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2593,
        sku: 'SMX12',
        name: 'MÁY TÍNH BẢNG ĐỂ BÀN JOWAVE SMART X',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:12:55',
        updated_at: '2023-09-19 03:12:55',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '77',
            },
          ],
          configurable_product_options: [
            {
              id: 389,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 59,
                },
              ],
              product_id: 2593,
            },
          ],
          configurable_product_links: [2592],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4323,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/s/g/sg-11134201-22110-qe5ga9g70dkv9a.jpg',
          },
          {
            id: 4324,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22110-ytqjg8g70dkv72.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22110-qe5ga9g70dkv9a.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22110-qe5ga9g70dkv9a.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22110-qe5ga9g70dkv9a.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'may-tinh-b-ng-d-ban-jowave-smart-x',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'MÁY TÍNH BẢNG ĐỂ BÀN JOWAVE SMART X',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'MÁY TÍNH BẢNG ĐỂ BÀN JOWAVE SMART X',
          },
          {
            attribute_code: 'meta_description',
            value: 'MÁY TÍNH BẢNG ĐỂ BÀN JOWAVE SMART X ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '65',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2596,
        sku: 'IPMN12',
        name: 'Máy tính bảng Apple iPad mini 6 8.3-inch Wi-Fi 64GB',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:14:19',
        updated_at: '2023-09-19 03:14:19',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '77',
            },
          ],
          configurable_product_options: [
            {
              id: 390,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 52,
                },
                {
                  value_index: 57,
                },
              ],
              product_id: 2596,
            },
          ],
          configurable_product_links: [2594, 2595],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4325,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/0/b/0bb71bd315184ec23843c67e120bfb9a.jpg',
          },
          {
            id: 4326,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/c/1/c1c45117ad570c83b878c9ada5cf0e20.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/0/b/0bb71bd315184ec23843c67e120bfb9a.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/0/b/0bb71bd315184ec23843c67e120bfb9a.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/0/b/0bb71bd315184ec23843c67e120bfb9a.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'may-tinh-b-ng-apple-ipad-mini-6-8-3-inch-wi-fi-64gb',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Máy tính bảng Apple iPad mini 6 8.3-inch Wi-Fi 64GB',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Máy tính bảng Apple iPad mini 6 8.3-inch Wi-Fi 64GB',
          },
          {
            attribute_code: 'meta_description',
            value: 'Máy tính bảng Apple iPad mini 6 8.3-inch Wi-Fi 64GB ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '2',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2598,
        sku: 'SDP3K',
        name: 'Pin Sạc Dự Phòng 30000mAh',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:16:41',
        updated_at: '2023-09-19 03:16:41',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '78',
            },
          ],
          configurable_product_options: [
            {
              id: 391,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 59,
                },
              ],
              product_id: 2598,
            },
          ],
          configurable_product_links: [2597],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4327,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/v/n/vn-11134207-7qukw-lgg9k5c8z2wa13.jpg',
          },
          {
            id: 4328,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lgg9k5c90hgqfd.jpg',
          },
          {
            id: 4329,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lgg9k5c91w16c5.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/v/n/vn-11134207-7qukw-lgg9k5c8z2wa13.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/v/n/vn-11134207-7qukw-lgg9k5c8z2wa13.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/v/n/vn-11134207-7qukw-lgg9k5c8z2wa13.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'pin-s-c-d-phong-30000mah',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Pin Sạc Dự Phòng 30000mAh',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Pin Sạc Dự Phòng 30000mAh',
          },
          {
            attribute_code: 'meta_description',
            value: 'Pin Sạc Dự Phòng 30000mAh ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '78',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2601,
        sku: 'MCG1OK',
        name: 'Máy chơi game kiêm Sạc dự phòng 10000mAh',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:18:37',
        updated_at: '2023-09-19 03:18:37',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '78',
            },
          ],
          configurable_product_options: [
            {
              id: 392,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 50,
                },
                {
                  value_index: 58,
                },
              ],
              product_id: 2601,
            },
          ],
          configurable_product_links: [2599, 2600],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4330,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: [],
            file: '/5/a/5a06159bfef8f82051c6841cba7b1b91.jpg',
          },
          {
            id: 4331,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/0/9/0974f109aa5e16eb301c75351a783641.jpg',
          },
          {
            id: 4332,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/a/0/a0cb0f52a553bd14b31eaa197b671bc1.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/0/9/0974f109aa5e16eb301c75351a783641.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/0/9/0974f109aa5e16eb301c75351a783641.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/0/9/0974f109aa5e16eb301c75351a783641.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'may-choi-game-kiem-s-c-d-phong-10000mah',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Máy chơi game kiêm Sạc dự phòng 10000mAh',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Máy chơi game kiêm Sạc dự phòng 10000mAh',
          },
          {
            attribute_code: 'meta_description',
            value: 'Máy chơi game kiêm Sạc dự phòng 10000mAh ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '76',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2605,
        sku: 'PDT12',
        name: 'Pin Điện Thoại 5s 6 6s 7 8 Plus',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:21:11',
        updated_at: '2023-09-19 03:21:11',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '79',
            },
          ],
          configurable_product_options: [
            {
              id: 393,
              attribute_id: '150',
              label: 'Format',
              position: 0,
              values: [
                {
                  value_index: 219,
                },
                {
                  value_index: 220,
                },
                {
                  value_index: 221,
                },
              ],
              product_id: 2605,
            },
          ],
          configurable_product_links: [2602, 2603, 2604],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4333,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/0/3/03bf45ea84ffcc337ff6c52463d39551.jpg',
          },
          {
            id: 4334,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/2/5/2575facad2cd8097db304d232150342d.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/0/3/03bf45ea84ffcc337ff6c52463d39551.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/0/3/03bf45ea84ffcc337ff6c52463d39551.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/0/3/03bf45ea84ffcc337ff6c52463d39551.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'pin-di-n-tho-i-5s-6-6s-7-8-plus',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Pin Điện Thoại 5s 6 6s 7 8 Plus',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Pin Điện Thoại 5s 6 6s 7 8 Plus',
          },
          {
            attribute_code: 'meta_description',
            value: 'Pin Điện Thoại 5s 6 6s 7 8 Plus ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '5',
          },
          {
            attribute_code: 'color',
            value: '49',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2609,
        sku: 'PKSIP12',
        name: 'Bộ Phụ Kiện Bảo Vệ Đầu Sạc Iphone',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:23:22',
        updated_at: '2023-09-19 03:23:22',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '79',
            },
          ],
          configurable_product_options: [
            {
              id: 394,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 53,
                },
                {
                  value_index: 57,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2609,
            },
          ],
          configurable_product_links: [2606, 2607, 2608],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4335,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/s/g/sg-11134201-22100-9qs9mwfkixivc6.jpg',
          },
          {
            id: 4336,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22100-93243chkixiv4f.jpg',
          },
          {
            id: 4337,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22100-idjy5rikixiv6a.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22100-9qs9mwfkixivc6.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22100-9qs9mwfkixivc6.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22100-9qs9mwfkixivc6.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'b-ph-ki-n-b-o-v-d-u-s-c-iphone',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Bộ Phụ Kiện Bảo Vệ Đầu Sạc Iphone',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Bộ Phụ Kiện Bảo Vệ Đầu Sạc Iphone',
          },
          {
            attribute_code: 'meta_description',
            value: 'Bộ Phụ Kiện Bảo Vệ Đầu Sạc Iphone ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '10',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2613,
        sku: 'G3D12',
        name: 'Ốp Điện Thoại Màu Kẹo Trơn Hình Gấu 3D',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:25:54',
        updated_at: '2023-09-19 03:25:54',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '80',
            },
          ],
          configurable_product_options: [
            {
              id: 395,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 53,
                },
              ],
              product_id: 2613,
            },
            {
              id: 396,
              attribute_id: '150',
              label: 'Format',
              position: 1,
              values: [
                {
                  value_index: 222,
                },
                {
                  value_index: 223,
                },
                {
                  value_index: 224,
                },
              ],
              product_id: 2613,
            },
          ],
          configurable_product_links: [2610, 2611, 2612],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4344,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/s/g/sg-11134201-22100-uqtgwsi55siv64.jpg',
          },
          {
            id: 4345,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22100-x0qyoxj55sivcf.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22100-uqtgwsi55siv64.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22100-uqtgwsi55siv64.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22100-uqtgwsi55siv64.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'p-di-n-tho-i-mau-k-o-tron-hinh-g-u-3d',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Ốp Điện Thoại Màu Kẹo Trơn Hình Gấu 3D',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Ốp Điện Thoại Màu Kẹo Trơn Hình Gấu 3D',
          },
          {
            attribute_code: 'meta_description',
            value: 'Ốp Điện Thoại Màu Kẹo Trơn Hình Gấu 3D ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '3',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2617,
        sku: 'LBVC12',
        name: 'Len bao ve camera',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:27:34',
        updated_at: '2023-09-19 03:27:34',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '80',
            },
          ],
          configurable_product_options: [
            {
              id: 397,
              attribute_id: '150',
              label: 'Format',
              position: 0,
              values: [
                {
                  value_index: 222,
                },
                {
                  value_index: 223,
                },
                {
                  value_index: 224,
                },
              ],
              product_id: 2617,
            },
          ],
          configurable_product_links: [2614, 2615, 2616],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4346,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/2/4/243d068391de4b605dc93200cbfb109c.jpg',
          },
          {
            id: 4347,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/a/a/aaaaeb9e90d736d0c0300f6b2b3f2661.jpg',
          },
          {
            id: 4348,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/b/9/b96d749a9d9e5ca3de0c8ddbe6db86f3.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/2/4/243d068391de4b605dc93200cbfb109c.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/2/4/243d068391de4b605dc93200cbfb109c.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/2/4/243d068391de4b605dc93200cbfb109c.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'len-bao-ve-camera',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Len bao ve camera',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Len bao ve camera',
          },
          {
            attribute_code: 'meta_description',
            value: 'Len bao ve camera ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '22',
          },
          {
            attribute_code: 'color',
            value: '49',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2621,
        sku: 'KCN123',
        name: 'Kính cường lực tự động dán Full màn cho iphone',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:29:31',
        updated_at: '2023-09-19 03:29:31',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '81',
            },
          ],
          configurable_product_options: [
            {
              id: 398,
              attribute_id: '150',
              label: 'Format',
              position: 0,
              values: [
                {
                  value_index: 222,
                },
                {
                  value_index: 223,
                },
                {
                  value_index: 224,
                },
              ],
              product_id: 2621,
            },
          ],
          configurable_product_links: [2618, 2619, 2620],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4349,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/s/g/sg-11134201-22100-ab5ia2pcz8iv96.jpg',
          },
          {
            id: 4350,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22100-e7ufb6rcz8iv88.jpg',
          },
          {
            id: 4351,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22110-c3rae1enxojvc5.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22100-ab5ia2pcz8iv96.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22100-ab5ia2pcz8iv96.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22100-ab5ia2pcz8iv96.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'kinh-cu-ng-l-c-t-d-ng-dan-full-man-cho-iphone',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Kính cường lực tự động dán Full màn cho iphone',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Kính cường lực tự động dán Full màn cho iphone',
          },
          {
            attribute_code: 'meta_description',
            value: 'Kính cường lực tự động dán Full màn cho iphone ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '33',
          },
          {
            attribute_code: 'color',
            value: '49',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2625,
        sku: 'DDBVC123',
        name: 'Nắp đính đá bảo vệ camera sau thích hợp cho iPhone',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:31:11',
        updated_at: '2023-09-19 03:31:11',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '81',
            },
          ],
          configurable_product_options: [
            {
              id: 399,
              attribute_id: '150',
              label: 'Format',
              position: 0,
              values: [
                {
                  value_index: 222,
                },
                {
                  value_index: 223,
                },
                {
                  value_index: 224,
                },
              ],
              product_id: 2625,
            },
          ],
          configurable_product_links: [2622, 2623, 2624],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4352,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/s/g/sg-11134201-22110-ycotezhjiejv76.jpg',
          },
          {
            id: 4353,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22110-sfazjipkw0jv9e.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22110-ycotezhjiejv76.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22110-ycotezhjiejv76.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22110-ycotezhjiejv76.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'n-p-dinh-da-b-o-v-camera-sau-thich-h-p-cho-iphone',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Nắp đính đá bảo vệ camera sau thích hợp cho iPhone',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Nắp đính đá bảo vệ camera sau thích hợp cho iPhone',
          },
          {
            attribute_code: 'meta_description',
            value: 'Nắp đính đá bảo vệ camera sau thích hợp cho iPhone ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '11',
          },
          {
            attribute_code: 'color',
            value: '49',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2626,
        sku: 'ABCD',
        name: 'Dây đai đeo ngực điện thoại, camera hành trình, gopro',
        attribute_set_id: 4,
        price: 49000,
        status: 1,
        visibility: 4,
        type_id: 'simple',
        created_at: '2023-09-19 03:33:10',
        updated_at: '2023-09-19 03:35:43',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '82',
            },
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4354,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/s/g/sg-11134201-22100-m5esjzd8tsive5.jpg',
          },
          {
            id: 4355,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22100-tininvd8tsivd3.jpg',
          },
          {
            id: 4356,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/s/g/sg-11134201-22100-x21grwd8tsivb5.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22100-m5esjzd8tsive5.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22100-m5esjzd8tsive5.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22100-m5esjzd8tsive5.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'day-dai-deo-ng-c-di-n-tho-i-camera-hanh-trinh-gopro',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '0',
          },
          {
            attribute_code: 'has_options',
            value: '0',
          },
          {
            attribute_code: 'meta_title',
            value: 'Dây đai đeo ngực điện thoại, camera hành trình, gopro',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Dây đai đeo ngực điện thoại, camera hành trình, gopro',
          },
          {
            attribute_code: 'meta_description',
            value: 'Dây đai đeo ngực điện thoại, camera hành trình, gopro ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '9',
          },
          {
            attribute_code: 'color',
            value: '49',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
      {
        id: 2629,
        sku: 'IPNV12',
        name: 'Giá kê LAPTOP, MACBOOK, IPAD ',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-19 03:36:49',
        updated_at: '2023-09-19 03:36:49',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '49',
            },
            {
              position: 0,
              category_id: '82',
            },
          ],
          configurable_product_options: [
            {
              id: 400,
              attribute_id: '150',
              label: 'Format',
              position: 0,
              values: [
                {
                  value_index: 225,
                },
                {
                  value_index: 226,
                },
              ],
              product_id: 2629,
            },
          ],
          configurable_product_links: [2627, 2628],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4357,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail', 'swatch_image'],
            file: '/v/n/vn-11134207-7r98o-lkuocn73ts5c1c.jpg',
          },
          {
            id: 4358,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7r98o-lkuocn73wla863.jpg',
          },
          {
            id: 4359,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134211-7r98o-lkuwjzhmskppcf.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/v/n/vn-11134207-7r98o-lkuocn73ts5c1c.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/v/n/vn-11134207-7r98o-lkuocn73ts5c1c.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/v/n/vn-11134207-7r98o-lkuocn73ts5c1c.jpg',
          },
          {
            attribute_code: 'swatch_image',
            value: '/v/n/vn-11134207-7r98o-lkuocn73ts5c1c.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'gia-ke-laptop-macbook-ipad',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Giá kê LAPTOP, MACBOOK, IPAD ',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Giá kê LAPTOP, MACBOOK, IPAD ',
          },
          {
            attribute_code: 'meta_description',
            value: 'Giá kê LAPTOP, MACBOOK, IPAD  ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '34',
          },
          {
            attribute_code: 'color',
            value: '49',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
    ],
  },
  {
    title: 'Thời trang nam',
    data: [
      {
        id: 2105,
        sku: 'QA12',
        name: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 08:41:20',
        updated_at: '2023-09-20 02:41:56',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '57',
            },
            {
              position: 0,
              category_id: '129',
            },
          ],
          configurable_product_options: [
            {
              id: 307,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2105,
            },
            {
              id: 308,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2105,
            },
          ],
          configurable_product_links: [
            2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3505,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            id: 3506,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sn.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'b-qu-n-ao-th-thao-clb-psg',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
          },
          {
            attribute_code: 'meta_description',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '45',
          },
        ],
      },
      {
        id: 2231,
        sku: 'AK12',
        name: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:05:20',
        updated_at: '2023-09-18 11:10:35',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 327,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 52,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2231,
            },
            {
              id: 328,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2231,
            },
          ],
          configurable_product_links: [
            2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226,
            2227, 2228, 2229, 2230,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3711,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail', 'swatch_image'],
            file: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            id: 3712,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lh004pkexgqbc6.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'swatch_image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-cardigan-nam-n-form-r-ng-unisex',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
          },
          {
            attribute_code: 'meta_description',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '44',
          },
        ],
      },
      {
        id: 2242,
        sku: 'AKH12',
        name: 'Áo Khoác HOODIE Nam Nữ ',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:06:55',
        updated_at: '2023-09-18 11:10:20',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 329,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 58,
                },
              ],
              product_id: 2242,
            },
            {
              id: 330,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2242,
            },
          ],
          configurable_product_links: [
            2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3733,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            id: 3734,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/8/1/81f21d11315431eee346d09eae819336.jpg',
          },
          {
            id: 3735,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/9/8/98abfadeeae71f86b1eaf58bef88b2f5.jpg',
          },
          {
            id: 3736,
            media_type: 'image',
            label: null,
            position: 4,
            disabled: false,
            types: [],
            file: '/d/8/d849023642282a1fe52d871a33b459f5.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-hoodie-nam-n',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo Khoác HOODIE Nam Nữ ',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo Khoác HOODIE Nam Nữ ',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo Khoác HOODIE Nam Nữ  ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '55',
          },
        ],
      },
      {
        id: 2253,
        sku: 'DU123',
        name: 'Áo khoác dù nam nữ form rộng cổ đứng',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:08:55',
        updated_at: '2023-09-18 11:11:12',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 331,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2253,
            },
            {
              id: 332,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2253,
            },
          ],
          configurable_product_links: [
            2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3752,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            id: 3753,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb30vzsn9ua5.jpg',
          },
          {
            id: 3754,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb30vzu1ua36.jpg',
          },
          {
            id: 3755,
            media_type: 'image',
            label: null,
            position: 4,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb89vz3lzg4f.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-du-nam-n-form-r-ng-c-d-ng',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '39',
          },
        ],
      },
      {
        id: 2269,
        sku: 'NN12-1',
        name: 'o Khoác Thể Thao ba Sọc Nam Nữ',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:15:04',
        updated_at: '2023-09-18 11:15:04',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 333,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 53,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2269,
            },
            {
              id: 334,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2269,
            },
          ],
          configurable_product_links: [
            2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264,
            2265, 2266, 2267, 2268,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3771,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            id: 3772,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134201-23020-fropjr32xlnv8d.jpg',
          },
          {
            id: 3773,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134201-23020-trfce9x2xlnv67.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'o-khoac-th-thao-ba-s-c-nam-n',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ',
          },
          {
            attribute_code: 'meta_description',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '23',
          },
        ],
      },
      {
        id: 2280,
        sku: 'BB123',
        name: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:17:41',
        updated_at: '2023-09-18 11:17:41',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 335,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 52,
                },
              ],
              product_id: 2280,
            },
            {
              id: 336,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2280,
            },
          ],
          configurable_product_links: [
            2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3784,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            id: 3785,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/f/b/fbbb530417250c55da77081479a28d47.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-bomber-nhung-tam-c-b-ki-u-tron',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '34',
          },
        ],
      },
    ],
  },
  {
    title: 'Thời trang nữ',
    data: [
      {
        id: 2105,
        sku: 'QA12',
        name: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 08:41:20',
        updated_at: '2023-09-20 02:41:56',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '57',
            },
            {
              position: 0,
              category_id: '129',
            },
          ],
          configurable_product_options: [
            {
              id: 307,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2105,
            },
            {
              id: 308,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2105,
            },
          ],
          configurable_product_links: [
            2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3505,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            id: 3506,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sn.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/a/o/aocaulacbo-chinhthuc2023-24-psg-sk.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'b-qu-n-ao-th-thao-clb-psg',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG',
          },
          {
            attribute_code: 'meta_description',
            value: 'BỘ QUẦN ÁO THỂ THAO - CLB PSG ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '17',
          },
        ],
      },
      {
        id: 2231,
        sku: 'AK12',
        name: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:05:20',
        updated_at: '2023-09-18 11:10:35',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 327,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 52,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2231,
            },
            {
              id: 328,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2231,
            },
          ],
          configurable_product_links: [
            2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226,
            2227, 2228, 2229, 2230,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3711,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail', 'swatch_image'],
            file: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            id: 3712,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lh004pkexgqbc6.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'swatch_image',
            value: '/s/g/sg-11134201-22110-9fdimwoh6cjvdb.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-cardigan-nam-n-form-r-ng-unisex',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex',
          },
          {
            attribute_code: 'meta_description',
            value: 'ÁO kHOÁC CARDIGAN Nam Nữ Form Rộng Unisex ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '5',
          },
        ],
      },
      {
        id: 2242,
        sku: 'AKH12',
        name: 'Áo Khoác HOODIE Nam Nữ ',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:06:55',
        updated_at: '2023-09-18 11:10:20',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 329,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 58,
                },
              ],
              product_id: 2242,
            },
            {
              id: 330,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2242,
            },
          ],
          configurable_product_links: [
            2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3733,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            id: 3734,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/8/1/81f21d11315431eee346d09eae819336.jpg',
          },
          {
            id: 3735,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/9/8/98abfadeeae71f86b1eaf58bef88b2f5.jpg',
          },
          {
            id: 3736,
            media_type: 'image',
            label: null,
            position: 4,
            disabled: false,
            types: [],
            file: '/d/8/d849023642282a1fe52d871a33b459f5.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/4/2/42f4dc4d8b58f2b59c0aeb5c56367ec3.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-hoodie-nam-n',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo Khoác HOODIE Nam Nữ ',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo Khoác HOODIE Nam Nữ ',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo Khoác HOODIE Nam Nữ  ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '59',
          },
        ],
      },
      {
        id: 2253,
        sku: 'DU123',
        name: 'Áo khoác dù nam nữ form rộng cổ đứng',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:08:55',
        updated_at: '2023-09-18 11:11:12',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 331,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2253,
            },
            {
              id: 332,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2253,
            },
          ],
          configurable_product_links: [
            2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3752,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            id: 3753,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb30vzsn9ua5.jpg',
          },
          {
            id: 3754,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb30vzu1ua36.jpg',
          },
          {
            id: 3755,
            media_type: 'image',
            label: null,
            position: 4,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134207-7qukw-lisb89vz3lzg4f.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/v/n/vn-11134207-7qukw-lisb30vzr8pe2f.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-du-nam-n-form-r-ng-c-d-ng',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo khoác dù nam nữ form rộng cổ đứng ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '72',
          },
        ],
      },
      {
        id: 2269,
        sku: 'NN12-1',
        name: 'o Khoác Thể Thao ba Sọc Nam Nữ',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:15:04',
        updated_at: '2023-09-18 11:15:04',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 333,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 53,
                },
                {
                  value_index: 59,
                },
              ],
              product_id: 2269,
            },
            {
              id: 334,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2269,
            },
          ],
          configurable_product_links: [
            2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264,
            2265, 2266, 2267, 2268,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3771,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            id: 3772,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134201-23020-fropjr32xlnv8d.jpg',
          },
          {
            id: 3773,
            media_type: 'image',
            label: null,
            position: 3,
            disabled: false,
            types: [],
            file: '/v/n/vn-11134201-23020-trfce9x2xlnv67.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/v/n/vn-11134201-23020-4lcbcmz2xlnvc1.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'o-khoac-th-thao-ba-s-c-nam-n',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ',
          },
          {
            attribute_code: 'meta_description',
            value: 'o Khoác Thể Thao ba Sọc Nam Nữ ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '93',
          },
        ],
      },
      {
        id: 2280,
        sku: 'BB123',
        name: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
        attribute_set_id: 4,
        price: 0,
        status: 1,
        visibility: 4,
        type_id: 'configurable',
        created_at: '2023-09-18 11:17:41',
        updated_at: '2023-09-18 11:17:41',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '2',
            },
            {
              position: 0,
              category_id: '41',
            },
            {
              position: 0,
              category_id: '42',
            },
          ],
          configurable_product_options: [
            {
              id: 335,
              attribute_id: '93',
              label: 'Color',
              position: 0,
              values: [
                {
                  value_index: 49,
                },
                {
                  value_index: 52,
                },
              ],
              product_id: 2280,
            },
            {
              id: 336,
              attribute_id: '144',
              label: 'Size',
              position: 1,
              values: [
                {
                  value_index: 166,
                },
                {
                  value_index: 167,
                },
                {
                  value_index: 168,
                },
                {
                  value_index: 169,
                },
                {
                  value_index: 170,
                },
              ],
              product_id: 2280,
            },
          ],
          configurable_product_links: [
            2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279,
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 3784,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail'],
            file: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            id: 3785,
            media_type: 'image',
            label: null,
            position: 2,
            disabled: false,
            types: [],
            file: '/f/b/fbbb530417250c55da77081479a28d47.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/0/3/03c25da8155a0aeb415857997028c987.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'ao-khoac-bomber-nhung-tam-c-b-ki-u-tron',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '1',
          },
          {
            attribute_code: 'has_options',
            value: '1',
          },
          {
            attribute_code: 'meta_title',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
          },
          {
            attribute_code: 'meta_keyword',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn',
          },
          {
            attribute_code: 'meta_description',
            value: 'Áo khoác bomber nhung tăm cổ bẻ kiểu trơn ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '95',
          },
        ],
      },
    ],
  },
  {
    title: 'Vải - May mặc',
    data: [
      {
        id: 3039,
        sku: 'BASS12',
        name: ' Bộ Quần Áo Bầu Và Sau Sinh',
        attribute_set_id: 4,
        price: 69000,
        status: 1,
        visibility: 4,
        type_id: 'simple',
        created_at: '2023-09-20 03:19:19',
        updated_at: '2023-09-20 03:19:19',
        extension_attributes: {
          website_ids: [1],
          category_links: [
            {
              position: 0,
              category_id: '59',
            },
            {
              position: 0,
              category_id: '60',
            },
            {
              position: 0,
              category_id: '140',
            },
          ],
        },
        product_links: [],
        options: [],
        media_gallery_entries: [
          {
            id: 4960,
            media_type: 'image',
            label: null,
            position: 1,
            disabled: false,
            types: ['image', 'small_image', 'thumbnail', 'swatch_image'],
            file: '/f/4/f49e12a5ad009a711ab07dc3afaed579.jpg',
          },
        ],
        tier_prices: [],
        custom_attributes: [
          {
            attribute_code: 'image',
            value: '/f/4/f49e12a5ad009a711ab07dc3afaed579.jpg',
          },
          {
            attribute_code: 'small_image',
            value: '/f/4/f49e12a5ad009a711ab07dc3afaed579.jpg',
          },
          {
            attribute_code: 'thumbnail',
            value: '/f/4/f49e12a5ad009a711ab07dc3afaed579.jpg',
          },
          {
            attribute_code: 'swatch_image',
            value: '/f/4/f49e12a5ad009a711ab07dc3afaed579.jpg',
          },
          {
            attribute_code: 'page_layout',
            value: 'product-full-width',
          },
          {
            attribute_code: 'options_container',
            value: 'container2',
          },
          {
            attribute_code: 'url_key',
            value: 'b-qu-n-ao-b-u-va-sau-sinh',
          },
          {
            attribute_code: 'msrp_display_actual_price_type',
            value: '0',
          },
          {
            attribute_code: 'gift_message_available',
            value: '2',
          },
          {
            attribute_code: 'required_options',
            value: '0',
          },
          {
            attribute_code: 'has_options',
            value: '0',
          },
          {
            attribute_code: 'meta_title',
            value: ' Bộ Quần Áo Bầu Và Sau Sinh',
          },
          {
            attribute_code: 'meta_keyword',
            value: ' Bộ Quần Áo Bầu Và Sau Sinh',
          },
          {
            attribute_code: 'meta_description',
            value: ' Bộ Quần Áo Bầu Và Sau Sinh ',
          },
          {
            attribute_code: 'tax_class_id',
            value: '2',
          },
          {
            attribute_code: 'category_ids',
            value: '1',
          },
          {
            attribute_code: 'color',
            value: '49',
          },
          {
            attribute_code: 'size',
            value: '91',
          },
        ],
      },
    ],
  },
];

export const URL_IMAGE =
  'https://ngantuanphat.vugiasoftware.com/media/catalog/product';
