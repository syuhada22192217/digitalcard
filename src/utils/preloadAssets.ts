/**
 * Preload all wedding card images and background assets ahead of time
 * so that when the user opens the card, all visuals appear immediately
 * without any loading delay or pop-in.
 */

import fittedDoorLeft from '../assets/images/fitted_door_left.jpg';
import fittedDoorRight from '../assets/images/fitted_door_right.jpg';
import ringExchangeMirrorBg from '../assets/images/newcermin.jpg';
import frameTallBurgundy from '../assets/images/frame_tall_burgundy_1792597275647.jpg';
import frameBurgundyLace from '../assets/images/frame_burgundy_lace_1792597245969.jpg';
import coupleWalkingGarden from '../assets/images/pengantin_burgundy_grey_1791902834200.jpg';
import windowTetingkapBg from '../assets/images/tetingkap.jpg';
import masjidBg from '../assets/images/masjid.jpg';
import anthuriumPetalImg from '../assets/images/anthurium_petal_1792061936557.jpg';

const ASSETS_TO_PRELOAD: string[] = [
  fittedDoorLeft,
  fittedDoorRight,
  ringExchangeMirrorBg,
  frameTallBurgundy,
  frameBurgundyLace,
  coupleWalkingGarden,
  windowTetingkapBg,
  masjidBg,
  anthuriumPetalImg,
];

export function preloadAllWeddingAssets(): Promise<void[]> {
  if (typeof window === 'undefined') return Promise.resolve([]);

  const promises = ASSETS_TO_PRELOAD.map((src) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = src;
      const onDone = () => resolve();
      img.onload = onDone;
      img.onerror = onDone;
      if (typeof img.decode === 'function') {
        img.decode().then(onDone).catch(onDone);
      }
    });
  });

  return Promise.all(promises);
}

// Automatically start preloading as soon as the module is evaluated
if (typeof window !== 'undefined') {
  preloadAllWeddingAssets();
}
