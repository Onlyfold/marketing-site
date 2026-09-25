/**
 * Fetches a Google Font as TTF for use in `ImageResponse` (Satori cannot read woff2).
 * Subsetting to `text` keeps the download tiny. Resolves to undefined on any failure so
 * image generation degrades to the default font instead of failing the build.
 */
export async function loadGoogleFont(
  family: string,
  weight: number,
  text: string,
): Promise<ArrayBuffer | undefined> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl)).text();
    const fontUrl = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    )?.[1];
    if (!fontUrl) return undefined;

    const response = await fetch(fontUrl);
    return response.ok ? await response.arrayBuffer() : undefined;
  } catch {
    return undefined;
  }
}
