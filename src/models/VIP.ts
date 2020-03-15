import { ArticleAttribute } from './ArticleAttribute';
import { ArticleImage } from './ArticleImage';
import { ArticlePrice } from './ArticlePrice';
import { Seller } from './Seller';

export type Segment = 'Car';

interface AdmobTargeting {
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

export interface VIP {
  id: number;
  sellerId: number;
  title: string;
  makeId: number;
  makeKey: string;
  modelKey: string;
  images: ArticleImage[];
  price: ArticlePrice;
  vat: string;
  contact: Seller;
  isNew: boolean;
  isConditionNew: boolean;
  isPreRegistration: boolean;
  category: string;
  attributes: ArticleAttribute[];
  features: string[];
  hasDamage: boolean;
  isDamageCase: boolean;
  htmlDescription: string;
  segment: Segment;
  vc: string;
  created: number;
  adMobTargeting: AdmobTargeting;
}
