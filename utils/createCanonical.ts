const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mazumaindia.com";

export function createCanonical(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}
