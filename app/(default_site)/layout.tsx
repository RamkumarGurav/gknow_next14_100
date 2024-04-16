import ScrollToTop from "@/components/Layout/ScrollToTop";
import SideEnquire from "@/components/Layout/SideEnquire";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="text-xl font-bold p-4 text-white text-center bg-black">
        This is the navbar for default site
      </nav>
      <main>{children}</main>
      <SideEnquire message="Adminssions Open 2024" />
      <ScrollToTop />
      <footer className="text-xl font-bold p-4 text-white text-center bg-black">
        This is the footer for default site
      </footer>
    </>
  );
}
