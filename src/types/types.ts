export type loginSignUpType = {
  username?: string;
  password?: string;
};

export type blogPostsType = {
  id: number;
  title: string;
  type: string;
};

export type blogDetailsType = {
  id: number;
  title: string;
  type: string;
  description: string;
};

export type blogEditType = {
  id: number;
  title?: string;
  type?: string;
  description?: string;
};
