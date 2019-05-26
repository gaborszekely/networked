import { Component, OnInit } from "@angular/core";
import { ContactStoreService } from "src/app/services/contact-store.service";
import { UserNote } from "src/app/models/UserNote";
import { ContactService } from "src/app/services/contact.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Observable } from "rxjs";
import { Contact } from "../../models/Contact";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
  animations: [
    trigger("fadeInOut", [
      state(
        "void",
        style({
          opacity: 0
        })
      ),
      transition("void <=> *", animate(200))
    ])
  ]
})
export class NotesComponent implements OnInit {
  notesByUser: UserNote[];
  contacts$: Observable<Contact[]>;

  constructor(
    // private contactStore: ContactStoreService,
    private contactService: ContactService,
    private store: Store<AppState>
  ) {
    this.contacts$ = store.select("contacts");
  }

  ngOnInit() {
    // this.contactStore.contacts$.subscribe(contacts => {
    this.contacts$.subscribe(contacts => {
      this.notesByUser = contacts.reduce((acc, contact) => {
        contact.notes.forEach(async note => {
          const githubInfo = await this.contactService.getGithub(contact.github);
          const github_avatar = githubInfo.avatar_url;
          acc.push({ user: contact, note, github_avatar });
        });
        return acc;
      }, []);
    });
  }
}
