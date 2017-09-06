import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyD8G5y3VVkzL-7KNqsy-PItQjsq46urQv0',
  authDomain: 'mashbot-prod.firebaseapp.com',
  databaseURL: 'https://mashbot-prod.firebaseio.com',
  projectId: 'mashbot-prod',
  storageBucket: 'mashbot-prod.appspot.com',
  messagingSenderId: '962026326344'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
