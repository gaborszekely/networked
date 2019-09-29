import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Contact } from "@core/models/Contact";
import { Note } from "@core/models/Note";

export enum ContactsActionsEnum {
  ADD_CONTACT_REQUESTED = "[Contacts] Add Contact Requested",
  CONTACT_ADDED = "[Contacts] Add New Contact",
  CONTACT_ADDED_ERROR = "[Contacts] Error Adding New Contact",
  DELETE_CONTACT = "[Contacts] Delete Contact",
  CONTACTS_REQUESTED = "[Contacts] Contacts Requested",
  CONTACTS_LOADED = "[Contacts] Set Contacts",
  CONTACTS_LOAD_ERROR = "[Contacts] Contacts Load Error",
  CLEAR_CONTACTS = "[Contacts] Clear Contacts List",
  UPDATE_CONTACT = "[Contacts] Update Contact",
  ADD_NOTE = "[Contacts] Add Note For a Contact",
  DELETE_NOTE = "[Contacts] Delete Note For a Contact"
}

export interface IAddNote {
  id: string;
  note: Note;
}

export interface IDeleteNote {
  id: string;
  noteId: string;
}

export class AddContactRequested implements Action {
  readonly type = ContactsActionsEnum.ADD_CONTACT_REQUESTED;
  constructor(public contact: Contact) {}
}

export class ContactAdded implements Action {
  readonly type = ContactsActionsEnum.CONTACT_ADDED;
  constructor(public payload: Contact) {}
}

export class ContactAddedError implements Action {
  readonly type = ContactsActionsEnum.CONTACT_ADDED_ERROR;
}

export class AddNote implements Action {
  readonly type = ContactsActionsEnum.ADD_NOTE;
  constructor(public payload: IAddNote) {}
}

export class DeleteNote implements Action {
  readonly type = ContactsActionsEnum.DELETE_NOTE;
  constructor(public payload: IDeleteNote) {}
}

export class UpdateContact implements Action {
  readonly type = ContactsActionsEnum.UPDATE_CONTACT;
  constructor(public payload: Contact) {}
}

export class DeleteContact implements Action {
  readonly type = ContactsActionsEnum.DELETE_CONTACT;
  constructor(public payload: string) {}
}

export class ClearContacts implements Action {
  readonly type = ContactsActionsEnum.CLEAR_CONTACTS;
}

export class ContactsRequested implements Action {
  readonly type = ContactsActionsEnum.CONTACTS_REQUESTED;
}

export class ContactsLoaded implements Action {
  readonly type = ContactsActionsEnum.CONTACTS_LOADED;
  constructor(public payload: Contact[]) {}
}

export class ContactsLoadError implements Action {
  readonly type = ContactsActionsEnum.CONTACTS_LOAD_ERROR;
}

export type ContactsActions =
  | AddContactRequested
  | ContactAdded
  | ContactAddedError
  | DeleteContact
  | ContactsRequested
  | ContactsLoaded
  | ContactsLoadError
  | ClearContacts
  | UpdateContact
  | AddNote
  | DeleteNote;