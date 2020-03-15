export type ArticleTag =
  | 'cubicCapacity'
  | 'power'
  | 'fuel'
  | 'numSeats'
  | 'doorCount'
  | 'transmission'
  | 'emissionClass'
  | 'sticker'
  | 'firstRegistration'
  | 'climatisation'
  | 'airbag'
  | 'color';

export interface ArticleAttribute {
  label: string;
  tag?: ArticleTag;
  value: string;
}
