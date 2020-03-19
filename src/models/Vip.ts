import { IArticleAttribute } from './ArticleAttribute';
import { IArticleImage } from './ArticleImage';
import { IArticlePrice } from './ArticlePrice';
import { ISeller } from './Seller';

export type Segment = 'Car';

interface IAdmobTargeting {
  make: string;
  model: string;
  dealer: string;
  channel: string;
  price: string;
  ma: string;
  kw: string;
  ez: string;
  intid: string;
  advid: string;
}

export interface IVip {
  id: number;
  sellerId: number;
  title: string;
  makeId: number;
  makeKey: string;
  modelKey: string;
  images: IArticleImage[];
  price: IArticlePrice;
  vat: string;
  contact: ISeller;
  isNew: boolean;
  isConditionNew: boolean;
  isPreRegistration: boolean;
  category: string;
  attributes: IArticleAttribute[];
  features: string[];
  hasDamage: boolean;
  isDamageCase: boolean;
  htmlDescription: string;
  segment: Segment;
  vc: string;
  created: number;
  adMobTargeting: IAdmobTargeting;
}
