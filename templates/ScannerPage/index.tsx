"use client";
import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { json } from 'stream/consumers';
import { DataGridProDemo } from './newTable'
import { getInitialValue } from './stock';
import { useEffect, useState } from 'react';

const ScannerPage = ({ }) => {
  const searchParams = useSearchParams();
  const signUp = searchParams.has("new");
  const [initialData, setInitialData] = useState([]);
  const value = { time: "12:34:56", symbol: "AZO", companyName: "AutoZone Inc", ask: 3000, last: 48934, netChange: "-25.4", volume: 34, trades: 23, volume1: 21, wfdwef: 113 };
  const value1 = Object.values(value);
  console.log(initialData)
  useEffect(() => {
    const getInitialData = async () => {
      const data = await getInitialValue();
      setInitialData(data);
    };

    getInitialData();
  }, []);

  return (
    <Layout>
        <Section className="min-h-[calc(100vh-4.8125rem)] lg:min-h-[calc(100vh-5.3125rem)]">
            <div className="container">
                <div className="p-0.25 bg-gradient-to-b from-[#D77DEE]/90 to-n-1/15">
                    <div className="p-[0.1875rem] bg-[#242429] h-[90vh] overflow-scroll">
                        {/* <TableContainer className="">
                            <Table className="min-w-full">
                                <TableHead>
                                    <TableRow>
                                    <TableCell style={{ color: 'white' }}>
                                            No
                                        </TableCell>
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
                                    {initialData.map((item, index) => (
                                        <TableRow key = {index}>
                                            <TableCell style={{ color: "white" }}>{index + 1}</TableCell>
                                            <TableCell style={{ color: "white" }}>{item.symbol}</TableCell>
                                            <TableCell style={{ color: "white" }}>{item.name}</TableCell>
                                        </TableRow>
                                    ))}
                                    
                                </TableBody>
                            </Table>
                        </TableContainer> */}
                        <DataGridProDemo />
                    </div>
                </div>
            </div>
        </Section>
    </Layout>

  );
}



export default ScannerPage;
