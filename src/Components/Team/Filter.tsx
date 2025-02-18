import { useState } from "react";
import { Card, Checkbox, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";


interface FilterOption {
  name: string;
  count: number;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="my-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <ul className="space-y-1">
        {options.slice(0, showMore ? options.length : 3).map((option, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Checkbox >{`${option.name} (${option.count})`}</Checkbox>
          </li>
        ))}
      </ul>
      {options.length > 3 && (
        <Button
          type="link"
          className="!text-green-600 mt-2 flex items-center p-0 "
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
          {showMore ? <UpOutlined className="ml-1" /> : <DownOutlined className="ml-1" />}
        </Button>
      )}
    </div>
  );
};

const FilterUI: React.FC = () => {
  const cityOptions: FilterOption[] = [
    { name: "Karachi", count: 8239 },
    { name: "Lahore", count: 615 },
    { name: "Peshawar", count: 458 },
    { name: "Multan", count: 267 },
    { name: "Hyderabad", count: 145 },
  ];

  const regionOptions: FilterOption[] = [
    { name: "South", count: 165 },
    { name: "North", count: 812 },
    { name: "East", count: 126 },
    { name: "Central", count: 1838 },
  ];

  const areaOptions: FilterOption[] = [
    { name: "Port Qasim", count: 1864 },
    { name: "Garden", count: 183 },
    { name: "Clifton", count: 756 },
    { name: "Clifton", count: 756 },
  ];

  return (
    <Card className="p-6 w-80 bg-gray-50 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <FilterSection title="City" options={cityOptions} />
      <FilterSection title="Region" options={regionOptions} />
      <FilterSection title="Area" options={areaOptions} />
    </Card>
  );
};

export default FilterUI;