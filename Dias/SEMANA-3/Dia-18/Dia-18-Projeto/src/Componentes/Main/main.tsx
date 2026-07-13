import "../../global.css";
import "./main.css"

const Main = () => {
    return (
        <main className="main-content">
            <h2>Filmes em exposição</h2>

            <div className="filmes-container">
                <div className="filme1">
                    <section>
                        <h3>Filme 1</h3>
                    </section>
                </div>

                <div className="filme2">
                    <section>
                        <h3>Filme 2</h3>
                    </section>
                </div>

                <div className="filme3">
                    <section>
                        <h3>Filme 3</h3>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Main;