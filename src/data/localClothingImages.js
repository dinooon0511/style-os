// Catalog-order mapping to 151 optimized local WebP assets.
export const clothingPhotoIndices = [23,64,91,128,34,16,148,79,93,21,126,22,46,127,90,118,18,85,57,36,113,144,14,82,101,30,41,35,150,81,17,47,106,45,33,146,103,43,48,77,42,55,145,102,32,61,123,88,20,122,31,78,147,114,104,56,15,149,80,105,44,115,119,116,1,19,62,125,2,59,13,143,86,58,120,87,53,121,37,60,4,117,65,129,92,5,12,124,63,3,89,38,131,95,39,67,7,24,130,94,66,6,136,109,51,8,135,108,50,27,134,107,49,26,70,97,96,132,25,68,75,140,141,100,133,69,76,142,151,74,11,112,139,73,52,84,29,83,99,98,28,111,72,10,54,40,138,71,110,137,9];
export function applyLocalClothingImages(catalog) {
  if (catalog.length !== clothingPhotoIndices.length) {
    console.warn('STYLE OS: catalog/image count mismatch; retaining original URLs');
    return;
  }
  catalog.forEach((item, i) => {
    item.photo = `/images/clothing/item-${String(clothingPhotoIndices[i]).padStart(3, '0')}.webp`;
    item.image_status = 'user_cutout_local';
  });
}
