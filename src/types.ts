export interface Position {
  x: number;
  y: number;
}

export interface Bot {
  body: Position[];
  dx: number;
  dy: number;
  color: string;
  changeDirectionCounter: number;
}

export interface Direction {
  dx: number;
  dy: number;
}
