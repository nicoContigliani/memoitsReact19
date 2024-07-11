import { useEffect, useState } from 'react';

const useProcessTecnologyData = (json) => {
  const [results, setResults] = useState({});

  useEffect(() => {
    const functionAsync = async () => {
      const tecnosData = json.tecnology;
      const results = {};

      tecnosData.forEach((element) => {
        Object.keys(element).forEach((techKey) => {
          const levels = element[techKey];
          Object.keys(levels).forEach((levelKey: any) => {
            const levelArray = levels[levelKey];

            const totalQuestions = levelArray.length;
            const totalAnswers = levelArray.reduce((sum: any, question: any) => sum + question.options.length, 0);

            if (!results[techKey]) {
              results[techKey] = {};
            }

            results[techKey][levelKey] = {
              totalQuestions,
              totalAnswers,
            };
          });
        });
      });

      setResults(results);
    };

    functionAsync();
  }, [json]);

  return results;
};

export default useProcessTecnologyData;
