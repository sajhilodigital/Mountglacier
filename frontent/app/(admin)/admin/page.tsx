import AdminDestinations from "@/components/Admin/admindestination";
import Dashboardadmin from "@/components/Admin/Dashboard";
import AdminRatings from "@/components/Admin/rating";

export default function HomePage() {
  return (
    <div>
      <Dashboardadmin />
      <AdminRatings />
      <AdminDestinations />
    </div>
  );
}
