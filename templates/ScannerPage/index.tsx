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

    const value = 
        { time: "12:34:56", symbol: "AZO", companyName: "AutoZone Inc", ask: 3000, last: 48934, netChange: "-25.4", volume: 34, trades: 23, volume1: 21 };
    const value1 = Object.values(value);
    console.log(Object.values(value));

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
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Time
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Symbol
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Company Name
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Ask
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Last
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Net Change
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Volume
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Trades
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                $Volume
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* Replace with your data or map through your dataset */}
                                        <TableRow>
                                            {value1.map((item) => (
                                                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-white">{item}</TableCell>
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
