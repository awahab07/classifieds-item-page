import { CurrencyCode } from './CurrencyCode';

export type PriceType = 'FIXED';

export interface ArticlePrice {
  large: string;
  grs: {
    amount: number;
    currency: CurrencyCode;
  };
  net: string;
  nt: {
    amount: number;
    currency: CurrencyCode;
  };
  type: PriceType;
  vat: string;
}
