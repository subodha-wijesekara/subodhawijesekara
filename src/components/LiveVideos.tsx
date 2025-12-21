"use client";

import styles from "./LiveVideos.module.css";

const VIDEOS = [
    {
        id: 1,
        title: "Project Walkthrough",
        description: "A comprehensive look at the features and architecture of my latest project.",
        url: "https://www.youtube.com/embed/8IRB2T6YKqE"
    },
    // Add more videos here as you develop them
];

export default function LiveVideos() {
    return (
        <div className={styles.grid}>
            {VIDEOS.map((video) => (
                <div key={video.id} className={styles.card}>
                    <div className={styles.videoWrapper}>
                        <iframe
                            className={styles.iframe}
                            src={video.url}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{video.title}</h3>
                        <p className={styles.description}>{video.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
