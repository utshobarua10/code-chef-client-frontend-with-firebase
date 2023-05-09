import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import ReactToPdf from 'react-to-pdf';


const Blog = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'potrait',
        unit: 'in',
        format: [10,10]
    };

    return (
        <div>

            <Container style={{ marginTop: '100px' }} className='mb-3'>
                <ReactToPdf targetRef={ref} options={options}>
                    {({ toPdf }) => 
                        <button onClick={toPdf} className='main-button' style={{ marginLeft: '475px' }}>Downlod Now <AiOutlineDownload></AiOutlineDownload> </button>

                    }
                </ReactToPdf>

                <div className='mt-3' ref={ref}>
                    <Card style={{ width: '20rem' }} className='p-3 mx-auto '>
                        <Card.Body>
                            <Card.Title>Benfits of garlic</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Publish On: 05/04/23</Card.Subtitle>
                            <Card.Text>

                                Garlic is highly nutritious and associated with a variety of health benefits. However, if you eat too much of it, it may cause side effects like bad breath, acid reflux, digestive issues, and an increased risk of bleeding.....read more
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }} className='p-3 mx-auto mt-3'>
                        <Card.Body>
                            <Card.Title>Benfits of garlic</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Publish On: 05/04/23</Card.Subtitle>
                            <Card.Text>

                                Garlic is highly nutritious and associated with a variety of health benefits. However, if you eat too much of it, it may cause side effects like bad breath, acid reflux, digestive issues, and an increased risk of bleeding.....read more
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }} className='p-3 mx-auto mt-3'>
                        <Card.Body>
                            <Card.Title>Benfits of garlic</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Publish On: 05/04/23</Card.Subtitle>
                            <Card.Text>

                                Garlic is highly nutritious and associated with a variety of health benefits. However, if you eat too much of it, it may cause side effects like bad breath, acid reflux, digestive issues, and an increased risk of bleeding.....read more
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Blog;