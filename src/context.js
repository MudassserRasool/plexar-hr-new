

import React, { createContext, useState } from 'react';

export const MyContext = createContext();

 const MyContextProvider = (props) => {
  const [value, setValue] = useState(3);

  return (
    <MyContext.Provider  value={[value, setValue]}>
      {props.children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;

