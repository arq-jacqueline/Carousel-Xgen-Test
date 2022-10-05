import Carousel from "./components/Carousel/Carousel"

const App = () => {
    return (
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel
                show={4}
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{width: '100%'}} />
                        <h1>Dress 1</h1>  
                        <p>$800</p>                  
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{width: '100%'}} />
                        <h1>Dress 2</h1>
                        <p>$800</p> 
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{width: '100%'}} />
                        <h1>Dress 3</h1> 
                        <p>$800</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{width: '100%'}} />
                        <h1>Dress 4</h1> 
                        <p>$800</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{width: '100%'}} />
                        <h1>Dress 5</h1> 
                        <p>$800</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{width: '100%'}} />
                        <h1>Dress 6</h1> 
                        <p>$800</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{width: '100%'}} />
                        <h1>Dress 7</h1> 
                        <p>$800</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{width: '100%'}} />
                        <h1>Dress 8</h1> 
                        <p>$800</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default App