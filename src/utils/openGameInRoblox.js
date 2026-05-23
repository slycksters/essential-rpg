// Opens the game in roblox, adjust to the device used
export const openGameInRoblox = (placeId) => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    // Android device
    const intentUrl = `intent://placeId=${placeId}#Intent;scheme=roblox;package=com.roblox.client;end`;
    window.location.href = intentUrl;
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // iOS device
    const appUrl = `roblox://placeId=${placeId}`;
    const fallbackUrl = `https://www.roblox.com/games/${placeId}`;

    window.location.href = appUrl;
    setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 1500);
  } else {
    // Desktop fallback
    window.location.href = `roblox://placeId=${placeId}`;
  }
};
