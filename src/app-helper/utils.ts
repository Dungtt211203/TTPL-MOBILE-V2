import numeral from 'numeral';
import _ from 'lodash';
const lamTronDenHangNghin = (so: number) => {
  return Math.floor(so / 1000) * 1000;
};

export const formatAssetPrice = (price: any, decimals: number = 4) => {
  if (price == null || price == undefined) return 0;
  if (typeof price === 'number') {
    return numeral(price.toFixed(decimals))
      .format('0,0[.]0[0000]')
      .toString()
      .toUpperCase();
  } else {
    let price_ = parseFloat(price);
    return numeral(price_.toFixed(decimals))
      .format('0,0[.]0[0000]')
      .toString()
      .toUpperCase();
  }
};

export const formatAssetPrice2 = (price: number, decimals: number = 4) => {
  let price_ = lamTronDenHangNghin(price);
  return numeral(price_.toFixed(decimals))
    .format('0,0[.]0[0000]')
    .toString()
    .toUpperCase();
};

export const shortenText = (text: string) => {
  if (text && text.length > 15) {
    return text.substr(0, 7) + '...' + text.substr(text.length - 7, 7);
  }

  return text;
};

export const shortText = (text: string, length: number = 10) => {
  if (text && text.length > length) {
    return text.substring(0, length) + '...';
  }

  return text;
};

export const shortPrice = (price: number) => {
  let value =
    price < 1
      ? numeral(price).format('0,0.0[00000]').toString().toUpperCase()
      : numeral(price).format('0,0[.]0[0]a').toString().toUpperCase();

  if (value === 'NAN' || value === '0.0') {
    return 0;
  }

  return value;
};

export const randomColor = (): string => {
  let color =
    '#' +
    (
      (((1 << 23) + (1 << 22) + (1 << 21) + (1 << 20)) * _.random(0.2, 1)) |
      0
    ).toString(16);
  if (color.toLowerCase() === '#1e2026') {
    color = '#d6c7cc';
  } else if (color.toUpperCase() === '#FFFAF8') {
    color = '#e0316c';
  }
  return color;
};

export const removeVietnameseTones = (str: string) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  str = str.replace(/Ư/g, 'W');
  str = str.replace(/ư/g, 'w');
  str = str.replace(/“|‘|¥|€|'|•/g, '');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, '');
  str = str.replace(' ', '');
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  // str = str.replace(/!|@|%|₫|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, "");
  return str;
};

interface AddressParts {
  street: string;
  number: string;
  lane: string;
  ward: string;
  district: string;
  city: string;
  country: string;
}

export const formatVietnameseAddress = (inputAddress: any) => {
  // Tách các phần của địa chỉ bằng dấu '/'
  const parts = inputAddress.split('/');

  // Lấy ra số nhà và Tổ (nếu có)
  const street = parts.shift().trim();

  // Lấy ra Tổ (nếu có)
  const to = parts.shift();

  // Tách thành từng phần của địa chỉ còn lại
  const [ward, district, city, country] = parts.map((part: string) =>
    part.trim(),
  );

  // Gộp các phần đã tách để tạo địa chỉ mới
  const formattedAddress = [street, to, ward, district, city, country]
    .filter(Boolean)
    .join(', ');

  return formattedAddress;
};
