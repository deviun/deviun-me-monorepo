import fetchPolyfill from 'node-fetch';
import getConfig from 'next/config';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

const { API_SERVER = '' } = publicRuntimeConfig || {};
const { INTERNAL_API_SERVER = '' } = serverRuntimeConfig || {};
const fetch = typeof window !== 'undefined' ? window.fetch : fetchPolyfill;

const getUrl = (path: string) => `${INTERNAL_API_SERVER || API_SERVER}${path}`;

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

  static async getPlaylistsChannel() {
    return this.request('/object/playlistsChannel');
  }
  
  static async getPlaylistsStats() {
    return this.request('/dynamic/playlistsStats');
  }
}
