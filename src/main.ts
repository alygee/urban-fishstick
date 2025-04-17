import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [NG_EVENT_PLUGINS],
  })
  .catch((err) => console.error(err));
