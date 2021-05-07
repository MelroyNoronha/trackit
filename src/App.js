import React from 'react';

import Home from './components/Home';

const dummyData = [
  {
    title: 'Today',
    data: [
      {
        isExpense: true,
        isIncome: false,
        description: 'Car tyre change',
        value: '$329',
        date: new Date(),
      },
      {
        isExpense: true,
        isIncome: false,
        description: 'Furniture',
        value: '$4,000',
        date: new Date(),
      },
    ],
  },
  {
    title: 'April 12, 2021',
    data: [
      {
        isExpense: false,
        isIncome: true,
        description: 'Salary',
        value: '$7,329',
        date: new Date('2021-04-12'),
      },
    ],
  },
];

const App = () => {
  return <Home data={dummyData} />;
};

export default App;
