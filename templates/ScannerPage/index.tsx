"use client";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Layout from "@/components/Layout";
import Section from "@/components/Section";

const ScannerPage = ({ }) => {
    const searchParams = useSearchParams();
    const signUp = searchParams.has("new");

    return (
        <Layout>
            <Section className="min-h-[calc(100vh-4.8125rem)] lg:min-h-[calc(100vh-5.3125rem)]">
                <div className="container">
                    <div className="p-0.25 bg-gradient-to-b from-[#D77DEE]/90 to-n-1/15">
                        <div className="p-[0.1875rem] bg-[#15131d] h-[90vh]">
                            <TableContainer component={Paper} className="my-8 bg-black">
                                <Table className="min-w-full">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                First Name
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Last Name
                                            </TableCell>
                                            <TableCell className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Email
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* Replace with your data or map through your dataset */}
                                        <TableRow>
                                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-white">John</TableCell>
                                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-white">Doe</TableCell>
                                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-white">john.doe@example.com</TableCell>
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
