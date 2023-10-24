export type PagingType = {
  pageNumber: number;
  totalPages: number;
  onClick: (newPages: number) => void;
};
