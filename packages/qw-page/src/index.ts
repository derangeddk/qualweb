import { QWPage } from './QWPage.object.ts';
declare global {
  interface Window {
    qwPage: QWPage;
  }
}

export { QWPage };
