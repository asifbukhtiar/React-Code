import { axiosInstance } from "../index";

export const getUserPodcastsLinks = async () => {
  const response = await axiosInstance.get("userPodcastLinks");
  return response.data.data;
};

export const getUserPodcasts = async () => {
  const response = await axiosInstance.get("podcasts");
  return response.data.data;
};

export const refreshPodcast = async (podcastId) => {
  const response = await axiosInstance.post("refreshPodcast", {
    podcast_id: podcastId,
  });
  return response.data;
};

export const getPodcastTodayStats = async (podcastId) => {
  const response = await axiosInstance.get("todayStats", {
    params: {
      podcast_id: podcastId,
    },
  });
  return response.data.data;
};

export const getPodcastLastWeekStats = async (podcastId) => {
  const response = await axiosInstance.get("last7daysStats", {
    params: {
      podcast_id: podcastId,
    },
  });
  return response.data.data;
};

export const getPodcastLastMonthStats = async (podcastId) => {
  const response = await axiosInstance.get("last30daysStats", {
    params: {
      podcast_id: podcastId,
    },
  });
  return response.data.data;
};

export const getPodcastLast3MonthsStats = async (podcastId) => {
  const response = await axiosInstance.get("last90daysStats", {
    params: {
      podcast_id: podcastId,
    },
  });
  return response.data.data;
};

export const searchPodcast = async (searchTerm) => {
  const response = await axiosInstance.post("podcastSearch", {
    term: searchTerm,
  });
  return response.data;
};

export const validatePodcastUrl = async (id) => {
  const response = await axiosInstance.post("validateId", {
    id,
  });
  return response.data;
};

export const generatePodcastUrl = async (feedUrl, id, podcastId) => {
  const response = await axiosInstance.post("v2/generate", {
    feed_url: feedUrl,
    id,
    podcast_id: podcastId,
  });
  return response.data;
};

export const updateAppleEpisodeLink = async (url, episodeId, podcastId) => {
  const response = await axiosInstance.post("updateEpisodeAppleLink", {
    apple_link: url,
    episode_id: episodeId,
    podcast_id: podcastId,
  });
  return response.data;
};
