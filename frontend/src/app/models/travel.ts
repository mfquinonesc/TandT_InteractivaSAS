export interface Travel {
  id: number;
  title: string;
  image_cover: string;
  category: {
    id: number;
    name: string;
    image_banner: string;
    url_front: string;
    order: number;
    created: string;
    modified: string;
  };
  status: {
    id: number;
    title: string;
    color: string;
    created: string;
    modified: string;
  };
  tags: {
    id: number;
    name: string;
    created: string;
    modified: string;
  }[];
  date_start: string;
  date_end: string;
  cost: number;
  description: string;
  introduction: string;
  url_front: string;
  created: string;
  modified: string;
}
