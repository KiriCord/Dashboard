export type Mer = {
  'charwork.name': string;
  dt: string;
  gas: number;
  liq: number;
  oil: number;
  liq_cum: number;
  oil_cum: number;
  zak_cum: number;
  obvod: number;
  priem: number;
}

export type Troil = {
  qliquid: number;
  qnefti: number;
  obvodnen: number;
}

export type Trinj = {
  factpriem: number;
}

export type MerProps = {
  dataMer: Mer[];
}

export type TroilProps =
  {
    dataTroil: Troil[];
  }

export type TrinjProps = {
  dataTrinj: Trinj[];
}


export type InfoWellProps = {
  oilfield: string;
  wellId: string;
}

export type IsOnlineProps = {
  isOnline: boolean;
}
