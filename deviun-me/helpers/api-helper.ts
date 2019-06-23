import fetchPolyfill from 'node-fetch';

const API_SERVER = process.env.API_SERVER;
const fetch = typeof window !== 'undefined' ? window.fetch : fetchPolyfill;

const getUrl = (path: string) => `${API_SERVER}${path}`;

export default class API {
  static async request(path: string) {
    let res: any;
    let ok: any;
    let result: any;

    try {
      res = await fetch(getUrl(path));
      ({ ok, result } = await res.json());
    } catch (err) {
      ok = false;
      result = err;
    }

    return { ok, result };
  }

  static async getMainPageInfo() {
    return this.request('/object/mainPageInfo');
  }

  static async getPhotoGrid() {
    return this.request('/object/photoGrip');
  }
}
