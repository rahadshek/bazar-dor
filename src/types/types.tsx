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
