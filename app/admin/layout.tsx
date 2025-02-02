// import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";
import SectionTitle from "@/components/global/SectionTitle";
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="productsContent px-0.5 sm:px-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
      <div className="bg-muted/60 p-4 rounded-md">
        <SectionTitle text="Dashboard" />
        <section className="grid lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-2">
            <Sidebar />
          </div>
          <div className="lg:col-span-10 px-4">{children}</div>
        </section>
      </div>
    </div>
  );
}
export default DashboardLayout;
