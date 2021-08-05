import React, { useState, useCallback } from 'react';

export const useSelectWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const onSelectWork = useCallback((props) => {
    const { id, works } = props;
    const targetWork = works.find((work) => work.id === id);
    setSelectedWork(targetWork);
  }, []);
  return { onSelectWork, selectedWork };
};
