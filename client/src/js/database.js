import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database

export const putDb = async (content) => {
  console.error('putDb not implemented');
  
  const dbName = 'jate';
  const dbVersion = 1;

  // Open the database
  const jateDb = await openDB(dbName, dbVersion);

  // Start a read-write transaction
  const tx = jateDb.transaction(dbName, 'readwrite');

  // Access the object store
  const store = tx.objectStore(dbName);

  // Put the content into the store with a specified key (e.g., 1)
  const request = store.put({ id: 1, value: content });

  // Wait for the operation to complete and log the result
  const result = await request;
  console.log('Data is saved to the database', result);
  

};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  const dbName = 'jate';
  const dbVersion = 1;

  // Open the database
  const jateDb = await openDB(dbName, dbVersion);

  // Start a read-only transaction
  const tx = jateDb.transaction(dbName, 'readonly');

  // Access the object store
  const store = tx.objectStore(dbName);

  // Get content from the store using a specified key (e.g., 1)
  const request = store.get(1);

  // Wait for the operation to complete
  const result = await request;

  // Check if data was found and log the result
  if (result) {
    console.log('Data is retrieved', result.value);
  } else {
    console.log('No Data Found');
  }

  return result?.value;
};

initdb();
