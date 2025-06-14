import Layout from "@/src/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ArealSuite() {
  const products = [
    {
      name: "Launchpad",
      description:
        "Innovative launchpad for Initial Real Estate Offerings (IREO), making real estate investing accessible.",
      href: "/areal-suite/launchpad",
    },
    {
      name: "Areal Marketplace",
      description:
        "A liquid and transparent secondary market for buying and selling tokenized real-world assets.",
      href: "/areal-suite/marketplace",
    },
    {
      name: "Areal TaaS",
      description:
        "Our end-to-end Tokenization as a Service solution for asset owners, developers, and funds.",
      href: "/areal-suite/taas",
    },
    {
      name: "ArealPay",
      description:
        "A revolutionary payment gateway to use the value of your real estate portfolio for daily transactions.",
      href: "/areal-suite/pay",
    },
    {
      name: "Areal Mortgage",
      description:
        "Secure loans by using your tokenized real-world assets as collateral, unlocking liquidity without selling.",
      href: "/areal-suite/mortgage",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                The Areal Suite
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                A comprehensive ecosystem of products designed to tokenize and
                democratize Real World Assets. Explore the tools that are
                building the future of finance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {products.map((product, index) => (
                <Link href={product.href} key={index} passHref>
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-[#F4B448]/50 transition-all duration-300 cursor-pointer h-full flex flex-col group hover:transform hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle className="text-white text-xl group-hover:text-[#F4B448] transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="text-[#F4B448] font-semibold flex items-center group-hover:underline">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="bg-gray-900/50 rounded-xl p-12 border border-gray-800 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Be the first to know when our new products go live. Join the
                waitlist for exclusive updates, early access, and special
                opportunities.
              </p>
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  className="bg-[#F4B448] hover:bg-[#F4B448]/90 text-black font-semibold"
                >
                  Join the Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
