import React,{useState} from 'react'

const PetList = () => {
  const optionsBreedDog = [
    { name: "Puppy", breed: "Puppy", age: "0-1" },
    { name: "Young", breed: "Young", age: "1-3" },
    { name: "Adult", breed: "Adult", age: "3-5" },
    { name: "Senior", breed: "Senior", age: "5+" },
    { name: "Happy", breed: "Gold Retriever", age: "6" },
    { name: "Pug", breed: "Pug", age: "7" },
    { name: "Lyka", breed: "Dasch", age: "12" },
    { name: "Ramu", breed: "Pomeranian", age: "21" },
  ];

  const optionsBreedCat = [
    { name: "Daisy", breed: "Persian", age: "0-1" },
    { name: "Pussy", breed: "Blacky", age: "1-3" },
    { name: "Pinky", breed: "Lab", age: "3-5" },
    { name: "Senior", breed: "Senior", age: "5+" },
    { name: "Happy", breed: "Gold Retriever", age: "6" },
    { name: "Some", breed: "Ret", age: "9" },
    { name: "Lyka", breed: "Dasch", age: "12" },
    { name: "Ramu", breed: "Pomeranian", age: "21" },
  ];
  // create table for Dog breeds
  // create table for Cat breeds

  const DogBreedsTable = () => {
    return (
      // widen the table

      <table className="w-[30vw] p-8 divide-y m-1 divide-black">
        <thead className="text-left">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Breed</th>
            <th className="p-2">Age (Months)</th>
          </tr>
        </thead>
        <tbody>
          {optionsBreedDog.map((o) => (
            <tr key={o.name}>
              <td className="p-2">{o.name}</td>
              <td className="p-2">{o.breed}</td>
              <td className="p-2">{o.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  const CatBreedsTable = () => {
    return (
      <table className="w-[30vw] p-8 divide-y m-1 divide-black">
        <thead className="text-left">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Breed</th>
            <th className="p-2">Age (Months)</th>
          </tr>
        </thead>
        <tbody>
          {optionsBreedCat.map((o) => (
            <tr key={o.name}>
              <td className="p-2">{o.name}</td>
              <td className="p-2">{o.breed}</td>
              <td className="p-2">{o.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Create Tabs
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "DOGS",
      content: <DogBreedsTable />,
    },
    {
      id: 2,
      title: "CATS",
      content: <CatBreedsTable />,
    },
  ]);

  // Create Active Tab
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Create Tab Click Handler
  const onTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
    <div className="flex justify-center items-center">
      <div className=" text-3xl text-black font-semibold">
        What all pets do we have?
      </div>
    </div>
    {/* create a tab names dogs and cats */}
    <div className="flex flex-col justify-center py-8 items-center">
      <div className="flex justify-center divide-x py-8 divide-gray-500 items-center">
        {tabs.map((tab) => (
          <>
            <div
              key={tab.id}
              className={`px-4 py-2 cursor-pointer text-xl  font-medium ${
                activeTab.id === tab.id ? "text-blue-500 underline" : ""
              }`}
              onClick={() => onTabClick(tab)}
            >
              {tab.title}
            </div>
          </>
        ))}
      </div>
      {/* create a table for dogs and cats */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          {activeTab.content}
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default PetList