import Head from "next/head";

export default function Navbar() {
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }
    return (
        <>
            <Head>
                <title>I ❤️ 🎥 | HOME</title>
            </Head>
            <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={{ display: 'none', zIndex: 2, width: '40%', minWidth: '300px' }} id="mySidebar">
                <a href="#" onClick={w3_close} className="w3-bar-item w3-button"><b className="w3-text-red">Close</b></a>
                <a href="#food" onClick={w3_close} className="w3-bar-item w3-button">Food</a>
                <a href="#about" onClick={w3_close} className="w3-bar-item w3-button">About</a>
            </nav>
            <div className="w3-top">
                <div className="w3-white w3-xlarge" style={{maxWidth:'1200px',margin:'auto'}}>
                    <div className="w3-button w3-padding-16 w3-left" onClick={w3_open}>☰</div>
                    <div className="w3-center w3-padding-16">I ❤️ MOVIES</div>
                </div>
            </div>
        </>
    )
}