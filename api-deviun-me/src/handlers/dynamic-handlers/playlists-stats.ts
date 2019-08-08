import ListsModel from '../../models/lists';

interface statsT {
  tracks: number;
  hours: number;
}

interface listItemT {
  item: {
    time: string; // 1h37m example
    songs: number; // count;
  };
}

const playlistsListName = 'playlists';

function parseTime(timeString: string) {
  const parseTimeRegExp = /^(([0-9]+)h)?(([0-9]+)m)$/;
  const [full, hourTag, hours = 0, minTag, minutes] = timeString.match(parseTimeRegExp);

  return {
    hours: Number(hours),
    minutes: Number(minutes),
  };
}

export default async (): Promise<statsT> => {
  const list: listItemT[] = await ListsModel.getAll(playlistsListName, {
    limit: 1000,
  });
  const stats: statsT = {
    hours: 0,
    tracks: 0,
  };

  let allMinutes = 0;

  list.forEach(({ item }) => {
    const { hours, minutes } = parseTime(item.time);

    allMinutes += (hours * 60) + minutes;
    stats.tracks += item.songs;
  });

  stats.hours = Math.floor(allMinutes / 60);

  return stats;
};
