import styles from "./styles/RedirectAppCard.module.css";

type RedirectAppCardProps = {
    appInfo: RedirectAppInfo;
};

interface RedirectAppInfo {
    id: string
    title: string;
    version: string;
    description: string;
    link: string;
    imageSource: string;
    imageDescription: string;
}

const RedirectAppCard = (props: RedirectAppCardProps) => {
    return (
        <a href={props.appInfo.link} className={styles.redirectAppCard} id={props.appInfo.id}>
            <div className={styles.cardStart}>
                <img className={styles.image} src={props.appInfo.imageSource} alt={props.appInfo.imageDescription}/>
            </div>

            <div className={styles.cardMiddle}>
                <div>
                    <h3 className={styles.cardTitle}>{props.appInfo.title}</h3>
                    <p className={styles.appVersion}>{props.appInfo.version}</p>
                </div>
                <p className={styles.cardBodyDescription}>{props.appInfo.description}</p>
            </div>

            <div className={styles.cardEnd}>
                <span className="material-symbols-outlined">open_in_new</span>
            </div>
        </a>
    );
}

export default RedirectAppCard;