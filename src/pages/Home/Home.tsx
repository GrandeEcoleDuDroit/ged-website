import "./Home.css"
import RedirectAppCard from "../../components/RedirectAppCard.tsx";
import androidLogo from "../../assets/logo/android-logo.svg"
import appleLogo from "../../assets/logo/apple-logo.svg"
import {useEffect, useState} from "react";

const Home = () => {
    const [androidVersion, setAndroidVersion] = useState<string | null>(null);
    const [iosVersion, setIosVersion] = useState<string | null>(null);

    useEffect(() => {
        getAppVersion("ged-android").then(setAndroidVersion);
        getAppVersion("ged-ios").then(setIosVersion);
    }, []);

    return (
        <main>
            <div className="title-section">
                <h1>Bienvenue !</h1>
                <p id="subtitle">
                    Ce site relaye toutes les informations concernant les applications de
                    la Grande Ecole du Droit.
                </p>
            </div>

            <div className="app-section">
                <RedirectAppCard appInfo={{
                    id: "android-app",
                    title: "La Grande Ecole du Droit",
                    version: androidVersion ?? "",
                    description: "Application mobile pour Android",
                    link: "https://play.google.com/store/apps/details?id=com.upsaclay.gedoise",
                    imageSource: androidLogo,
                    imageDescription: "Logo Android"
                }}/>

                <RedirectAppCard appInfo={{
                    id: "ios-app",
                    title: "La Grande Ecole du Droit",
                    version: iosVersion ?? "",
                    description: "Application mobile pour iOS",
                    link: "https://apps.apple.com/fr/app/la-grande-ecole-du-droit/id6749663727",
                    imageSource: appleLogo,
                    imageDescription: "Logo Apple"
                }}/>
            </div>
        </main>
    )
}

async function getAppVersion(projetName: string): Promise<string | null> {
    const url = `https://api.github.com/repos/GrandeEcoleDuDroit/${projetName}/releases/latest`;
    const result = await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err));

    return result?.tag_name;
}

export default Home