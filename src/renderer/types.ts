export type Mer = {
  charwork: number;
  dt: string;
  gas: number;
  liq: number;
  oil: number;
  priem: number;
}

export type ChartProps = {
  data: Mer[];
}

export type InfoWellProps = {
  WellId: string;
}

export type isOnlineProps = {
  isOnline: boolean;
}
