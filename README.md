# Portfolio1

Configuration scaffold for a personal portfolio website using Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Preview

![Maaka Braxton Orioki portfolio homepage](docs/screenshots/portfolio-desktop.png)

Captured from the running local portfolio at 1440 × 1000.

## Current state

This repository contains dependency manifests, framework configuration, and an environment-file example. The portfolio application source is not included: there is no `src`, `app`, or `pages` directory. The application cannot be run from this checkout alone. The preview above was captured from the working local project.

## Included files

- [package.json](package.json) and the npm lockfile describe the intended dependencies and scripts.
- [next.config.ts](next.config.ts) contains the Next.js configuration.
- [tailwind.config.ts](tailwind.config.ts) and [postcss.config.js](postcss.config.js) configure styling.
- [.env.local.example](.env.local.example) lists the intended environment configuration.

## Intended direction

The original project plan describes a personal introduction, skills, project showcase, contact section, and GitHub repository integration. These remain planned features until the application source is restored or implemented.

## Continuing development

1. Restore or implement the application entry points and components.
2. Install dependencies with `npm ci` using a Node.js version compatible with the pinned Next.js version.
3. Configure any required local environment values.
4. Run and verify the development server and production build before publishing a demo.

Installing dependencies alone will not produce a working portfolio while the source files are missing.

## Contributing

Open an issue describing the source or feature you intend to restore. Include screenshots and verification commands once the application can run.

## License

No project license file is currently included.
