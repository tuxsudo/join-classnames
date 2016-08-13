const joinClassNames = (...args) => args.filter(n=>n && typeof n === "string").join(" ");

export default joinClassNames;
