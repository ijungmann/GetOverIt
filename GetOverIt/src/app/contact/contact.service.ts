import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor(private contacts: Contacts) { }

  createDummyData() {
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );
  }



}
