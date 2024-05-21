import Section from "@/components/Section";
import Image from "@/components/Image";

type FeaturesProps = {};

const Features = ({}: FeaturesProps) => {
    const content = [
        {
            id: "0",
            title: "Professional Scanner",
            text: "Our platform comes with an advanced and customisable scanner to sift through vast amounts of stock data. Based on a variety of stock scan criteria - such as price, volume, sectors, market trends - the scanner helps you find the most profitable investment opportunities effectively.",
        },
        {
            id: "1",
            title: "Prediction using AI",
        },
        {
            id: "2",
            title: "Connection Anyway",
        },
    ];

    const content1 = [
        {
            id: "0",
            title: "Professional Scanner",
        },
        {
            id: "1",
            title: "Prediction using AI",
            text: "With our sophisticated AI algorithms, we leverage machine learning to predict stock trends and provide investment guidance. The AI analyses historical data and recognites trends to make accurate predictions about future price movements. This AI-based forecasting makes investment strategies more reliable and less risky.",
        },
        {
            id: "2",
            title: "Connection Anyway",
        },
    ];

    const content2 = [
        {
            id: "0",
            title: "Professional Scanner",
        },
        {
            id: "1",
            title: "Prediction using AI",
        },
        {
            id: "2",
            title: "Connection Anyway",
            text: "Stay in sync with the market wherever you are, whenever you want. Our platform is designed to be accessible from any device, be it desktop, tablet or mobile. Whether you are at home or on-the-go, you can always stay connected with the latest trading information.",
        },
    ];

    return (
        <Section>
            <div className="container">
                <div className="-mb-16">
                    {[
                        { id: "0", imageUrl: "/images/features/image-1.jpg" },
                        { id: "1", imageUrl: "/images/features/image-2.jpg" },
                        { id: "2", imageUrl: "/images/features/image-3.jpg" },
                    ].map((item, index) => (
                        <div
                            className="mb-16 md:grid md:grid-cols-2 md:items-center lg:gap-20 xl:gap-40"
                            key={item.id}
                        >
                            <div
                                className={`mb-8 bg-n-6 rounded-3xl md:relative md:mb-0 ${
                                    index % 2 === 0 ? "" : "md:order-1"
                                }`}
                            >
                                <Image
                                    className="w-full rounded-3xl"
                                    src={item.imageUrl}
                                    width={550}
                                    height={600}
                                    alt="Image"
                                />
                                <div
                                    className={`hidden absolute top-5 -right-8 bottom-5 grid-cols-2 w-8 md:grid ${
                                        index % 2 === 0
                                            ? "-right-8"
                                            : "-left-8 rotate-180"
                                    }`}
                                >
                                    <div className="rounded-r-[1.25rem] bg-[#1B1B2E]"></div>
                                    <div className="my-5 rounded-r-[1.25rem] bg-[#1B1B2E]/50"></div>
                                </div>
                            </div>
                            <div
                                className={
                                    index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                                }
                            >
                                <h2 className="h2 mb-4 md:mb-8">
                                    Three Main Features
                                </h2>
                                <ul className="">
                                    {
                                        (index == 0 ? content : index ==1 ? content1 : content2).map((item) => (
                                        <li
                                            className="py-4 border-b border-n-1/5 md:py-6"
                                            key={item.id}
                                        >
                                            <div className="flex items-center">
                                                <Image
                                                    src="/images/check.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="Check"
                                                />
                                                <h6 className="body-2 ml-5">
                                                    {item.title}
                                                </h6>
                                            </div>
                                            {item.text && (
                                                <p className="body-2 mt-3 text-n-4">
                                                    {item.text}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Features;
