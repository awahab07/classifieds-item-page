import axios, { AxiosResponse } from 'axios';
import { config } from '../config';
import { IVip } from '../models/Vip';

export const getVip = (): Promise<IVip> =>
  axios
    .get<IVip>(`${config.articles.baseUrl}`)
    .then((res: AxiosResponse<IVip>): IVip => res.data);
