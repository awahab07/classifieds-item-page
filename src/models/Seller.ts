import { CountryCode } from './CountryCode';
import { LonLat } from './LonLat';

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

export interface SellerPhone {
  type: SellePhoneType;
  number: string;
  uri: string;
}

export interface Seller {
  type: SellerType;
  country: CountryCode;
  enumType: SellerTypeEnumType;
  name: string;
  address1: string;
  address2: string;
  phones: SellerPhone[];
  latLong: LonLat;
  withMobileSince: string;
  imprint: string;
  canSendCcMail: boolean;
}
