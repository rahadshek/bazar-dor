export interface INavlinks {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  change: {
    pct: number;
    dir: "up" | "down" | "flat";
  };
}

export interface IProducts {
  id: number;
  slug: string;
  image: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
}
