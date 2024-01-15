import { Billboard as BillboardType } from "@/types";

interface BilboardProps {
  data: BillboardType;
}

const Bilboard: React.FC<BilboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url (${data?.imageUrl})` }}></div>
    </div>
  );
};

export default Bilboard;
