import { useContext } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { ProfileContext } from "../App";

export default function ImageGrid() {
    const images = useContext(ProfileContext).posts.map((post) => post.image);
    {/*const image ={
        "https://picsum.photos/id/123/500/500",
        "https://picsum.photos/id/124/500/500",
        }; */}
    const renderImage = () => {
        return images.map((imageUrl, index) => (
            <Col md={4} key={index} className="mb-4">
                <Image src={imageUrl} fluid />
            </Col>
        ));
    };
    return <Row>{renderImage()}</Row>;
}