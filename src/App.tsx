import { useState } from 'react';
import './App.css';
import {
    Input,
    Card,
    CardBody,
    CardHeader,
    ListGroupItem,
    Button,
    Row,
    Col,
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [
        firstInteger,
        setFirstInteger,
    ] = useState<number | null>(0);
    const [
        secondInteger,
        setSecondInteger,
    ] = useState<number | null>(0);
    const [
        result,
        setResult,
    ] = useState<number | null>(0);

    const russianMultiplication = (firstNumb: number | null, secondNumb: number | null) => {
        if (firstNumb && secondNumb) {
            let sum = 0;
            while (firstNumb > 1) {
                if (firstNumb % 2 === 1) {
                    sum += secondNumb;
                }
                firstNumb = shiftRight(firstNumb);
                secondNumb = shiftLeft(secondNumb);
            }
            return secondNumb + sum;
        }
        return 0;
    };

    const shiftRight = (x: number) => {
        const binary = x.toString(2);
        const binaryX = parseInt(binary, 2) >> 1;
        const decimalX = binaryX.toString(10);
        const integer = parseInt(decimalX);
        return integer;
    };

    const shiftLeft = (x: number) => {
        const binary = x.toString(2);
        const binaryX = parseInt(binary, 2) << 1;
        const decimalX = binaryX.toString(10);
        const integer = parseInt(decimalX);
        return integer;
    };

    return (
        <Card>
            <CardHeader>Russian multiplying</CardHeader>
            <CardBody>
                <ListGroupItem>
                    <Row className='justify-content-between'>
                        <Col className='text-center'>
                    <Input
                        type="number"
                        className='m-1 text-center'
                        placeholder="First Integer"
                        value={firstInteger ?? ''}
                        onChange={e => {
                            setFirstInteger(e.target.valueAsNumber);
                        }}
                    />
                    </Col>
                    <Col className='text-center'>
                    <Input
                        type="number"
                        className='m-1 text-center'
                        placeholder="Second Integer"
                        value={secondInteger ?? ''}
                        onChange={e => {
                            setSecondInteger(e.target.valueAsNumber);
                        }}
                    />
                    </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Button
                        className='m-1 w-100'
                        color='success'
                        onClick={() => {
                            setResult(russianMultiplication(firstInteger, secondInteger));
                        }}
                    >
                        Calculate
                    </Button>
                    <Input
                        type="number"
                        className='m-1 text-center'
                        readOnly
                        value={result ?? ''}
                    />
                </ListGroupItem>
            </CardBody>
        </Card>
    );
}

export default App;
