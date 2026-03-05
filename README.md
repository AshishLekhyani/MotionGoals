# MotionGoals

MotionGoals is a premium, motion-first challenge tracking application built with React and Framer Motion. It transforms the standard goal-setting process into a fluid, interactive experience by leveraging advanced animation patterns and a "physics-based" UI philosophy.


## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Usage Examples](#usage-examples)
- [Technical Highlights](#technical-highlights)

## Project Overview
MotionGoals solves the problem of "static dashboard fatigue" by introducing deliberate motion design into a productivity tool. It allows users to create, categorize, and track challenges while being guided by a highly reactive and polished interface.

## Key Features
- **Dynamic Dashboard**: Categorize challenges into Active, Completed, or Failed states.
- **Micro-interactions**: Hover/Tap animations on buttons and tabs for immediate feedback.
- **Advanced Motion**: Scroll-linked parallax effects and staggered list transitions.
- **Contextual State**: Global state management ensuring seamless updates across the UI.

## Technologies Used
- **[React 19](https://react.dev/)**: For building the component-based UI.
- **[Vite](https://vitejs.dev/)**: As the ultra-fast build tool and dev server.
- **[Framer Motion](https://www.framer.com/motion/)**: For orchestrating complex animations and transitions.
- **[React Router](https://reactrouter.com/)**: For fast, client-side navigation.
- **Vanilla CSS**: For a custom, high-performance design system.

## Installation Instructions
To set up MotionGoals locally, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/MotionGoals.git
   cd MotionGoals
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:(port)`.

## Usage Examples
### Adding a New Challenge
1. Click the **"Add Challenge"** button in the header.
2. Fill out the title, description, and deadline.
3. Select a representative icon from the animated grid.
4. Click **"Add Challenge"** to see your goal appear with a staggered entrance animation.

### Filtering Challenges
Click on the **Active**, **Completed**, or **Failed** tabs. Notice the smooth layout transitions as the list re-orders itself.

## Technical Highlights
- **Scroll-linked Parallax**: Implemented in `Welcome.jsx` using `useScroll` and `useTransform` to create depth.
- **Shared Layout Animations**: Used the `layoutId` prop in Framer Motion to animate the tab indicator smoothly between different categories.
- **Staggered Orchestration**: Leveraged the `stagger` utility for grid entrances and list additions to reduce cognitive load.
