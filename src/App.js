import NavBar from './components/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <div class="row py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between flex-column py-5">
                        <h1>Text Field</h1>
                        <h2>Text Field</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./logo.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center py-5">
                        <a href="" className="text-decoration-none fs-3" style={{ color: '#98ff98' }}>
                            Play
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 py-4 d-flex justify-content-center h-75">
                        <p>will add unity dummy here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
