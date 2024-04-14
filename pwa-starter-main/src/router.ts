// docs for router https://github.com/thepassle/app-tools/blob/master/router/README.md

import { html } from 'lit';

if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

import { Router } from '@thepassle/app-tools/router.js';
import { lazy } from '@thepassle/app-tools/router/plugins/lazy.js';

// @ts-ignore
import { title } from '@thepassle/app-tools/router/plugins/title.js';

import './pages/app-home.js';

const baseURL: string = (import.meta as any).env.BASE_URL;

export const router = new Router({
    routes: [
      {
        path: resolveRouterPath(),
        title: 'Login',
        plugins: [
          lazy(() => import('./pages/app-login/app-login.js')),
        ],
        render: () => html`<app-login></app-login>`
      },
      {
        path: resolveRouterPath('signup'),
        title: 'Signup',
        plugins: [
          lazy(() => import('./pages/app-login/app-signup.js')),
        ],
        render: () => html`<app-signup></app-signup>`
      },
      {
        path: resolveRouterPath('home'),
        title: 'Home',
        render: () => html`<app-home></app-home>`
      },
      {
        path: resolveRouterPath('profile'),
        title: 'Profile',
        plugins: [
          lazy(() => import('./pages/app-profile/app-profile.js')),
        ],
        render: () => html`<app-profile></app-profile>`
      }
    ]
  });

  // This function will resolve a path with whatever Base URL was passed to the vite build process.
  // Use of this function throughout the starter is not required, but highly recommended, especially if you plan to use GitHub Pages to deploy.
  // If no arg is passed to this function, it will return the base URL.

  export function resolveRouterPath(unresolvedPath?: string) {
    var resolvedPath = baseURL;
    if(unresolvedPath) {
      resolvedPath = resolvedPath + unresolvedPath;
    }

    return resolvedPath;
  }

  export function getActiveTab(currentPath: string): string {
    if (currentPath.startsWith('profile')) {
      return 'profile';
    }
    // Default to 'home' for other paths
    return 'home';
  }