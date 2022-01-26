import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { AuthContext } from "../../network/firebase/context";
import { getUserPodcasts } from "../../network/apis/Podcast";
import PodcastCard from "../../components/PodcastCard";
import "./profile.scss";

function Profile({ t, i18n }) {
  const [userPodcasts, setUserPodcasts] = useState();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserPodcasts = async () => {
      const podcasts = await getUserPodcasts();
      setUserPodcasts(podcasts);
    };
    fetchUserPodcasts();
  }, []);

  return (
    <div className="row d-flex justify-content-center align-self-center vh-50 vertical-align mt-2">
      <div className="col-md-5">
        <label style={{ textAlign: i18n.dir() === "rtl" && "right" }}>
          {t("signin.email")}
        </label>
        <input
          dir={i18n.dir()}
          className="form-control"
          disabled={true}
          value={user?.usermail}
        />
        <label style={{ textAlign: i18n.dir() === "rtl" && "right" }}>
          {t("signin.name")}
        </label>
        <input
          dir={i18n.dir()}
          className="form-control"
          disabled={true}
          value={user?.username}
        />
        <label style={{ textAlign: i18n.dir() === "rtl" && "right" }}>
          {t("profile.userPodcasts")}
        </label>
        <div id="podcasts">
          {userPodcasts?.map((podcast) => {
            return (
              <>
                <PodcastCard
                  podcast={{ ...podcast, image: podcast.image_url }}
                />
                <div id="spacer" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Profile);
