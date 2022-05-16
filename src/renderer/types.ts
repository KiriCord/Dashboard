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

export type Troil = {
  qliquid: number;
  qnefti: number;
  obvodnen: number;
}

export type MerCum = {
  ql: number;
  qn: number;
  obvod: number;
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

export type MerCumProps = {
  dataMerCum: MerCum[];
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
