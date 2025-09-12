import DashboardAdmin from "@/components/Admin/Dashboard";
import Sidebar from "@/components/Admin/sidebar";

export default function HomePage() {
  return (
    <>
            <div className="flex min-h-screen w-full ">
          {/* Sidebar (fixed on the left) */}
          <aside className="w-1/10 fixed md:w-64 h-screen z-50  ">
            <Sidebar />
          </aside>

          {/* Page content (with left margin so it doesn't overlap sidebar) */}
          <main className="w-9/10 flex-1 ml-12 md:ml-64 px-4 "><DashboardAdmin /></main>
        </div>


    </>

   
  );
}
