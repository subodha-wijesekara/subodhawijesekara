"use client";
import styles from "./Contact.module.css";

export default function Contact() {
    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const message = formData.get("message") as string;

        // Construct WhatsApp URL
        const phoneNumber = "94715451654";
        const text = `Hi, I'm ${name}. ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Get in Touch</h2>
                <p className={styles.text}>
                    Have a project in mind or just want to say hello? Send me a message on WhatsApp.
                </p>

                <form className={styles.form} onSubmit={handleSendMessage}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Name</label>
                        <input name="name" type="text" placeholder="Your Name" className={styles.input} required />
                    </div>

                    {/* Email field removed as requested */}

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Message</label>
                        <textarea name="message" placeholder="Your message..." className={styles.textarea} required></textarea>
                    </div>

                    <button type="submit" className={styles.button}>Send via WhatsApp</button>
                </form>
            </div>
        </section>
    );
}
