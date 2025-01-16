interface User {
  email: string;
  password: string;
}

const dummyUsers: User[] = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
  { email: "admin@example.com", password: "adminpass" },
];

export function authenticateUser(email: string, password: string): boolean {
  return dummyUsers.some(
    (user) => user.email === email && user.password === password
  );
}
