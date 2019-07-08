import fetchPolyfill from 'node-fetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const API_SERVER = publicRuntimeConfig.API_SERVER;
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
    return this.request('/object/photoGrid');
  }
  
  static async getNotes() {
    return this.request('/list/notes');
  }

  static async getPlaylists() {
    return this.request('/list/playlists');
  }

  static async getDeveloperProfile() {
    return this.request('/object/developerProfile');
  }
  
  static async getCVHistory() {
    return this.request('/object/CVHistory');
  }

  static async getOpenSourceList() {
    return this.request('/object/openSourceList');
  }
  
  static async getSkillList() {
    return this.request('/object/skillList');
  }
}
