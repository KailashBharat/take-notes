import { Note, CreateNote } from "@/types";
import { getId } from "@/helpers";

const gateway = import.meta.env.VITE_GATEWAY;
let userId = localStorage.getItem("userId");

export async function createNote(note: CreateNote): Promise<Note | null> {
  try {
    const url = new URL(`${gateway}/notes`);

    if (!userId) {
      userId = getId();
    }

    const reqInit: RequestInit = {
      body: JSON.stringify({ ...note, userId }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };

    const res = await fetch(url, reqInit);
    const newNote: Note = await res.json();

    return newNote;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateNote(note: Note): Promise<Note | null> {
  try {
    const url = new URL(`${gateway}/notes/${note._id}`);
    const reqInit: RequestInit = {
      body: JSON.stringify({
        title: note.title,
        description: note.description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    };

    const res = await fetch(url, reqInit);
    const updatedNote: Note = await res.json();

    return updatedNote;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteNote(id: string): Promise<Note | null> {
  try {
    const url = new URL(`${gateway}/notes/${id}`);
    const reqInit: RequestInit = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    };
    const res = await fetch(url.toString(), reqInit);
    const updatedNote: Note = await res.json();

    return updatedNote;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getNotes(): Promise<Note[]> {
  try {
    const url = new URL(`${gateway}/notes`);

    if (!userId) {
      userId = getId();
    }

    url.searchParams.append("userId", userId as string);

    const res = await fetch(url);
    const notes: Note[] = await res.json();

    return notes;
  } catch (error) {
    console.error(error);
    return [];
  }
}
