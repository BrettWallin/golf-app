import React, { createContext, useState, useEffect } from 'react';

export const SelectedClubsContext = createContext();

export const SelectedClubsProvider = ({ children }) => {
  const [selectedClubs, setSelectedClubs] = useState(() => {
    // Retrieve the clubs from localStorage if they exist
    const savedClubs = localStorage.getItem('selectedClubs');
    return savedClubs ? JSON.parse(savedClubs) : [];
  });

  useEffect(() => {
    // Save the selected clubs to localStorage whenever they change
    localStorage.setItem('selectedClubs', JSON.stringify(selectedClubs));
  }, [selectedClubs]);

  const addClub = (club) => {
    setSelectedClubs((prevClubs) => [...prevClubs, club]);
  };

  const removeClub = (club) => {
    setSelectedClubs((prevClubs) =>
      prevClubs.filter((c) => c.club !== club.club)
    );
  };

  return (
    <SelectedClubsContext.Provider value={{ selectedClubs, addClub, removeClub }}>
      {children}
    </SelectedClubsContext.Provider>
  );
};


