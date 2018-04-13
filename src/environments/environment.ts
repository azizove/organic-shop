// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBSrkm5g0MUBxhfl6YhLk7hxRjRu6PPEQw",
    authDomain: "trackingdb.firebaseapp.com",
    databaseURL: "https://trackingdb.firebaseio.com",
    projectId: "firebase-trackingdb",
    storageBucket: "firebase-trackingdb.appspot.com",
    messagingSenderId: "698258299177"
  }
};
