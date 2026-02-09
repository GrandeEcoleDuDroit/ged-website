import "./About.css"
import devMemoji from "../../assets/images/dev-memoji.png"

const About = () => {
    return (
        <main>
            <div className="container">
                <h2>À propos de nous</h2>

                <h3>Notre mission</h3>
                <p>
                    Nous avons pour projet de créer l'application "la Grande
                    École du Droit" afin de traiter un problème récurrent à
                    la GED, soit les difficultés de communication, en
                    centralisant toutes les annonces et missions afin de tout
                    trouver au même endroit. Le projet s'inscrit donc dans
                    l'amélioration de la communication et de la promotion de
                    la GED afin de développer des promotions actives et
                    répondantes présentes aux différents événements de la
                    GED pour assurer leur succès. Il permettrait ainsi de
                    résoudre deux enjeux majeurs que rencontrent
                    aujourd'hui la GED : un manque de communication et de
                    participation.
                    Nous avons travaillé sur la problématique suivante :
                    Comment la mise en place d'une application personnalisée
                    permettra d'améliorer la communication de la GED ?
                    Pour y répondre nous avons étudié les enjeux et les
                    questions techniques mais aussi le coût, la planification
                    ainsi que les questions stratégiques par rapport à la
                    qualité, la continuité du projet. Nous avons créer ce
                    portfolio pour avoir une idée plus visuelle et simple de la
                    manière dont nous imaginons cette application.
                </p>

                <p>
                    — Michaela Quirke, Iris Cohen, Pascale
                    Kaya-Mandzila, Lana Hallouin et
                    Charlotte Boudou.
                </p>

                <section className="team-section">
                    <div className="office-member">
                        <h3>Notre équipe</h3>
                        <h4>Membres du bureau</h4>
                        <figure className="team-figure">
                            <div className="team-caption">
                                <figcaption><strong>Présidente :</strong> Chloé Thai Van</figcaption>
                                <figcaption><strong>Secrétaire générale :</strong> Chirine Moussa</figcaption>
                                <figcaption><strong>Trésorier :</strong> Jean Darenne</figcaption>
                                <figcaption><strong>Responsable du pôle alumni :</strong> Pierre-Antoine Masson
                                </figcaption>
                                <figcaption><strong>Responsable du pôle promotion :</strong> Agathe Dupuis</figcaption>
                                <figcaption><strong>Responsable du pôle digital :</strong> Oumar T.</figcaption>
                                <figcaption><strong>Responsable du pôle vie étudiante :</strong> Lea Martin</figcaption>
                            </div>
                        </figure>
                    </div>

                    <div className="devs">
                        <h4>Développeurs</h4>
                        <figure>
                            <img src={devMemoji} alt="Mourchidi Mfoumby"
                                 id="dev-memoji-image"/>
                            <figcaption>Mourchidi Mfoumby</figcaption>
                        </figure>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About;