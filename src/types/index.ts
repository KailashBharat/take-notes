export type Note = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

export type CreateNote = {
  -readonly [Property in keyof Note as Exclude<Property, "id">]: Note[Property];
};
