import EditIcon from '@components/Icons/EditIcon';
import Typography from '@components/Typography/Typography';
import { usdFormatter } from '@utils/common';
import { cn } from '@utils/style';
import { useState } from 'react';

interface UpdateProfileRowProps {
  title: string;
  description: string;
  value?: string | number | boolean | null;
  className?: string;
  onEdit: () => void;
}

const UpdateProfileRow = (props: UpdateProfileRowProps) => {
  const { title, description, value = null, className, onEdit } = props;
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      className={`p-4 flex w-full relative justify-between items-start ${className}`}
      onMouseEnter={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}>
      <div className="w-full">
        <div className="flex w-full justify-between">
          <Typography className="font-bold">{title}</Typography>
          <div
            onClick={onEdit}
            className={cn('hover:cursor-pointer opacity-0', showEdit && 'opacity-100')}>
            <EditIcon fill="#1C1B1F" />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <Typography variation="description1" className="text-gray-400 font-semibold">
            {description}
          </Typography>
          {value !== null && (
            <Typography variation="description1" className="text-gray-400">
              {usdFormatter.format(+value)}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileRow;
