export type Address = {
  id: number;
  firstname: string;
  lastname: string;
  street: string;
  place: string;
  zip: string;
  country: string;
};

export type CreateAddress = Omit<Address, 'id'>;
