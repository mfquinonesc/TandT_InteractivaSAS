export interface Company {
  id: number;
  name: string;
  description: string;
  image_description: string | null;
  logo: string;
  email: string;
  phone: string;
  whatsapp_number: string;
  direction: string;
  facebook_account: string;
  instagram_account: string;
  feed_instagram: {
    id: number;
    image: string;
    order: number;
    created: string;
    modified: string;
  }[];
  tiktok_account: string;
  youtube_account: string;
  primary_color: string;
  secundary_color: string;
  created: string;
  modified: string;
}
