"use client";
import * as React from 'react';
import { useSearchParams } from "next/navigation";
import Layout from "@/components/Layout";
import Section from "@/components/Section";

import { getInitialValue, stockPrice } from './stock';
import { useEffect, useState } from 'react';
import {DataGridPremiumDemo} from './premiumTable'

const ScannerPage = ({ }) => {
  const searchParams = useSearchParams();
  const signUp = searchParams.has("new");
  const [initialData, setInitialData] = useState([]);
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
                    <div className="p-[0.1875rem] bg-[#15131d] h-[90vh]">
                        <DataGridPremiumDemo />
                    </div>
                </div>
            </div>
        </Section>
    </Layout>

  );
}



export default ScannerPage;
