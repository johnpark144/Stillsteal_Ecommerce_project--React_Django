import { useState } from 'react'
import useInterval from '../hooks/useInterval'
import styles from './AboutUs.module.css'

export default function AboutUs() {
    const aboutUsImg = [
        "https://user-images.githubusercontent.com/106279616/201835589-2e9ebb6a-fb2e-4365-9e3b-469071ca9c95.jpg",
        "https://user-images.githubusercontent.com/106279616/201957129-1392d8cb-5fec-46e7-815e-de51a6f33b35.jpg",
        "https://user-images.githubusercontent.com/106279616/201835660-0ffebf64-e75a-4f35-a708-cea684d38436.jpg",
        "https://user-images.githubusercontent.com/106279616/201835686-e10d8efa-e50a-45e9-8cf7-309df3549684.jpg",
    ];
    const aboutUsColor = ['white', 'black', 'white', 'black']
    const [idx, setIdx] = useState(0);

    // CustomHook (useInterval : setinterval in JS)
    useInterval(() => {
        idx === 3 ? setIdx(0) : setIdx(idx + 1);
    }, 3000); // every 3s

    return <>
        {/* Introduction Image and Letter // Image and Letter color change every 3s */}
        <div style={{ backgroundImage: `url(${aboutUsImg[idx]})` }} className={styles.imgContainer}>
            <div style={{ color: aboutUsColor[idx] }} className={styles.msgInside}>
                <div className={styles.msgDiscover}>
                    <h3>Discover the ultimate shopping experience. </h3>
                    <h3>No.1 Commerce Platform</h3>
                    <h1>Stillsteal</h1>
                </div>
                <div className={styles.msgBestCommerce}>
                    <div>The best commerce platform trusted by customers </div>
                    <div>Stillsteal dreams of evolving into the best commerce platform
                        that provides everything related to shopping.
                        As the gateway to shopping trusted by customers,</div>
                </div>
            </div>
        </div>
        {/* Trust, Hope, Technology */}
        <div className={styles.msgOutside}>
            <div>
                <div>
                    <h1>Trust</h1>
                    <img id={styles.trustImg} alt="trust"
                        src={'https://user-images.githubusercontent.com/106279616/201973581-f22ea2fd-40f9-42de-a7a5-fa57fe2d70d8.jpg'} />
                </div>
                <h3>Stillsteal's unique reward system and aggressive sales prevention activities provide
                    customers with a reliable shopping environment.</h3>
            </div>
            <div>
                <div>
                    <h1>Hope</h1>
                    <img id={styles.hopeImg} alt="hope"
                        src={'https://user-images.githubusercontent.com/106279616/201973627-3bda0ace-6605-4a3c-9d8a-41d56d6bddef.jpg'} />
                </div>
                <h3>Hope donations collected through 'Stillsteal Hope Shopping',
                    a social contribution program shared with Stillsteal and sales/purchasing customers,
                    create social value and create a better life together.</h3>
            </div>
            <div>
                <div>
                    <h1>Technology</h1>
                    <img id={styles.techImg} alt="technology"
                        src={'https://user-images.githubusercontent.com/106279616/201973611-93fba9aa-d6b1-480c-97c9-6138b403e24f.jpg'} />
                </div>
                <h3>Stillsteal's independently developed AI-based commerce search technology and
                    big data-based customized recommendation technology provide customers
                    with a more convenient shopping experience.</h3>
            </div>
        </div>
        {/* Vision & Mission */}
        <div className={styles.visionMissionCEOContainer}>
            <div className={styles.visionMissionCeo}>
                <div className={styles.visionMission}>
                    <div>Vision & Mission</div>
                    <div>
                        <p><b>The best commerce platform trusted by customers</b></p><br />
                        <p>We dream of evolving into a shopping gateway that sells everything in the world. Stillsteal is where you can find all types of products and services that customers want.</p><br />
                        <p>We believe that our technology will enable us to provide optimal solutions to our customers in all aspects of their shopping journey, from browsing to purchasing. Stillsteal provides absolute convenience for shopping.</p><br />
                        <p>We are constantly striving for a wise shopping life for our customers. Stillsteal is a place that offers more fun and excitement than shopping with rich content.</p><br />
                        <p>Stillsteal, which provides satisfactory service to sales and purchase customers, and enhances the convenience of all. Our vision is to become a stepping stone to create a better tomorrow's shopping life than today's.</p><br />
                    </div>
                </div>
                {/* CEO */}
                <div className={styles.ceo}>
                    <div>
                        <img id={styles.technologyImg} alt="technology"
                            src={'https://avatars.githubusercontent.com/u/106279616?s=400&u=eba67d20ce5f96758130ffe5bb066773a45c2eb6&v=4'} />
                        <h1>CEO : Yeonghwan Park (John Park)</h1>
                    </div>
                    <div>
                        <p><b>Greetings</b></p><br />
                        <p>Thank you for your interest and affection for our platform,</p>
                        <p>and for visiting this website,</p><br />
                        <p>We ask for your encouragement and cooperation so that our platform can further develop in the future.</p><br />
                        <p>We will do our best to provide best service for you who shop with us.</p><br />
                    </div>
                </div>
            </div>
        </div>
    </>
}