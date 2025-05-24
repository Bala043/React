export const checkValidData = (...args) => {
  if (args.length === 2) {
    const [email, password] = args;

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!validEmail) return "Email is not Valid";

    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!validPassword) return "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character";

    return null;
  } else if (args.length === 3) {
    const [name, email, password] = args;

    if (name !== undefined) {
      const validName = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);
      if (!validName) return "Name is not Valid";
    }

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!validEmail) return "Email is not Valid";

    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!validPassword) return "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character";

    return null;
  } 
};
