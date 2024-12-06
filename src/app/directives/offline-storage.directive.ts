import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOfflineStorage]',
})
export class OfflineStorageDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  saveDataToIndexedDB(key: string, data: any) {
    const request = indexedDB.open('news-reader-db', 1);

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction('news', 'readwrite');
      const objectStore = transaction.objectStore('news');
      objectStore.put(data, key);
    };
  }

  readDataFromIndexedDB(key: string) {
    const request = indexedDB.open('news-reader-db', 1);
    request.onsuccess = (event: Event) => {
      const target = event.target as IDBRequest; 
      if (target.result) {
        return target.result;
      } else {
        console.error('No result found in IndexedDB.');
      }
    };

    request.onerror = (event: Event) => {
      console.error('Error reading from IndexedDB', event);
    };
  }
}
