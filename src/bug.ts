import {AppModule} from "./app/app.module";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
export class bug {
  callbug(){
  platformBrowserDynamic().bootstrapModule(AppModule);
}
}
