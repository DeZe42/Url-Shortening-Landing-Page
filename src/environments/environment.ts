// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: "https://api.shrtco.de/v2/shorten",
  firebase: {
    apiKey: "AIzaSyBElj5TzI-50PADG0_RBYyOq2HSLMrq0VQ",
    authDomain: "url-shortening-landing-page.firebaseapp.com",
    projectId: "url-shortening-landing-page",
    storageBucket: "url-shortening-landing-page.appspot.com",
    messagingSenderId: "662703678745",
    appId: "1:662703678745:web:64a7fc6af0d976b4311188",
    measurementId: "G-CKHY65THN7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
