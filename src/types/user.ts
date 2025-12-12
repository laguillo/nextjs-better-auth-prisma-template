export type userType = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | Blob | undefined;
  role: string;
  banned: boolean;
  banReason: string | null;
  createdAt: Date;
  updatedAt: Date;
};
