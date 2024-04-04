export const getTitleSlugFromURL = (url: string) => {
  return url.split('://')[1].split('/')[2];
}