import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    // GSAP plugins must be registered exactly once. Everything imports from the
    // single entry point in src/lib/animations/gsap.ts.
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/lib/animations/**"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "gsap",
              message: "Import { gsap } from '@/lib/animations/gsap' instead.",
            },
            {
              name: "gsap/ScrollTrigger",
              message:
                "Import { ScrollTrigger } from '@/lib/animations/gsap' instead.",
            },
            {
              name: "@gsap/react",
              message:
                "Import { useGSAP } from '@/lib/animations/gsap' instead.",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
