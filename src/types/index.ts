export type TNavMenuItem = {
  title: string;
  icon?: any;
  routerPath?: string;
  subitems?: TNavMenuSubitem[];
}

export type TNavMenuSubitem = {
  title: string;
  routerPath: string;
}


export type TImport = {
  id: number;
  cession: any;
  file: {
    name: string;
    url: string;
  };
  credits_count: number;
  status: {
    code: string;
    name: string;
    color: string;
  };
  created_by: {
    id: number;
    username: string;
    fullname: string;
  };
  created_at: string;
}