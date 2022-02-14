import { useEffect, useRef, useState } from "react"

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useWindowSize } from "@lincode/hooks"

function Globe() {
    const globeRef = useRef(null)
    const canvasRef = useRef(null)
    const [windowWidth] = useWindowSize()

    const [globeWidth, setglobeWidth] = useState(590)
    const [globeHeight, setglobeHeight] = useState(550)

    useEffect(() => {
        if (windowWidth < 948) {
            setglobeWidth(510)
            setglobeHeight(470)
        }
    })

    useEffect(() => {
        function createGlobe() {
            const container = globeRef.current
            const canvas = canvasRef.current

            const globeRadius = 100
            const globeWidth = 4098 / 2
            const globeHeight = 1968 / 2

            function convertFlatCoordsToSphereCoords(x, y) {
                let latitude = ((x - globeWidth) / globeWidth) * -180
                let longitude = ((y - globeHeight) / globeHeight) * -90
                latitude = (latitude * Math.PI) / 180
                longitude = (longitude * Math.PI) / 180
                const radius = Math.cos(longitude) * globeRadius

                return {
                    x: Math.cos(latitude) * radius,
                    y: Math.sin(longitude) * globeRadius,
                    z: Math.sin(latitude) * radius,
                }
            }

            function makeMagic(points) {
                const { width, height } = container.getBoundingClientRect()

                const scene = new THREE.Scene()
                const camera = new THREE.PerspectiveCamera(45, width / height)
                const renderer = new THREE.WebGLRenderer({
                    canvas,
                    antialias: true,
                })
                renderer.setSize(width, height)
                const mergedGeometry = new THREE.Geometry()
                const pointGeometry = new THREE.SphereGeometry(0.5, 1, 1)
                const pointMaterial = new THREE.MeshBasicMaterial({
                    color: "#989db5",
                })

                for (const point of points) {
                    const { x, y, z } = convertFlatCoordsToSphereCoords(point.x, point.y, width, height)

                    if (x && y && z) {
                        pointGeometry.translate(x, y, z)
                        mergedGeometry.merge(pointGeometry)
                        pointGeometry.translate(-x, -y, -z)
                    }
                }

                const globeShape = new THREE.Mesh(mergedGeometry, pointMaterial)
                scene.add(globeShape)

                container.classList.add("peekaboo")

                camera.orbitControls = new OrbitControls(camera, canvas)
                camera.orbitControls.enableKeys = false
                camera.orbitControls.enablePan = false
                camera.orbitControls.enableZoom = false
                camera.orbitControls.enableDamping = false
                camera.orbitControls.enableRotate = true
                camera.orbitControls.autoRotate = true
                camera.position.z = -265

                function animate() {
                    camera.orbitControls.update()
                    requestAnimationFrame(animate)
                    renderer.render(scene, camera)
                }
                animate()
            }

            function hasWebGL() {
                const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
                if (gl && gl instanceof WebGLRenderingContext) {
                    return true
                }
                return false
            }

            function init() {
                if (hasWebGL()) {
                    window
                        .fetch(
                            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/js/points.json"
                        )
                        .then((response) => response.json())
                        .then((data) => {
                            makeMagic(data.points)
                        })
                }
            }
            init()
        }

        createGlobe()
    }, [])

    return (
        <div ref={globeRef}>
            <canvas ref={canvasRef} width={globeWidth} height={globeHeight} style={{ outline: "none" }} />
        </div>
    )
}

export default Globe
