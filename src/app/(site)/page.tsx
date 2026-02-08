import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MobileX | MobileX template",
  description: "This is Home for MobileX Template",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
