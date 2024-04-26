"use client";

import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Layout from "@/components/Layout";
import Section from "@/components/Section";

const ScannerPage = ({}) => {
    const searchParams = useSearchParams();
    const signUp = searchParams.has("new");

    return (
        <Layout>
            <Section className="flex min-h-[calc(100vh-4.8125rem)] overflow-hidden lg:min-h-[calc(100vh-5.3125rem)]">
                <div></div>
            </Section>
        </Layout>
    );
};

export default ScannerPage;
