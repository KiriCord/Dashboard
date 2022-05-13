export type Mer = {
  charwork: number;
  dt: string;
  gas: number;
  liq: number;
  oil: number;
  priem: number;
}

export type MerSumCum = {
  ql: number;
  qn: number;
  zak: number;
  dt: string;
};

export type Trinj = {
  factpriem: number;
}

export type MerProps = {
  dataMer: Mer[];
}

export type MerSumCumProps = {
  dataMerSumCum: MerSumCum[];
}

export type TrinjProps = {
  dataTrinj: Trinj[];
}

export type InfoWellProps = {
  WellId: string;
}

export type isOnlineProps = {
  isOnline: boolean;
}
