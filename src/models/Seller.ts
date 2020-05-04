import { CountryCode } from './CountryCode';
import { ILonLat } from './LonLat';

export type DealerTypeEnumKeys = 'DEALER';

export enum SellerTypeEnumType {
  DEALER = 'DEALER'
}

export enum SellerType {
  DEALER = 'dealer'
}

export enum SellePhoneType {
  PHONE1 = 'PHONE1'
}

export interface ISellerPhone {
  type: SellePhoneType;
  number: string;
  uri: string;
}

export interface ISeller {
  type: SellerType;
  country: CountryCode;
  enumType: SellerTypeEnumType;
  name: string;
  address1: string;
  address2: string;
  phones: ISellerPhone[];
  latLong: ILonLat;
  withMobileSince: string;
  imprint: string;
  canSendCcMail: boolean;
}
