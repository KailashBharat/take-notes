export type Note = {
  readonly _id: string;
  readonly title: string;
  readonly description: string;
};

export type CreateNote = {
  -readonly [Property in keyof Note as Exclude<
    Property,
    "_id"
  >]: Note[Property];
};

export type Events = {
  rerenderNotes: boolean;
  totalNotes: number;
};
