import React from "react"
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import duneImage from '../assets/images/trending/dune.jpg'
import everythingImage from '../assets/images/trending/everything.jpg'
import infiniteImage from '../assets/images/trending/infinite.jpg'
import jokerImage from '../assets/images/trending/joker.jpg'
import lightyearImage from '../assets/images/trending/lightyear.jpg'
import morbiusImage from '../assets/images/trending/morbius.jpg'

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    {/* COL 1 */}
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={duneImage} alt="Dune Movies" className="imageContent" />
                            <div className="bg-dark text-white cardContent">
                                <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">
                                    Perjalanan pahlawan mitis dan emosional, Dune"menceritakan kisah Paul Atreides, seorang pemuda cerdas dan berbakat yang lahir dalam takdir besar di luar pemahamannya, yang harus melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depannya.
                                </Card.Text>
                            </div>
                            <Card.Text className="bg-dark text-white text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    {/* COL 2 */}
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={everythingImage} alt="Everything Movies" className="imageContent" />
                            <div className="bg-dark text-white cardContent">
                                <Card.Title className="text-center">EVERYTHING</Card.Title>
                                <Card.Text className="text-left">
                                    Everything Everywhere All At Once adalah petualangan yang penuh aksi, sci-fi yang lucu dan berjiwa besar tentang seorang wanita Cina-Amerika, Seorang imigran Tiongkok terbawa dalam petualangan luar biasa, di mana dia sendiri yang dapat menyelamatkan dunia dengan menjelajahi alam semesta lain yang terhubung dengan kehidupan yang bisa dia jalani.
                                </Card.Text>
                            </div>
                            <Card.Text className="bg-dark text-white text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    {/* COL 3 */}
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={infiniteImage} alt="Infinite Movies" className="imageContent" />
                            <div className="bg-dark text-white cardContent">
                                <Card.Title className="text-center">INFINITE</Card.Title>
                                <Card.Text className="text-left">
                                    As an experienced climber ascends Mt. Washington, she turns back before she reaches the summit as a huge blizzard approaches. But on her way down, she encounters a lone, stranded man, and takes it upon herself to get them both down the mountain before nightfall arrives and they succumb to the storm.
                                </Card.Text>
                            </div>
                            <Card.Text className="bg-dark text-white text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    {/* COL 4 */}
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={jokerImage} alt="Joker Movies" className="imageContent" />
                            <div className="bg-dark text-white cardContent">
                                <Card.Title className="text-center">JOKER</Card.Title>
                                <Card.Text className="text-left">
                                    Arthur Fleck, seorang badut pesta, hidup dalam keadaan sulit bersama ibunya yang sakit-sakitan. Karena orang-orang menganggapnya aneh, ia memutuskan untuk berubah menjadi jahat dan membuat kekacauan.
                                </Card.Text>
                            </div>
                            <Card.Text className="bg-dark text-white text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    {/* COL 5 */}
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={lightyearImage} alt="Lightyear Movies" className="imageContent" />
                            <div className="bg-dark text-white cardContent">
                                <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                                <Card.Text className="text-left">
                                    Misi luar angkasa Buzz Lightyear menjadi serba salah ketika dia membuat kesalahan besar. Akibatnya, dia dan krunya terdampar di planet asing selama setahun. Mereka terus gigih mencari solusi untuk keluar dari planet ini.
                                </Card.Text>
                            </div>
                            <Card.Text className="bg-dark text-white text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    {/* COL 6 */}
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={morbiusImage} alt="Morbius Movies" className="imageContent" />
                            <div className="bg-dark text-white cardContent">
                                <Card.Title className="text-center">MORBIUS</Card.Title>
                                <Card.Text className="text-left">
                                    Ahli biokimia Michael Morbius mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun secara tidak sengaja ia menginfeksi tubuhnya dan berubah jadi mahluk yang menyerupai vampir.
                                </Card.Text>
                            </div>
                            <Card.Text className="bg-dark text-white text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default Trending;