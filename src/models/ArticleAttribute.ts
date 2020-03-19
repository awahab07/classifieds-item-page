export type IArticleTag =
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

export interface IArticleAttribute {
  label: string;
  tag?: IArticleTag;
  value: string;
}
