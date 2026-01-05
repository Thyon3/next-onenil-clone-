# OneNil Clone Project Guide

This project is a pixel-perfect clone of [OneNil.com](https://onenil.com/), built with Next.js 14+ (App Router).

## Project Structure

- **`app/`**: Contains the main application code.
    - `layout.tsx`: Global layout with font setup (`Manrope` and `Syncopate`).
    - `globals.css`: Global styles, variables, and reset.
    - `page.tsx`: The main landing page assembling all components.
- **`components/`**: Reusable UI components.
    - `Header`: Fixed navigation bar with transparent/difference blend mode.
    - `Hero`: Fullscreen hero section with video background support.
    - `SelectedWorks`: Masonry-style grid for project showcases.
    - `Footer`: Large typography footer with social links.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Customization

-   **Video Background**: Replace the `source` URL in `components/Hero.tsx` with your own video file or URL.
-   **Projects**: Update the `projects` array in `components/SelectedWorks.tsx` with your own case studies.
-   **Colors**: Adjust CSS variables in `app/globals.css` to change the theme.

## Technologies Used

-   **Next.js**: Framework.
-   **CSS Modules**: Component-scoped styling.
-   **Google Fonts**: `Manrope` (Body) and `Syncopate` (Headings).
-   **GSAP** (Ready): Installed for advanced animations (optional usage).
