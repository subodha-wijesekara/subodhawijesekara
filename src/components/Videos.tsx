"use client";

import styles from "./Videos.module.css";

const VIDEOS = [
    {
        id: 1,
        title: "Project Walkthrough",
        url: "https://www.youtube.com/embed/8IRB2T6YKqE"
    }
];

export default function Videos() {
    return (
        <section id="videos" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Project Videos</h2>
                <p>Watch demos and walkthroughs of my projects.</p>
            </div>

            <div className={styles.gallery}>
                {VIDEOS.map((video) => (
                    <div key={video.id} className={styles.videoWrapper}>
                        <iframe
                            className={styles.iframe}
                            src={video.url}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
