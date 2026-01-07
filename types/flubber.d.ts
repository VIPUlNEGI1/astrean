declare module 'flubber' {
  export type Interpolator = (t: number) => string;

  export function interpolate(
    fromShape: string,
    toShape: string,
    options?: Record<string, unknown>
  ): Interpolator;
}


