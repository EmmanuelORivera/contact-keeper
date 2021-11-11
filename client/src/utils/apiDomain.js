export function apiDomain() {
  const production = process.env.NODE_ENV === "production";
  return production
    ? "https://contact-keeper95.herokuapp.com"
    : "http://localhost:5000";
}
