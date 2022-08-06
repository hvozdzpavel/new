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
    ExchangeAmount: string,
    SumBYN: string,

) {
    return { id, date, ExchangeAmount, SumBYN,  };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        '1 USD.',
        '2.61',

    ),
    createData(
        1,
        '17 Mar, 2019',
        '1 EUR',
        '2.7',

    ),
    createData(2,
        '18 Mar, 2019',
        '1 RUB',
        '3.2',
        ),
    createData(
        3,
        '19 Mar, 2019',
        '2 EUR',
        '6',
            ),
    createData(
        4,
        '20 Mar, 2019',
        '5 USD',
        '13',
    ),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function TransactionsTable() {
    return (
        <React.Fragment>
            <Title>History of transactions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>ExchangeAmount</TableCell>
                        <TableCell>SumBYN</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.ExchangeAmount}</TableCell>
                            <TableCell>{row.SumBYN}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more operations
            </Link>
        </React.Fragment>
    );
}