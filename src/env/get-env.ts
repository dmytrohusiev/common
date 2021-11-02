export const getEnv = ({
  name,
  defaultValue = "REDACTED",
  throwOnEmpty
}: {
  name: string;
  defaultValue?: string;
  throwOnEmpty?: boolean;
}): string => {
  const value = process.env[name];
  if (throwOnEmpty && !value) {
    throw new Error(name + " env must be defined");
  }

  return value ?? defaultValue;
};
