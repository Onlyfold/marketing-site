import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Brand mark on white for iOS home screens. */
export default async function AppleIcon() {
  const file = await readFile(
    path.join(process.cwd(), "public/images/brand-logo.png"),
  );
  const logo = `data:image/png;base64,${file.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
      }}
    >
      <img src={logo} alt="" width={150} height={35} />
    </div>,
    size,
  );
}
