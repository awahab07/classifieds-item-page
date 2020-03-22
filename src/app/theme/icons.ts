import {
  CheckOutlined,
  LocalGasStationOutlined,
  Room,
  SettingsInputComponentOutlined,
  Speed,
  SvgIconComponent,
} from '@material-ui/icons';
import {
  Airbag,
  AirConditioner,
  Calendar,
  CarDoor,
  CarSeat,
  CarShiftPattern,
  Engine,
  PineTree,
  Spray,
  StickerCircleOutline,
} from 'mdi-material-ui';

interface ILabelIcon<T = string> {
  tag: T;
  icon: SvgIconComponent;
}

export const techAttributeIcons: { [key: string]: ILabelIcon } = {
  mileage: { tag: 'mileage', icon: Speed },
  cubicCapacity: { tag: 'cubic capacity', icon: Engine },
  power: { tag: 'performance', icon: SettingsInputComponentOutlined },
  fuel: { tag: 'fuel type', icon: LocalGasStationOutlined },
  numSeats: { tag: 'number of seats', icon: CarSeat },
  doorCount: { tag: 'number of doors', icon: CarDoor },
  gear: { tag: 'gear', icon: Room },
  transmission: { tag: 'pollutant class', icon: CarShiftPattern },
  emissionClass: { tag: 'environmental badge', icon: PineTree },
  emissionsSticker: { tag: 'environmental badge', icon: StickerCircleOutline },
  firstRegistration: { tag: 'first registration', icon: Calendar },
  climatisation: { tag: 'air conditioning', icon: AirConditioner },
  airbag: { tag: 'Air Bags', icon: Airbag },
  color: { tag: 'color', icon: Spray },
};

export const ArticleGenericFeatureIcon = CheckOutlined;
