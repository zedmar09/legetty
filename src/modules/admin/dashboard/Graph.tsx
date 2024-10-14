import { useAppSelector } from '@core/redux/store';
import { ResponsivePie } from '@nivo/pie';

interface GraphProps {}

const Graph = (props: GraphProps) => {
  const adminAggregatesFamilies = useAppSelector((state) => state.admin.families);
  const customColors = ['#FF8925', '#2174BB'];
  const data = [
    {
      id: 'Organic',
      label: 'Organic',
      value: adminAggregatesFamilies?.directSignUp,
    },
    {
      id: 'Admission Agents2',
      label: 'Admission Agents',
      value: adminAggregatesFamilies?.total - adminAggregatesFamilies?.directSignUp,
    },
  ];

  return (
    <div className="w-full p-4 bg-white rounded-lg relative">
      <div className="absolute top-6 left-6">Source / Medium</div>
      <div className="flex justify-center py-16">
        <div className="h-32 w-32">
          <ResponsivePie
            data={data}
            startAngle={-180}
            innerRadius={0.85}
            padAngle={3}
            cornerRadius={3}
            activeOuterRadiusOffset={6}
            enableArcLinkLabels={false}
            enableArcLabels={false}
            isInteractive={false}
            colors={customColors}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 border-b pb-4">
        <div>Families</div>
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 bg-[#FF8925]"></div>
          <span className="text-sm">Organic</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 bg-mainBlue"></div>
          <span className="text-sm">Admission Agents</span>
        </div>
      </div>
      <div className="grid grid-cols-3 py-3 text-dark">
        <span>{adminAggregatesFamilies?.total}</span>
        <span>{adminAggregatesFamilies?.directSignUp}</span>
        <span>{adminAggregatesFamilies?.total - adminAggregatesFamilies?.directSignUp}</span>
      </div>
    </div>
  );
};

export default Graph;
