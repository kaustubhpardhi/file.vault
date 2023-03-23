import Footer from "../footer/footer";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";

function Home()
{
    return (
        <div className="home">
            <Navbar/>
            <Hero/>
            <Footer/>
        </div>
    )
}

export default Home;