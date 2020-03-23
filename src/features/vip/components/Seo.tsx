import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { IVip } from '../../../models/Vip';
import { ISliderImageProps } from '../../../shared/ImageSlider';

const Seo: FunctionComponent<{
  vip: IVip | null;
  images: ISliderImageProps[];
  url: string;
}> = (props: { vip: IVip | null; images: ISliderImageProps[]; url: string }) => {
  const { vip, url } = props;
  const description = `Category: ${vip?.category}, year: ${vip?.modelKey} details: ${vip?.htmlDescription}}`;
  const images = props.images ?? [];
  const keywords = [vip?.modelKey, vip?.makeKey, ...(vip?.features || [])];
  return (
    <>
      <Helmet>{vip === undefined ? <title>{`Mobile.de | Cars<`}</title> : null}</Helmet>

      {vip !== undefined ? (
        <Helmet>
          <title>{`Mobile.de | Cars | ${vip?.title}`}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords.join(',')} />
          <script type="application/ld+json">
            {vip !== null ? JSON.stringify(getProductRichResultSchema(vip, images, url)) : ''}
          </script>
        </Helmet>
      ) : null}
    </>
  );
};

export default Seo;

const getProductRichResultSchema = (vip: IVip, images: ISliderImageProps[], url: string) => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: vip.title,
  image: images.map((im: ISliderImageProps) => `https:${im.fullScreenUrl}`),
  description: vip.htmlDescription,
  sku: vip.id?.toString(),
  mpn: vip.makeId?.toString(),
  brand: {
    '@type': 'Brand',
    name: vip.makeKey?.toString(),
  },
  offers: {
    '@type': 'Offer',
    url,
    priceCurrency: vip.price?.nt?.currency,
    price: vip.price?.nt?.amount?.toString(),
    itemCondition: vip.isConditionNew
      ? 'https://schema.org/NewCondition'
      : 'https://schema.org/UsedCondition',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': vip.contact.type?.toString(),
      name: vip.contact.name,
    },
  },
});
