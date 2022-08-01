import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
    id: number,
    date: string,
    USD: string,
    EUR: string,
    RUB: string,
) {
    return { id, date, USD, EUR, RUB, };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        '2.61',
        '2.7',
        '3.2',
    ),
    createData(
        1,
        '17 Mar, 2019',
        '2.7',
        '2.8',
        '3.3',
    ),
    createData(2,
        '18 Mar, 2019',
        '2.5',
        '2.6',
        '3.4', ),
    createData(
        3,
        '19 Mar, 2019',
        '2.3',
        '2.4',
        '3.15',
    ),
    createData(
        4,
        '20 Mar, 2019',
        '2.8',
        '2.9',
        '3.6',
    ),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
            <Title>Latest exchange rates</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>USD</TableCell>
                        <TableCell>EUR</TableCell>
                        <TableCell>RUB</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.USD}</TableCell>
                            <TableCell>{row.EUR}</TableCell>
                            <TableCell>{row.RUB}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}