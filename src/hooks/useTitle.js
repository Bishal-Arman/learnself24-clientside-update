const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-learnself24`;
  }, [title]);
};
export default useTitle;
