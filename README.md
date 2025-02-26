# Three.js Interactive Cube Demo

A simple interactive 3D cube demonstration built with Three.js, featuring GUI controls and responsive design.

## Features

- 3D cube with customizable properties
- Interactive GUI controls using dat.GUI
- Orbit controls for camera manipulation
- Responsive design that adapts to window resizing
- Animation effects using GSAP
- Various cube controls including:
  - Position adjustment (X and Y axes)
  - Color customization
  - Rotation animations
  - Visibility toggle
  - Wireframe mode

## Technologies Used

- Three.js
- dat.GUI
- GSAP (GreenSock Animation Platform)
- Vite (Build tool)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12.0.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:           git clone https://github.com/yourusername/threejs-cube-demo.git
2. Install dependencies:           npm install
3. Start the development server:   npm run dev 
4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Project Structure

├── src/
│   └── main.js         # Main application code
├── index.html          # Entry HTML file
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
## Controls

The demo includes several interactive controls:
- **Elevation**: Adjust the cube's Y position (-3 to 3)
- **Dragging**: Adjust the cube's X position (-3 to 3)
- **Color**: Change the cube's color using a color picker
- **Spin Y-axis**: Animate the cube's rotation around the Y-axis
- **Spin X-axis**: Animate the cube's rotation around the X-axis
- **Visibility**: Toggle the cube's visibility
- **Wireframe**: Toggle wireframe mode
- **Orbit Controls**: Click and drag to rotate the camera view

## Development

To modify the project:
1. The main Three.js scene setup is in `src/main.js`
2. GUI controls are implemented using dat.GUI
3. Animations are handled using GSAP and requestAnimationFrame

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- [Three.js](https://threejs.org/) - 3D Graphics Library
- [dat.GUI](https://github.com/dataarts/dat.gui) - Lightweight GUI controller
- [GSAP](https://greensock.com/gsap/) - Animation library
