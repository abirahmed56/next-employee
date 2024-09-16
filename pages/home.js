import { Layout } from "@/components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="relative min-h-screen">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
                    <p className="text-xl">We are excited to have you here. Enjoy exploring our system!</p>
                </div>
            </div>
        </Layout>
    );
}

