const formatTitle = (title) => {
    return title
      .replace(/([A-Z])/g, ' $1')  // Add space before each uppercase letter
      .trim()                       // Remove any leading/trailing spaces
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  };

export {formatTitle}
  