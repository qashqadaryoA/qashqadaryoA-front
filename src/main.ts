import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
// setTimeout(() => {
//   const loadingElement = document.querySelector(".app-loading");

//   platformBrowserDynamic()
//     .bootstrapModule(AppModule)
//     .then(() => loadingElement!.classList.add("lds-dual-ring"))
//     .then(() => setTimeout(() => loadingElement!.remove(), 1000));
// }, 2000);