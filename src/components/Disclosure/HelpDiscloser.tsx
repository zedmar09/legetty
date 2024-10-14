import AddCircle from '@components/Icons/AddCircle';
import BulbIcon from '@components/Icons/BulbIcon';
import { Disclosure } from '@headlessui/react';

type Props = {
  option: {
    title: string;
    description: string;
  }[];
};

const HelpDiscloser = (props: Props) => {
  const { option } = props;
  return (
    <div className="mt-4 bg-lightest4 rounded-lg px-6 pt-5 pb-8 flex flex-col space-y-4 text-darker">
      <div className="flex space-x-2">
        <BulbIcon />
        <span>Help</span>
      </div>
      <p>
        Here are a few examples of tax-advantaged retirement savings options that can help you save
        for retirement with tax benefits:
      </p>
      <div>
        {option.map((item, index) => (
          <div
            key={item.title}
            className={`py-[10px] ${index !== 3 && 'border-b border-lightest3'}`}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex space-x-2 items-center w-full`}>
                    <AddCircle fill="#D9D9D9" />
                    <span>{item.title}</span>
                  </Disclosure.Button>
                  {item.description && (
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-dark">
                      {item.description}
                    </Disclosure.Panel>
                  )}
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpDiscloser;
