declare module 'react-icons' {
  import * as React from 'react';

  export type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

declare module 'react-icons/si' {
  import { IconType } from 'react-icons';

  export const SiAmazonaws: IconType;
  export const SiAnthropic: IconType;
  export const SiDatabricks: IconType;
  export const SiGoogle: IconType;
  export const SiMeta: IconType;
  export const SiOpenai: IconType;
  export const SiSnowflake: IconType;
}

declare module 'react-icons/fa6' {
  import { IconType } from 'react-icons';

  export const FaAws: IconType;
  export const FaMicrosoft: IconType;
}

