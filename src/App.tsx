import React from 'react';
import './App.css';
import {
    Input, Card, CardBody, CardHeader, ListGroup, Button,
} from 'reactstrap';

function App() {

    const [
        firstInteger,
        setFirstInteger,
    ] = React.useState<number | null >(0);
    const [
        secondInteger,
        setSecondInteger,
    ] = React.useState<number | null >(0);
    const [
        result,
        setResult,
    ] = React.useState<number | null >(0);

    const russianMultiplying = (firstNumb: number | null, secondNumb: number | null) => {
        if (firstNumb && secondNumb) {
            let result = 0;
            let firstNumbCopy = firstNumb;
            let secondNumbCopy = secondNumb;
            while (firstNumbCopy > 0) {
                if (firstNumbCopy % 2 === 1) {
                    result += secondNumbCopy;
                }
                firstNumbCopy = Math.floor(firstNumbCopy / 2);
                secondNumbCopy *= 2;
            }
            return result;
        }
        return 0;
    };

    return (
        <Card>
            <CardHeader className='text-center'>Russian multiplying</CardHeader>
            <CardBody className='p-0'>
                <ListGroup className='mb-3 w-100 h-100'>

                    <Input
                        type="number"
                        label="first Integer"
                        className='m-3'
                        value={firstInteger ?? ''}
                        onChange={e => {
                            setFirstInteger(e.target.valueAsNumber);
                        }}
                    />
                    <Input
                        type="number"
                        label='second Integer'
                        className='m-3'
                        value={secondInteger ?? ''}
                        onChange={e => {
                            setSecondInteger(e.target.valueAsNumber);
                        }}
                    />
                </ListGroup>
                <ListGroup>
                    <Button
                        className='m-3 w-100'
                        onClick={() => {
                            setResult(russianMultiplying(firstInteger, secondInteger));
                        }}
                    />
                    <Input
                        type="number"
                        readOnly
                        className='m-3'
                        value= {result ?? ''}
                    />
                </ListGroup>
            </CardBody>
        </Card>
    );
}

export default App;
