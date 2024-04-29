"use client";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { json } from 'stream/consumers';

const ScannerPage = ({ }) => {
    const searchParams = useSearchParams();
    const signUp = searchParams.has("new");

    const value = { time: "12:34:56", symbol: "AZO", companyName: "AutoZone Inc", ask: 3000, last: 48934, netChange: "-25.4", volume: 34, trades: 23, volume1: 21 };
    const value1 = Object.values(value);
    console.log(value1);

    return (
        <Layout>
            <Section className="min-h-[calc(100vh-4.8125rem)] lg:min-h-[calc(100vh-5.3125rem)]">
                <div className="container">
                    <div className="p-0.25 bg-gradient-to-b from-[#D77DEE]/90 to-n-1/15">
                        <div className="p-[0.1875rem] bg-[#15131d] h-[90vh]">
                            <TableContainer className="">
                                <Table className="min-w-full">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ color: 'white' }}>
                                                Time
                                            </TableCell>
                                            <TableCell style={{ color: 'white' }}>
                                                Symbol
                                            </TableCell>
                                            <TableCell style={{ color: 'white' }}>
                                                Company Name
                                            </TableCell>
                                            <TableCell style={{ color: 'white' }}>
                                                Ask
                                            </TableCell>
                                            <TableCell style={{ color: 'white' }}>
                                                Last
                                            </TableCell>
                                            <TableCell style={{ color: 'white' }}>
                                                Net Change
                                            </TableCell>
                                            <TableCell style={{ color: 'white' }}>
                                                Volume
                                            </TableCell>
                                            <TableCell style={{ color: 'white' }}>
                                                Trades
                                            </TableCell>
                                            <TableCell style={{ color: 'white' }}>
                                                $Volume
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* Replace with your data or map through your dataset */}
                                        <TableRow>
                                            {value1.map((item, index) => (
                                                <TableCell key = {index} className="px-6 py-4 whitespace-nowrap text-sm text-white">{item}</TableCell>
                                            ))}
                                        </TableRow>
                                        {/* Add more rows as needed */}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default ScannerPage;
