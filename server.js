const admin = require('firebase-admin');
const serviceAccount = require('./restaurantproject-ec149-firebase-adminsdk-ruo2y-cb63429e30.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

//Get for Restaurants

db
  .collection("Restaurants") // the __collection__ would be the name of the collection
  .get() // we call get() to retrieve the data and get a promise back
  .then((querySnapshot) => { // do a then chain, and get back a snapshot object
    return querySnapshot.docs.map((doc) => { // transform the documents 
      return doc.data(); // need to call .data() to convert the document into an object
    });
  })
  .then((data) => {
    console.log(data)
  });

db
  .collection("Restaurants")
  .doc("5gTboqLvSfkS4eVpZE27")
  .get()
  .then((querySnapshot) => {
    return(querySnapshot.data());
  })
  .then((doc) => {
    console.log(doc)
  });


//Get for Reviews

db
  .collection("Reviews") // the __collection__ would be the name of the collection
  .get() // we call get() to retrieve the data and get a promise back
  .then((querySnapshot) => { // do a then chain, and get back a snapshot object
    return querySnapshot.docs.map((doc) => { // transform the documents 
      return doc.data(); // need to call .data() to convert the document into an object
    });
  })
  .then((data) => {
    console.log(data)
  })

  //Get for Users

db
  .collection("Users") // the __collection__ would be the name of the collection
  .get() // we call get() to retrieve the data and get a promise back
  .then((querySnapshot) => { // do a then chain, and get back a snapshot object
    return querySnapshot.docs.map((doc) => { // transform the documents 
      return doc.data(); // need to call .data() to convert the document into an object
    });
  })
  .then((data) => {
    console.log(data)
  })