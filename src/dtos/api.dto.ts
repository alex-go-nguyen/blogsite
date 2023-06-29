export type PaginationOption = {
  page?: number;
  pageSize?: number;
};

export type SearchAPIProps = {
  query: string;
  options: PaginationOption;
  sort?: string;
};
<<<<<<< HEAD

export type FilterArticlesProps = {
  id: number;
  options: PaginationOption;
  sort?: string;
};
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
