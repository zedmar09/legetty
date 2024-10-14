import React, { PropsWithChildren } from 'react';

export interface TypographyProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variation?:
    | 'title0'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'paragraph'
    | 'description1'
    | 'description2'
    | 'description3';
  bold?: boolean;
}

const Typography: React.FC<PropsWithChildren<TypographyProps>> = (props) => {
  const { variation = 'paragraph', className, bold, children } = props;

  let additionalClass = '';

  if (bold) additionalClass += ' font-bold';
  if (className) additionalClass += ` ${className}`;

  switch (variation) {
    case 'title0':
      return <h1 className={`text-title0${additionalClass}`}>{children}</h1>;
    case 'title1':
      return <h2 className={`text-title1${additionalClass}`}>{children}</h2>;
    case 'title2':
      return <h3 className={`text-title2${additionalClass}`}>{children}</h3>;
    case 'title3':
      return <h4 className={`text-title3${additionalClass}`}>{children}</h4>;
    case 'paragraph':
      return <p className={`text-paragraph${additionalClass}`}>{children}</p>;
    case 'description1':
      return <p className={`text-description1${additionalClass}`}>{children}</p>;
    case 'description2':
      return <p className={`text-description2${additionalClass}`}>{children}</p>;
    case 'description3':
      return <p className={`text-description3 uppercase${additionalClass}`}>{children}</p>;
    default:
      return <p>{children}</p>;
  }
};

export default Typography;
