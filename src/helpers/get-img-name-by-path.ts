export const getImgNameByPath = (img: string): string => {
  const pathParts = img.split("/");
  const lastPart = pathParts[pathParts.length - 1];
  const fileName = lastPart.split(".")[0];

  return fileName;
};
