export interface Job {
  title: string;
  location: string;
  salary: number;
  id: string;
}

export type SearchTerm = "title" | "salary" | "location";
