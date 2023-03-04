import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./chat-container/chat-container.module').then(
        (m) => m.ChatContainerModule
      ),
  },
];
