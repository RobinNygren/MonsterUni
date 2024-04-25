export const getMonsterImage = async (
  firstName: string,
  lastName: string
): Promise<string> => {
  const formattedFirstName = firstName.toLowerCase().replace(/ /g, "");
  const formattedLastName = lastName.toLowerCase().replace(/ /g, "");
  try {
    const image = await import(
      `../assets/MonsterAvatars/${formattedFirstName}_${formattedLastName}.png`
    );
    return image.default;
  } catch (error) {
    console.error("Failed to load image:", error);
    return "";
  }
};
